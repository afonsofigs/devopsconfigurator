<script>
	import '$lib/commons/styles.css';
	import vcsJson from '$lib/jsons/vcsJson.json';
	import Donut from './Donut.svelte';

	let vcsColIDIdx = 0; //Index of the column "colID"
	let vcsEntries = []; //[]
	let allFields = []; //[]
	let allFieldNames = []; //[]
	let vcsBrands = 0;
	let vcsIssuesData = [];
	let vcsKanbanData = [];

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
				vcsColIDIdx = index;
				auxFields[index] = { id: key, name: vcsColumns[key], hidden: true };
			} else {
				auxFields[index] = { id: key, name: vcsColumns[key] };
				auxFieldNames[index] = vcsColumns[key];
			}
		});
		vcsEntries.forEach((vcsArr) =>
			auxAllBrands.includes(vcsArr['Brand'])
				? ''
				: (auxAllBrands = [...auxAllBrands, vcsArr['Brand']])
		);
		vcsBrands = auxAllBrands.length;
		allFields = auxFields;
		allFieldNames = auxFieldNames;
	})();

	function mathRound2(num) {
		return Math.round((num + Number.EPSILON) * 100) / 100;
	}

	function vcsBool(field) {
		let result = 0;
		let auxAllBrands = [];
		vcsEntries.forEach((vcsArr) => {
			if (!auxAllBrands.includes(vcsArr['Brand']) && vcsArr[field] === 'Yes') {
				auxAllBrands = [...auxAllBrands, vcsArr['Brand']];
				result += 1;
			}
		});
		let yesPercent = mathRound2((result / vcsBrands) * 100);
		let noPercent = 100 - yesPercent;
		return [
			{ id: `Yes ${yesPercent}%`, nested: { value: result } },
			{ id: `No ${noPercent}%`, nested: { value: vcsBrands - result } }
		];
	}
</script>

<svelte:head>
	<title>Statistics</title>
</svelte:head>

<div class="mt-5">
	<p class="h2 text-center w-100 opacity-75">Version Control Stats</p>
	<p class="h5 text-center w-100 opacity-50">{vcsBrands} Brands</p>
	<div class="mt-5 d-flex flex-row gap-5 justify-content-between">
		<Donut data={vcsBool('Issues')} title="Brands that offer issue tracking" />
		<Donut data={vcsBool('Kanban')} title="Brands that offer Kanban boards" />
		<Donut data={vcsBool('Wiki')} title="Brands that offer Wiki documentation" />
		<Donut data={vcsBool('PackageRegistry')} title="Brands that offer Package Registry" />
	</div>
</div>
