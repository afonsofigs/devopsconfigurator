<script>
	// @ts-nocheck

	import { Modal, ModalBody, ModalHeader } from 'sveltestrap';

	export let rowModalOpen = false;
	export let fullRow = [];
	export let allFields = [];
	const toggleScrollable = () => (rowModalOpen = !rowModalOpen);
</script>

<Modal class="" isOpen={rowModalOpen} scrollable size="md" toggle={toggleScrollable}>
	<ModalHeader toggle={toggleScrollable}
		>{fullRow['Brand'] + ' - ' + fullRow['Service']}</ModalHeader
	>
	<ModalBody class="d-flex flex-column gap-3">
		<ul>
			{#each allFields.filter((f) => f.id !== 'colID') as field}
				<li>
					{field.name +
						': ' +
						fullRow[field.id] +
						(fullRow['desc_' + field.id] !== undefined ? ' - ' + fullRow['desc_' + field.id] : '') +
						(fullRow['links_' + field.id] !== undefined
							? ' - ' + fullRow['links_' + field.id]
							: '')}
				</li>
			{/each}
		</ul>
	</ModalBody>
</Modal>
