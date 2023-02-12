<script>
	import { Modal, ModalBody, ModalHeader } from 'sveltestrap';

	export let helpModalOpen = false;
	export let category = '';
	export let title = 'Help';
	const toggleScrollable = () => (helpModalOpen = !helpModalOpen);
</script>

<Modal class='' isOpen={helpModalOpen} scrollable size='md' toggle={toggleScrollable}>
	<ModalHeader toggle={toggleScrollable}>{title}</ModalHeader>
	<ModalBody class='d-flex flex-column gap-1'>
		{#if category === "VCs"}
			<p>Help VCs</p>
		{/if}
		
		{#if category === "CIs"}
			<p>Help CIs</p>
		{/if}

		{#if category === "Chats"}
			<p>Help Chats</p>
		{/if}
	</ModalBody>
</Modal>
