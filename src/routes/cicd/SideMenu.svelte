<script>
	import { Input, Offcanvas } from 'sveltestrap';
	import NumberInput from '$lib/commons/NumberInput.svelte';
	import MultiSelect from 'svelte-multiselect';
	import { boolJoins, OSs, supports } from '$lib/commons/options.js';

	export let sideMenuOpen = false;
	const toggleEnd = () => (sideMenuOpen = !sideMenuOpen);
	export let concurrentBuilds = 0;
	export let selfHostedRunners = 0;
	export let linuxMonthlyCloudMins = 0;
	export let dockerMonthlyCloudMins = 0;
	export let windowsMonthlyCloudMins = 0;
	export let macOSMonthlyCloudMins = 0;
	export let allFieldNames = [];
	export let fieldsSelected = [];
	export let currentPagination = 10;
	export let allBrands = [];
	export let brandsSelected = [];
	export let cloudOSsSelected = [];
	export let selfHostedOSsSelected = [];
	export let boolCloudBuild = boolJoins[0];
	export let boolSelfHostedBuild = boolJoins[0];
	export let supportSelected = [];
</script>

<Offcanvas header='More filters' isOpen={sideMenuOpen} placement='end' toggle={toggleEnd}>
	<div class='d-flex flex-column justify-content-start gap-4'>
		<div>
			<p class='mb-2'>Cloud OSs:</p>
			<div class='d-flex flex-row justify-content-start gap-2 w-100'>
				<MultiSelect bind:selected={cloudOSsSelected} options={OSs} placeholder='Cloud OSs: All' />
				<Input bind:value={boolCloudBuild} id='exampleSelect' name='select' style='width: 80px' type='select'>
					{#each boolJoins as bool}
						<option>{bool}</option>
					{/each}
				</Input>
			</div>
		</div>
		<div>
			<p class='mb-2'>Self-hosted OSs:</p>
			<div class='d-flex flex-row justify-content-start gap-2'>
				<MultiSelect bind:selected={selfHostedOSsSelected} options={OSs} placeholder='Self-hosted OSs: All' />
				<Input bind:value={boolSelfHostedBuild} id='exampleSelect' name='select' style='width: 80px' type='select'>
					{#each boolJoins as bool}
						<option>{bool}</option>
					{/each}
				</Input>
			</div>
		</div>

		<NumberInput bind:value={concurrentBuilds} label='Cloud concurrent builds:' max='1000' min='0'
								 placeholder='builds' />

		<NumberInput bind:value={selfHostedRunners} label='Self-hosted runners:' max='1000' min='0' placeholder='runners' />

		<NumberInput bind:value={linuxMonthlyCloudMins} label='Linux monthly cloud minutes:' min='0'
								 placeholder='linuxMinutes' width='90px' />

		<NumberInput bind:value={dockerMonthlyCloudMins} label='Docker monthly cloud minutes:' placeholder='dockerMinutes'
								 width='90px' />

		<NumberInput bind:value={windowsMonthlyCloudMins} label='Windows monthly cloud minutes:'
								 placeholder='windowsMinutes' width='90px' />

		<NumberInput bind:value={macOSMonthlyCloudMins} label='macOS monthly cloud minutes:' placeholder='macOSMinutes'
								 width='90px' />
		<div>
			<p class='mb-2'>Commercial support:</p>
			<MultiSelect bind:selected={supportSelected} options={supports} placeholder='Support: All' />
		</div>

		<NumberInput bind:value={currentPagination} label='Results per page:' max='70' min='1' placeholder='pagination' />

		<MultiSelect bind:options={allBrands} bind:selected={brandsSelected}
								 placeholder='Brands: All ({allBrands.length})' />
		
		<MultiSelect bind:options={allFieldNames} bind:selected={fieldsSelected} placeholder='Visible fields: All' />
	</div>
</Offcanvas>
