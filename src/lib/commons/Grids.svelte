<script>
	import Grid from 'gridjs-svelte';
	import RowModal from '$lib/commons/RowModal.svelte';

	export let fieldsSelected = [];
	export let allFields = [];
	export let filteredEntries = [];
	export let colIDIdx = 1;
	export let currentPagination = 10;
	export let allEntries = [];

	let rowModalOpen = false;
	let modalColID = 1;
	let basePagination = 10; //10

	function filterFields() {
		return allFields.filter((arr) => {
			return arr.id === 'colID' || fieldsSelected.includes(arr.name);
		});
	}

	function openRowModal(rowColID) {
		modalColID = rowColID - 1;
		rowModalOpen = !rowModalOpen;
	}
</script>

<Grid autoWidth={true} className={{ table: 'small w-auto' }}
			columns={fieldsSelected.length === 0 ? allFields : filterFields()} data={filteredEntries}
			on:rowClick={(e) => openRowModal(e.detail[1]._cells[colIDIdx].data)} pagination={{
		enabled: true,
		limit: currentPagination == null ? basePagination : currentPagination,
		summary: true
	}} resizable={true} search={true} sort={true}
			style={{ table: { 'white-space': 'nowrap' }, td: { 'min-width': '130px' } }} />

<RowModal {allFields} bind:rowModalOpen fullRow={allEntries[modalColID]} />