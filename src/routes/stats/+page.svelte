<script>
	import '$lib/commons/styles.css';
	import vcsJson from '$lib/jsons/VCs.json';
	import cisJson from '$lib/jsons/CIs.json';
	import chatsJson from '$lib/jsons/Chats.json';
	import Donut from './Donut.svelte';
	import Bars from './Bars.svelte';
	import { evaluate } from 'mathjs';
	import Lines from './Lines.svelte';

	let vcsEntries = vcsJson['VCs'].slice(1);
	let cisEntries = cisJson['CIs'].slice(1);
	let chatsEntries = chatsJson['Chats'].slice(1);

	function getNBrands(entries) {
		let auxAllBrands = [];
		entries.forEach((entryArr) => auxAllBrands.includes(entryArr['Brand']) ? null : (auxAllBrands =
			[...auxAllBrands, entryArr['Brand']]));
		return auxAllBrands.length;
	}

	const vcsBrands = getNBrands(vcsEntries);
	const cisBrands = getNBrands(cisEntries);
	const chatsBrands = getNBrands(chatsEntries);


	function allHighValuesPercentage(field, entries, totalBrands) {
		let auxAllBrands = [];
		//Current Hierarchy: ∞ -> Yes with SLA -> !"Yes with SLA"&&Yes -> Both -> !"∞"&&newNº>oldNº -> *users -> -users
		entries.forEach((entryArr) => {
			const onAux = auxAllBrands[entryArr['Brand']];
			const newVal = entryArr[field];
			if (onAux === newVal) {
				return;
			}
			if (onAux === undefined || newVal === '∞' || newVal === 'Yes with SLA' ||
				(onAux !== 'Yes with SLA' && newVal === 'Yes') || newVal === 'Both' ||
				(onAux !== '∞' && !isNaN(newVal) && !isNaN(onAux) && onAux < newVal) ||
				// *users has priority over -users, not be true if 1*users vs 300-users but with multiplication it tends to infinity which in general is better.
				(isNaN(onAux) && isNaN(newVal) && onAux.includes('-users') && newVal.includes('*users'))) {
				auxAllBrands[entryArr['Brand']] = newVal;
				return;
			}
			// *users has priority over -users, not be true if 1*users vs 300-users but with multiplication it tends to infinity which in general is better.
			if (isNaN(onAux) && isNaN(newVal) && onAux.includes('*users') && newVal.includes('-users')) {
				return;
			}
			//(-users vs -users) or (*users vs *users) || (-users or *users) vs number
			if (isNaN(onAux) && isNaN(newVal) && onAux.includes('users') && newVal.includes('users') &&
				evaluate(onAux.replace('users', 1)) < evaluate(newVal.replace('users', 1)) ||
				((isNaN(onAux) && !isNaN(newVal) && onAux.includes('users') && newVal > evaluate(onAux.replace('users', 1))) ||
					(!isNaN(onAux) && isNaN(newVal) && newVal.includes('users') && onAux <
						evaluate(newVal.replace('users', 1))))) {
				auxAllBrands[entryArr['Brand']] = newVal;
			}
		});
		//Group values
		let grouped = [];
		for (const value of Object.values(auxAllBrands)) {
			if (grouped[value] === undefined) grouped[value] = 1; else grouped[value] += 1;
		}
		const preppedData = Object.entries(grouped).map(([key, value]) => {
			const percentage = Math.round((value / totalBrands) * 100);
			return { id: `${key}, ${percentage}%`, nested: { value: value } };
		});
		return preppedData.sort((a, b) => {
			return b.nested.value - a.nested.value;
		});
	}

	function splitArrayPercentages(field, entries, totalBrands) {
		let auxAllBrands = [];
		let possibleValues = [];
		entries.forEach((entryArr) => {
			const newVal = entryArr[field];
			const currBrand = entryArr['Brand'];
			//Only eval the first per brand that is not N/A
			if (!auxAllBrands.includes(currBrand) && newVal !== 'N/A') {
				auxAllBrands = [...auxAllBrands, currBrand];
				const splitArr = newVal.split(',').map((item) => item.trim());
				for (const option of splitArr) {
					if (!possibleValues.some(e => e.name === option)) {
						possibleValues = [...possibleValues, { name: option, hits: 1 }];
					}
					else {
						possibleValues[possibleValues.findIndex(e => e.name === option)].hits += 1;
					}
				}
			}
		});
		const preppedData = possibleValues.map(e => {
			const percentage = Math.round((e.hits / totalBrands) * 100);
			return { id: `${e.name}, ${percentage}%`, nested: { value: e.hits } };
		});
		return preppedData.sort((a, b) => {
			return b.nested.value - a.nested.value;
		});
	}

	function pricePerUser(maxUsers, entries, step = 1) {
		let averages = [];
		for (let currUser = 1; currUser <= maxUsers; currUser += step) {
			let nonSelfHostedEntries = 0;
			averages = [...averages, {
				id: currUser, nested: {
					value: Math.round((entries.reduce((acc, arr) => {
						if (arr['Self-hosted'] === 'Yes') return acc;

						nonSelfHostedEntries += 1;
						if ((arr['MaxUsers'] !== '∞' && arr['MaxUsers'] < currUser)) return acc;

						function extraUsers() {
							if (arr['IncludedUsers'] === '∞') return 0;
							const parsedIncludedUsers = parseInt(arr['IncludedUsers']);
							if (parsedIncludedUsers >= currUser) return 0;
							return currUser - parsedIncludedUsers;
						}

						function priceUsers() {
							return extraUsers() * parseFloat(arr['PriceExtraUser$']);
						}

						function finalPrice() {
							return Math.round((parseFloat(arr['LicenseCost$PerMonth']) + priceUsers() + Number.EPSILON) * 100) / 100;
						}

						return acc + finalPrice();
					}, 0) / nonSelfHostedEntries))
				}
			}];
		}
		return averages;
	}

</script>

<svelte:head>
	<title>Statistics</title>
</svelte:head>

<div style='margin-top: 75px!important;'>
	<p class='h2 text-center opacity-75'>Version Control Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{vcsBrands} Brands, {vcsEntries.length} Tiers</p>
	<div class='mt-4 d-flex flex-row gap-5 flex-wrap justify-content-evenly'>
		<Lines data={pricePerUser(100, vcsEntries,2)} offsetBy='1' title='Average cloud-based monthly price per nº of users'
					 xLegend='Nº Users' />
		<Donut data={allHighValuesPercentage('Self-hosted', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Self-hosted solutions' />
		<Donut data={allHighValuesPercentage('Issues', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Issue tracking' />
		<Donut data={allHighValuesPercentage('Kanban', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Kanban boards' />
		<Donut data={allHighValuesPercentage('Wiki', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Wiki documentation' />
		<Donut data={allHighValuesPercentage('PackageRegistry', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Package Registry' />
		<Bars data={allHighValuesPercentage('NPrivateReposFormula', vcsEntries, vcsBrands)} offsetBy='1'
					title="Brand's Nº Included Repos" xLegend='Nº Private Repos' />
		<Donut data={allHighValuesPercentage('CommercialSupport', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands with Commercial Support' />
	</div>
</div>

<div class='mt-5'>
	<p class='h2 mb-1 text-center w-100 opacity-75'>CI/CD Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{cisBrands} Brands, {cisEntries.length} Tiers</p>
	<div class='mt-4 d-flex flex-row flex-wrap gap-5 justify-content-evenly'>
		<Lines data={pricePerUser(100, cisEntries,2)} offsetBy='0' title='Average cloud-based monthly price per nº of users'
					 xLegend='Nº Users' />
		<Donut data={allHighValuesPercentage('Self-hosted', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Self-hosted solutions' />
		<Donut data={allHighValuesPercentage('CD', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer CD solutions' />
		<Bars data={splitArrayPercentages('GitPlatformsCompatible', cisEntries, cisBrands)} offsetBy='0'
					title='Git platforms by Brands' xLegend='Git platforms' />
		<Bars data={splitArrayPercentages('CloudBuildOSs', cisEntries, cisBrands)} offsetBy='0'
					title='Cloud Build OSs by Brands' xLegend='Cloud Build OSs' />
		<Bars data={splitArrayPercentages('Self-hostedRunnersBuildOSs', cisEntries, cisBrands)} offsetBy='0' step='1'
					title='Self-hosted Build OSs by Brands' xLegend='Self-hosted OSs' />
		<Donut data={allHighValuesPercentage('CachingPipelineAndDependencies',  cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Caching in the pipeline' />
		<Donut data={allHighValuesPercentage('ScheduledPipelines', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Scheduled Pipelines' />
		<Donut data={allHighValuesPercentage('StatisticsAndMetrics', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Statistics and Metrics' />
		<Bars data={allHighValuesPercentage('CommercialSupport', cisEntries, cisBrands)} offsetBy='0'
					title='Brands with Commercial Support' />
	</div>
</div>

<div class='mt-5'>
	<p class='h2 mb-1 text-center w-100 opacity-75'>Chats Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{chatsBrands} Brands, {chatsEntries.length} Tiers</p>
	<div class='mt-4 d-flex flex-row flex-wrap gap-5 justify-content-evenly'>
		<Lines data={pricePerUser(100, chatsEntries, 2)} offsetBy='2'
					 title='Average cloud-based monthly price per nº of users' xLegend='Nº Users' />
		<Bars data={allHighValuesPercentage('PeoplePerCall', chatsEntries, chatsBrands)} offsetBy='2'
					title="Brand's maximum users per call" xLegend='Users' />
		<Donut data={allHighValuesPercentage('MsgHistory', chatsEntries, chatsBrands)} offsetBy='2'
					 title="Brand's maximum chat history" />
		<Donut data={allHighValuesPercentage('Integrations', chatsEntries, chatsBrands)} offsetBy='2'
					 title='Brands that have Integrations' />
		<Bars data={allHighValuesPercentage('CallDurationMins', chatsEntries, chatsBrands)} offsetBy='2' step='2'
					title="Brand's maximum call duration minutes" xLegend='Call minutes' />
		<Bars data={allHighValuesPercentage('FreeTemporaryGuestsFormula', chatsEntries, chatsBrands)} offsetBy='2'
					title="Brand's maximum free temporary guests" xLegend='Nº Guests' />

		<Bars data={allHighValuesPercentage('ChatFilesFormulaGB', chatsEntries, chatsBrands)} offsetBy='2'
					title="Brand's maximum chat files space" xLegend='GB' />

		<Donut data={allHighValuesPercentage('Self-hosted', chatsEntries, chatsBrands)} offsetBy='2'
					 title='Brands with Self-hosted solutions' />
		<Donut data={allHighValuesPercentage('CommercialSupport', chatsEntries, chatsBrands)} offsetBy='2'
					 title='Brands with Commercial Support' />
	</div>
</div>
