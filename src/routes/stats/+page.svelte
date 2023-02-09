<script>
	import '$lib/commons/styles.css';
	import vcsJson from '$lib/jsons/vcsJson.json';
	import cisJson from '$lib/jsons/cisJson.json';
	import chatsJson from '$lib/jsons/chatsJson.json';
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

	// function boolPercentage(field, entries, totalBrands) {
	// 	let result = 0;
	// 	let auxAllBrands = [];
	// 	entries.forEach((entryArr) => {
	// 		if (!auxAllBrands.includes(entryArr['Brand']) && (entryArr[field] === 'Yes' || entryArr[field] === 'Both')) {
	// 			auxAllBrands = [...auxAllBrands, entryArr['Brand']];
	// 			result += 1;
	// 		}
	// 	});
	// 	let yesPercent = Math.round((result / totalBrands) * 100);
	// 	let noPercent = 100 - yesPercent;
	// 	return [{ id: `Yes ${yesPercent}%`, nested: { value: result } },
	// 		{ id: `No ${noPercent}%`, nested: { value: totalBrands - result } }];
	// }

	function allHighValuesPercentage(field, entries, totalBrands) {
		let auxAllBrands = [];
		//Current Hierarchy: ∞ -> Yes with SLA -> !"Yes with SLA"&&Yes -> Both -> !"∞"&&newNº>oldNº -> *users -> No
		//TODO: RECHECK THIS
		entries.forEach((entryArr) => {
			const onAux = auxAllBrands[entryArr['Brand']];
			const newVal = entryArr[field];
			if (onAux === undefined || newVal === '∞' || newVal === 'Yes with SLA' ||
				(onAux !== 'Yes with SLA' && newVal === 'Yes') || newVal === 'Both' ||
				(onAux !== '∞' && !isNaN(newVal) && !isNaN(onAux) && onAux < newVal)) {
				auxAllBrands[entryArr['Brand']] = newVal;
			}
			else if (isNaN(onAux) && isNaN(newVal) && onAux.includes('-users') && newVal.includes('*users')) {
				auxAllBrands[entryArr['Brand']] = newVal;
			}
			else if (isNaN(onAux) && isNaN(newVal) && onAux.includes('users') && newVal.includes('users') &&
				evaluate(onAux.replace('users', 1)) < evaluate(newVal.replace('users', 1))) {
				auxAllBrands[entryArr['Brand']] = newVal;
			}
			else if (isNaN(onAux) && !isNaN(newVal) && onAux.includes('users') && evaluate(onAux.replace('users', 1)) <
				newVal) {
				auxAllBrands[entryArr['Brand']] = newVal;
			}
			else if (!isNaN(onAux) && isNaN(newVal) && newVal.includes('users') && onAux <
				evaluate(newVal.replace('users', 1))) {
				auxAllBrands[entryArr['Brand']] = newVal;
			}
		});
		//Group values
		let grouped = [];
		for (const value of Object.values(auxAllBrands)) {
			if (grouped[value] === undefined) grouped[value] = 1; else grouped[value] += 1;
		}
		return Object.entries(grouped).map(([key, value]) => {
			const percentage = Math.round((value / totalBrands) * 100);
			return { id: `${key}, ${percentage}%`, nested: { value: value } };
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
	<div class='mt-4 d-flex flex-row flex-wrap justify-content-evenly'>
		<Donut data={allHighValuesPercentage('Issues', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Issue tracking' />
		<Donut data={allHighValuesPercentage('Kanban', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Kanban boards' />
		<Donut data={allHighValuesPercentage('Wiki', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Wiki documentation' />
		<Donut data={allHighValuesPercentage('PackageRegistry', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Package Registry' />
		<Donut data={allHighValuesPercentage('Self-hosted', vcsEntries, vcsBrands)} offsetBy='1'
					 title='Brands that offer Self-hosted solutions' />
	</div>
</div>

<div class='mt-5'>
	<p class='h2 mb-1 text-center w-100 opacity-75'>CI/CD Stats</p>
	<p class='h5 text-center w-100 opacity-50'>{cisBrands} Brands</p>
	<div class='mt-4 d-flex flex-row flex-wrap gap-5 justify-content-evenly'>
		<Donut data={allHighValuesPercentage('Self-hosted', cisEntries, cisBrands)} offsetBy='0'
					 title='Brands that offer Self-hosted solutions' />
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

		<!--TODO: Formula might be wrong because of guests based comparison-->
		<Bars data={allHighValuesPercentage('ChatFilesFormulaGB', chatsEntries, chatsBrands)} offsetBy='2'
					title="Brand's maximum chat files space" xLegend='GB' />

		<Donut data={allHighValuesPercentage('Self-hosted', chatsEntries, chatsBrands)} offsetBy='2'
					 title='Brands with Self-hosted solutions' />
		<Donut data={allHighValuesPercentage('CommercialSupport', chatsEntries, chatsBrands)} offsetBy='2'
					 title='Brands with Commercial Support' />
	</div>
</div>
