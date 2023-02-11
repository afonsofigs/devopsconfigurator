<script>
	import '$lib/commons/styles.css';
	import vcsJson from '$lib/jsons/VCs.json';
	import cisJson from '$lib/jsons/CIs.json';
	import chatsJson from '$lib/jsons/Chats.json';
	import Donut from './Donut.svelte';
	import Bars from './Bars.svelte';
	import { evaluate } from 'mathjs';

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
</script>

<svelte:head>
	<title>Statistics</title>
</svelte:head>

<div class='mt-4'></div>
<div class='mt-5'>
	<p class='h2 mb-1 text-center w-100 opacity-75'>Version Control Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{vcsBrands} Brands</p>
	<div class='mt-4 d-flex flex-row gap-5 flex-wrap justify-content-evenly'>
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
					title="Brand's Nº Included Repos" />
		<Donut data={allHighValuesPercentage('CommercialSupport', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands with Commercial Support' />
	</div>
</div>

<div class='mt-5'>
	<p class='h2 mb-1 text-center w-100 opacity-75'>CI/CD Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{cisBrands} Brands</p>
	<div class='mt-4 d-flex flex-row flex-wrap gap-5 justify-content-evenly'>
		<Donut data={allHighValuesPercentage('Self-hosted', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Self-hosted solutions' />
		<Donut data={allHighValuesPercentage('CD', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer CD solutions' />
		<Bars data={allHighValuesPercentage('GitPlatformsCompatible', cisEntries, cisBrands)} offsetBy='0'
					title='Git platforms combinations by Brands' />
		<Bars data={allHighValuesPercentage('CloudBuildOSs', cisEntries, cisBrands)} offsetBy='0'
					title='Cloud Build OSs combinations by Brands' />
		<Bars data={allHighValuesPercentage('Self-hostedRunnersBuildOSs', cisEntries, cisBrands)} offsetBy='0' step='1'
					title='Self-hosted Build OSs combinations by Brands' />
		<Donut data={allHighValuesPercentage('CachingPipelineAndDependencies',  cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Caching in the pipeline' />
		<Donut data={allHighValuesPercentage('ScheduledPipelines', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Scheduled Pipelines' />
		<Donut data={allHighValuesPercentage('StatisticsAndMetrics', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Statistics and Metrics' />
		<Donut data={allHighValuesPercentage('CommercialSupport', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands with Commercial Support' />
	</div>
</div>

<div class='mt-5'>
	<p class='h2 mb-1 text-center w-100 opacity-75'>Chats Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{chatsBrands} Brands</p>
	<div class='mt-4 d-flex flex-row flex-wrap gap-5 justify-content-evenly'>
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
