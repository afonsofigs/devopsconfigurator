<script>
	// @ts-nocheck

	import { Button, ButtonGroup, Input, Label } from 'sveltestrap';
	import '$lib/commons/styles.css';
	import MultiSelect from 'svelte-multiselect';
	import { boolJoins, gitPlatforms, CICDFieldsDefault, selfHosted } from '$lib/commons/options.js';
	import MultiOptionSlot from '$lib/commons/MultiOptionSlot.svelte';
	import NumberInput from '$lib/commons/NumberInput.svelte';
	import SideMenu from './SideMenu.svelte';
	import cisJson from '$lib/jsons/CIs.json';
	import { InfoCircle } from 'svelte-bootstrap-icons';
	import HelpModal from '$lib/commons/HelpModal.svelte';
	import Grids from '$lib/commons/Grids.svelte';
	import Title from '$lib/commons/Title.svelte';
	import VisibleFields from '$lib/commons/VisibleFields.svelte';

	let allFieldNames = []; //[]
	let ciEntries = []; //[]
	let filteredEntries = []; //[]
	let allFields = []; //[]
	let allBrands = []; //[]

	let users = 1; //1
	let concurrentBuilds = 0; //0
	let selfHostedChecked = 'Both'; //"Both"
	let selfHostedRunners = 0; //0
	let linuxMonthlyCloudMins = 0; //0
	let dockerMonthlyCloudMins = 0; //0
	let windowsMonthlyCloudMins = 0; //0
	let macOSMonthlyCloudMins = 0; //0
	let cdChecked = false; //false
	let gitPlatformsSelected = []; //[]
	let cachingChecked = false;
	let scheduledChecked = false;
	let statisticsChecked = false;
	let fieldsSelected = []; //[]
	let brandsSelected = []; //[]
	let cloudOSsSelected = []; //[]
	let selfHostedOSsSelected = []; //[]
	let boolCloudBuild = boolJoins[0]; //boolJoins[0] //"0r"
	let boolSelfHostedBuild = boolJoins[0]; //boolJoins[0] //"0r"
	let supportSelected = []; //[]
	let currentPagination = 10; //10

	let rowModalOpen = false; //false
	let helpModalOpen = false; //false

	let sideMenuOpen = false; //false

	//Fetch json
	(() => {
		const ciColumns = cisJson['CIs'][0];
		ciEntries = cisJson['CIs'].slice(1);
		let auxFields = [];
		let auxFieldNames = [];
		let auxAllBrands = [];
		Object.keys(ciColumns).forEach((key, index) => {
			if (key === 'colID') {
				auxFields[index] = { id: key, name: ciColumns[key], hidden: true };
			} else {
				auxFields[index] = { id: key, name: ciColumns[key] };
				auxFieldNames[index] = ciColumns[key];
			}
		});
		ciEntries.forEach((arr) =>
			auxAllBrands.includes(arr['Brand']) ? '' : (auxAllBrands = [...auxAllBrands, arr['Brand']])
		);

		allFields = auxFields;

		//Exclude fields ignored by default from the selected
		auxFields.forEach((field) =>
			CICDFieldsDefault.includes(field.id)
				? (fieldsSelected = [...fieldsSelected, field.name])
				: null
		);

		allFieldNames = auxFieldNames;
		allBrands = auxAllBrands;
		return true;
	})();

	function filteredData() {
		function checkBrand(arr) {
			return brandsSelected.length === 0 || brandsSelected.includes(arr['Brand']);
		}

		function checkSelfHosted(arr) {
			return (
				selfHostedChecked === 'Both' ||
				arr['Self-hosted'] === 'Both' ||
				arr['Self-hosted'] === selfHostedChecked
			);
		}

		function checkCD(arr) {
			return !cdChecked || (cdChecked && arr['CD'] === 'Yes');
		}

		function checkCaching(arr) {
			return !cachingChecked || (cachingChecked && arr['CachingPipelineAndDependencies'] !== 'No');
		}

		function checkStats(arr) {
			return !statisticsChecked || (statisticsChecked && arr['StatisticsAndMetrics'] !== 'No');
		}

		function checkScheduled(arr) {
			return !scheduledChecked || (scheduledChecked && arr['ScheduledPipelines'] === 'Yes');
		}

		function checkGitPlatforms(arr) {
			return (
				gitPlatformsSelected.length === 0 ||
				arr['GitPlatformsCompatible'] === 'All' ||
				gitPlatformsSelected.some((git) => arr['GitPlatformsCompatible'].split(', ').includes(git)) //OR
				//gitPlatformsSelected.every((git) => arr["GitPlatformsCompatible"].split(", ").includes(git)) //AND
			);
		}

		function checkSupport(arr) {
			return (
				supportSelected.length === 0 ||
				supportSelected.some((git) => arr['CommercialSupport'].includes(git))
			);
		}

		function checkCloudBuildOSs(arr) {
			return (
				cloudOSsSelected.length === 0 ||
				(boolCloudBuild === 'Or'
					? cloudOSsSelected.some((os) => arr['CloudBuildOSs'].split(', ').includes(os))
					: cloudOSsSelected.every((os) => arr['CloudBuildOSs'].split(', ').includes(os)))
			);
		}

		function checkSelfHostedBuildOSs(arr) {
			return (
				selfHostedOSsSelected.length === 0 ||
				(boolSelfHostedBuild === 'Or'
					? selfHostedOSsSelected.some((os) =>
							arr['Self-hostedRunnersBuildOSs'].split(', ').includes(os)
					  )
					: selfHostedOSsSelected.every((os) =>
							arr['Self-hostedRunnersBuildOSs'].split(', ').includes(os)
					  )) //AND
			);
		}

		function checkUsers(arr) {
			return arr['MaxUsers'] === '∞' || users <= parseInt(arr['MaxUsers']);
		}

		function checkConcurrentBuilds(arr) {
			return (
				arr['NCloudConcurrentBuilds'] === '∞' ||
				concurrentBuilds <= parseInt(arr['NCloudConcurrentBuilds']) ||
				arr['PriceExtraParallelBuild'] !== 'N/A'
			);
		}

		function checkSelfHostedRunners(arr) {
			return (
				arr['NSelf-hostedRunners'] === '∞' ||
				selfHostedRunners <= parseInt(arr['NSelf-hostedRunners']) ||
				arr['PriceExtraRunners'] !== 'N/A'
			);
		}

		function checkCloudBuilds(arr, osName, monthlyCloudMins) {
			if (monthlyCloudMins === 0) return true;
			if (arr[`CreditsPerCloudBuildMinute${osName}`] === 'N/A') return false;
			if (
				arr['PricePerExtraCredit'] === 'N/A' &&
				parseFloat(arr['IncludedCreditsPerMonth']) < monthlyCloudMins
			) {
				return false;
			} //included credits are enough
			return true;
		}

		function calcCustomPrice(arr) {
			function priceUsers() {
				if (arr['IncludedUsers'] === '∞') return 0;
				const parsedIncludedUsers = parseInt(arr['IncludedUsers']);
				if (parsedIncludedUsers >= users) return 0;
				return (users - parsedIncludedUsers) * parseFloat(arr['PriceExtraUser$']);
			}

			function priceCloudConcurrentBuilds() {
				if (arr['PriceExtraParallelBuild'] === 'N/A') return 0;
				if (arr['NCloudConcurrentBuilds'] === '∞') return 0;
				const parsedNCBuilds = parseInt(arr['NCloudConcurrentBuilds']);
				if (parsedNCBuilds >= concurrentBuilds) return 0;
				return (concurrentBuilds - parsedNCBuilds) * parseFloat(arr['PriceExtraParallelBuild']);
			}

			function priceSelfHostedRunners() {
				if (arr['PriceExtraRunners'] === 'N/A') return 0;
				if (arr['NSelf-hostedRunners'] === '∞') return 0;
				const parsedNCBuilds = parseInt(arr['NSelf-hostedRunners']);
				if (parsedNCBuilds >= selfHostedRunners) return 0;
				return (selfHostedRunners - parsedNCBuilds) * parseFloat(arr['PriceExtraRunners']);
			}

			function priceCloudBuildMinutes(osName, monthlyCloudMins) {
				if (monthlyCloudMins === 0) return 0;
				const parsedCreditsPMin = parseFloat(arr[`CreditsPerCloudBuildMinute${osName}`]);
				if (parsedCreditsPMin === 0) return 0; //if it is free
				if (arr['IncludedCreditsPerMonth'] === '∞') return 0; // if included credits are infinity
				const parsedIncludedCredits = parseFloat(arr['IncludedCreditsPerMonth']);
				if (arr['PricePerExtraCredit'] === 'N/A' && parsedIncludedCredits >= monthlyCloudMins)
					return 0; //If "PricePerExtraCredit" == "N/A" then check if included credits are enough
				const parsedPricePerExtraCredit = parseFloat(arr['PricePerExtraCredit']);
				const minToCredits = monthlyCloudMins * parsedCreditsPMin;
				const minusIncludedCredits = minToCredits - parsedIncludedCredits;
				if (minusIncludedCredits < 0) return 0;
				return minusIncludedCredits * parsedPricePerExtraCredit;
			}

			arr['CalculatedCost'] =
				Math.round(
					(parseFloat(arr['LicenseCost$PerMonth']) +
						priceUsers() +
						priceCloudConcurrentBuilds() +
						priceSelfHostedRunners() +
						priceCloudBuildMinutes('Linux', linuxMonthlyCloudMins) +
						priceCloudBuildMinutes('Docker', dockerMonthlyCloudMins) +
						priceCloudBuildMinutes('Windows', windowsMonthlyCloudMins) +
						priceCloudBuildMinutes('macOS', macOSMonthlyCloudMins) +
						Number.EPSILON) *
						100
				) / 100;
		}

		filteredEntries = ciEntries
			.filter((arr) => {
				return (
					checkBrand(arr) &&
					checkGitPlatforms(arr) &&
					checkCloudBuildOSs(arr) &&
					checkSelfHostedBuildOSs(arr) &&
					checkUsers(arr) &&
					checkCD(arr) &&
					checkSelfHosted(arr) &&
					checkConcurrentBuilds(arr) &&
					checkSelfHostedRunners(arr) &&
					checkCloudBuilds(arr, 'Linux', linuxMonthlyCloudMins) &&
					checkCloudBuilds(arr, 'Docker', dockerMonthlyCloudMins) &&
					checkCloudBuilds(arr, 'Windows', windowsMonthlyCloudMins) &&
					checkCloudBuilds(arr, 'macOS', macOSMonthlyCloudMins) &&
					checkSupport(arr) &&
					checkCaching(arr) &&
					checkStats(arr) &&
					checkScheduled(arr)
				);
			})
			.map((arr) => {
				calcCustomPrice(arr);
				//return filteredFields(arr);
				return arr;
			});
	}

	//Source or filters changed, run filtering
	$: (ciEntries,
	cdChecked,
	selfHostedChecked,
	gitPlatformsSelected,
	users,
	concurrentBuilds,
	selfHostedRunners,
	linuxMonthlyCloudMins,
	dockerMonthlyCloudMins,
	windowsMonthlyCloudMins,
	macOSMonthlyCloudMins,
	brandsSelected,
	cloudOSsSelected,
	selfHostedOSsSelected,
	boolCloudBuild,
	boolSelfHostedBuild,
	supportSelected,
	statisticsChecked,
	scheduledChecked,
	cachingChecked),
		filteredData();

	function openSideMenu() {
		sideMenuOpen = !sideMenuOpen;
	}
</script>

<Title prefix="CI/CD" />

<div
	class="d-flex flex-row justify-content-center align-items-top gap-1"
	style="margin-top: 75px!important;"
>
	<p class="h2 opacity-75">CI/CD Comparisons</p>
	<a href on:click={() => (helpModalOpen = !helpModalOpen)}>
		<InfoCircle height={18} width={18} />
	</a>
</div>
<div class="d-flex flex-row flex-wrap gap-4 justify-content-center align-content-center mb-3 mt-4">
	<NumberInput
		bind:value={users}
		classNames="bg-light"
		label="Users"
		min="1"
		placeholder="users"
		width="60px"
	/>
	<div class="d-flex flex-row gap-2 mb-0 align-content-center">
		<Label class="my-auto" for="runnersInput">Self-hosted</Label>
		<ButtonGroup>
			{#each selfHosted as selfHostedState}
				<Button
					size="sm"
					color="light"
					active={selfHostedChecked === selfHostedState}
					on:click={(e) => (selfHostedChecked = e.target.innerText)}>{selfHostedState}</Button
				>
			{/each}
		</ButtonGroup>
	</div>

	<div class="d-flex flex-row gap-1">
		<Label class="my-auto" for="runnersInput">CD</Label>
		<Input bind:checked={cdChecked} class="my-auto" id="s2" type="switch" />
	</div>

	<MultiSelect
		bind:selected={gitPlatformsSelected}
		options={gitPlatforms}
		outerDivClass="bg-light"
		placeholder="Git Platforms"
	>
		<MultiOptionSlot let:option {option} slot="selected" />
		<MultiOptionSlot let:option {option} slot="option" />
	</MultiSelect>

	<Button color="light" on:click={openSideMenu}>More filters</Button>

	<VisibleFields bind:allFieldNames bind:fieldsSelected />
</div>

<Grids allEntries={ciEntries} {allFields} {currentPagination} {fieldsSelected} {filteredEntries} />

<HelpModal bind:helpModalOpen category="CIs" title="CI/CD Help" />

<SideMenu
	bind:allBrands
	bind:boolCloudBuild
	bind:boolSelfHostedBuild
	bind:brandsSelected
	bind:cachingChecked
	bind:cloudOSsSelected
	bind:concurrentBuilds
	bind:currentPagination
	bind:dockerMonthlyCloudMins
	bind:linuxMonthlyCloudMins
	bind:macOSMonthlyCloudMins
	bind:scheduledChecked
	bind:selfHostedOSsSelected
	bind:selfHostedRunners
	bind:sideMenuOpen
	bind:statisticsChecked
	bind:supportSelected
	bind:windowsMonthlyCloudMins
/>
