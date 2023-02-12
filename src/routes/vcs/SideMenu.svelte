<script>
	import { Offcanvas } from 'sveltestrap';
	import NumberInput from '$lib/commons/NumberInput.svelte';
	import MultiSelect from 'svelte-multiselect';
	import { supports } from '$lib/commons/options.js';
	import GreenSwitch from '$lib/commons/GreenSwitch.svelte';

	export let sideMenuOpen = false;
	const toggleEnd = () => (sideMenuOpen = !sideMenuOpen);
	export let allFieldNames = [];
	export let fieldsSelected = [];
	export let currentPagination = 10;
	export let allBrands = [];
	export let brandsSelected = [];
	export let packageRegistryChecked = false;
	export let kanbanChecked = false;

	export let supportSelected = [];
</script>

<Offcanvas header='More filters' isOpen={sideMenuOpen} placement='end' toggle={toggleEnd}>
	<div class='d-flex flex-column justify-content-start gap-4'>
		<GreenSwitch bind:checkVar={packageRegistryChecked} label='Package Registry' />
		<GreenSwitch bind:checkVar={kanbanChecked} label='Kanban' />

		<MultiSelect bind:options={allBrands} bind:selected={brandsSelected}
								 placeholder='Brands: All ({allBrands.length})' />

		<div>
			<p class='mb-2'>Commercial support:</p>
			<MultiSelect bind:selected={supportSelected} options={supports} placeholder='Support: All' />
		</div>

		<NumberInput bind:value={currentPagination} label='Results per page:' max='70' min='1' placeholder='pagination' />

		<MultiSelect bind:options={allFieldNames} bind:selected={fieldsSelected} placeholder='Visible fields: All' />
	</div>
</Offcanvas>
