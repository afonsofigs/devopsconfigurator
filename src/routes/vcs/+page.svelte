<script>
	// @ts-nocheck
	import { Button, ButtonGroup, Label } from 'sveltestrap';
	import '$lib/commons/styles.css';
	import { VCFieldsDefault, selfHosted } from '$lib/commons/options.js';
	import NumberInput from '$lib/commons/NumberInput.svelte';
	import vcsJson from '$lib/jsons/VCs.json';
	import GreenSwitch from '$lib/commons/GreenSwitch.svelte';
	import SideMenu from './SideMenu.svelte';
	import { evaluate } from 'mathjs';
	import { InfoCircle } from 'svelte-bootstrap-icons';
	import HelpModal from '$lib/commons/HelpModal.svelte';
	import Grids from '$lib/commons/Grids.svelte';
	import Title from '$lib/commons/Title.svelte';
	import VisibleFields from '$lib/commons/VisibleFields.svelte';

	let vcsEntries = []; //[]
	let filteredEntries = []; //[]
	let allFields = []; //[]
	let allFieldNames = []; //[]

	let users = 1; //1
	let privateRepos = 1; //1
	let diskSpace = 1;
	let allBrands = []; //[]
	let selfHostedChecked = 'Both'; //"Both"
	let issuesChecked = false;
	let kanbanChecked = false;
	let wikiChecked = false;
	let packageRegistryChecked = false;
	let brandsSelected = []; //[]
	let supportSelected = []; //[]
	let currentPagination = 10; //10
	let fieldsSelected = []; //[]

	let rowModalOpen = false; //false
	let helpModalOpen = false; //false
	let sideMenuOpen = false; //false

	//Fetch json
	(() => {
		const vcsColumns = vcsJson['VCs'][0];
		//Slice names row
		vcsEntries = vcsJson['VCs'].slice(1);

		let auxFields = [];
		let auxFieldNames = [];
		let auxAllBrands = [];

		Object.keys(vcsColumns).forEach((key, index) => {
			if (key === 'colID') {
				auxFields[index] = { id: key, name: vcsColumns[key], hidden: true };
			} else {
				auxFields[index] = { id: key, name: vcsColumns[key] };
				auxFieldNames[index] = vcsColumns[key];
			}
		});

		vcsEntries.forEach((vcsArr) => {
			auxAllBrands.includes(vcsArr['Brand'])
				? ''
				: (auxAllBrands = [...auxAllBrands, vcsArr['Brand']]);
			const diskSpaceFormula = vcsArr['DiskSpaceGBFormula'];
			if (diskSpaceFormula === '∞') {
			} else if (isNaN(diskSpaceFormula)) {
				const evalledFormula = evaluate(diskSpaceFormula.replace('extraUsers', 0));
				if (evalledFormula < diskSpace) {
					diskSpace = evalledFormula;
				}
			} else if (diskSpaceFormula < diskSpace) {
				diskSpace = diskSpaceFormula;
			}
		});

		allFields = auxFields;

		//Exclude fields ignored by default from the selected
		auxFields.forEach((field) =>
			VCFieldsDefault.includes(field.id) ? (fieldsSelected = [...fieldsSelected, field.name]) : null
		);

		allFieldNames = auxFieldNames;
		allBrands = auxAllBrands;
		return true;
	})();

	function filteredData() {
		function checkBrand(arr) {
			return brandsSelected.length === 0 || brandsSelected.includes(arr['Brand']);
		}

		function checkUsers(arr) {
			return arr['MaxUsers'] === '∞' || users <= parseInt(arr['MaxUsers']);
		}

		function checkPrivateRepos(arr) {
			return arr['FinalNRepos'] === '∞' || privateRepos <= parseInt(arr['FinalNRepos']);
		}

		function checkDiskGB(arr) {
			if (arr['FinalDiskSpace'] === '∞' || diskSpace <= parseFloat(arr['FinalDiskSpace'])) {
				return true;
			} else {
				return arr['PriceExtraGBDiskSpace'] !== 'N/A';
			}
		}

		function checkSelfHosted(arr) {
			return (
				selfHostedChecked === 'Both' ||
				arr['Self-hosted'] === 'Both' ||
				arr['Self-hosted'] === selfHostedChecked
			);
		}

		function checkIssues(arr) {
			return !issuesChecked || (issuesChecked && arr['Issues'] === 'Yes');
		}

		function checkKanban(arr) {
			return !kanbanChecked || (kanbanChecked && arr['Kanban'] === 'Yes');
		}

		function checkWiki(arr) {
			return !wikiChecked || (wikiChecked && arr['Wiki'] === 'Yes');
		}

		function checkPackageReg(arr) {
			return (
				!packageRegistryChecked || (packageRegistryChecked && arr['PackageRegistry'] === 'Yes')
			);
		}

		function checkSupport(arr) {
			return (
				supportSelected.length === 0 ||
				supportSelected.some((git) => arr['CommercialSupport'].includes(git))
			);
		}

		function extraUsers(arr) {
			if (arr['IncludedUsers'] === '∞') return 0;
			const parsedIncludedUsers = parseInt(arr['IncludedUsers']);
			if (parsedIncludedUsers >= users) return 0;
			return users - parsedIncludedUsers;
		}

		function calcUsersBasedValues(arr) {
			function calcNPrivateRepos() {
				if (arr['NPrivateReposFormula'] === '∞' || !isNaN(arr['NPrivateReposFormula'])) {
					return arr['NPrivateReposFormula'];
				}
				return evaluate(arr['NPrivateReposFormula'].replace('extraUsers', extraUsers(arr)));
			}

			function calcDiskSpace() {
				if (arr['DiskSpaceGBFormula'] === '∞' || !isNaN(arr['DiskSpaceGBFormula'])) {
					return arr['DiskSpaceGBFormula'];
				}
				return evaluate(arr['DiskSpaceGBFormula'].replace('extraUsers', extraUsers(arr)));
			}

			arr['FinalNRepos'] = calcNPrivateRepos();
			arr['FinalDiskSpace'] = calcDiskSpace();
		}

		function calcCustomPrice(arr) {
			function priceUsers() {
				return extraUsers(arr) * parseFloat(arr['PriceExtraUser$']);
			}

			function priceDiskGB() {
				if (arr['PriceExtraGBDiskSpace'] === 'N/A') return 0;
				if (arr['FinalDiskSpace'] === '∞') return 0;
				const extraGBs = (() => {
					const parsedDiskSpaceGB = parseFloat(arr['FinalDiskSpace']);
					if (parsedDiskSpaceGB >= diskSpace) return 0;
					return diskSpace - parsedDiskSpaceGB;
				})();
				if (extraGBs > 0) arr['FinalDiskSpace'] = String(diskSpace);
				return extraGBs * parseFloat(arr['PriceExtraGBDiskSpace']);
			}

			//Cell value changes
			arr['CalculatedCost'] =
				Math.round(
					(parseFloat(arr['LicenseCost$PerMonth']) +
						priceUsers() +
						priceDiskGB() +
						Number.EPSILON) *
						100
				) / 100;
		}

		filteredEntries = vcsEntries
			.filter(
				(arr) =>
					checkBrand(arr) &&
					checkUsers(arr) &&
					checkSelfHosted(arr) &&
					checkIssues(arr) &&
					checkKanban(arr) &&
					checkWiki(arr) &&
					checkPackageReg(arr) &&
					checkSupport(arr)
			)
			.map((arr) => {
				calcUsersBasedValues(arr);
				return arr;
			})
			.filter((arr) => {
				return checkPrivateRepos(arr) && checkDiskGB(arr);
			})
			.map((arr) => {
				calcCustomPrice(arr);
				return arr;
			});
	}

	//Source or filters changed, run filtering
	$: (vcsEntries,
	selfHostedChecked,
	users,
	privateRepos,
	diskSpace,
	brandsSelected,
	supportSelected,
	issuesChecked,
	kanbanChecked,
	wikiChecked,
	packageRegistryChecked),
		filteredData();

	function openSideMenu() {
		sideMenuOpen = !sideMenuOpen;
	}
</script>

<Title prefix="Version Control" />

<div
	class="d-flex flex-row justify-content-center align-items-top gap-1"
	style="margin-top: 75px!important;"
>
	<p class="h2 opacity-75">Version Control Comparisons</p>
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

	<GreenSwitch bind:checkVar={issuesChecked} label="Issues" />
	<GreenSwitch bind:checkVar={wikiChecked} label="Wiki" />

	<NumberInput
		bind:value={privateRepos}
		classNames="bg-light"
		label="Private Repositories"
		min="1"
		placeholder="repos"
		width="60px"
	/>

	<Button color="light" on:click={openSideMenu}>More filters</Button>

	<VisibleFields bind:allFieldNames bind:fieldsSelected />
</div>

<Grids allEntries={vcsEntries} {allFields} {currentPagination} {fieldsSelected} {filteredEntries} />

<HelpModal bind:helpModalOpen category="VCs" title="Version Control Help" />

<SideMenu
	bind:allBrands
	bind:brandsSelected
	bind:currentPagination
	bind:diskSpace
	bind:kanbanChecked
	bind:packageRegistryChecked
	bind:sideMenuOpen
	bind:supportSelected
/>
