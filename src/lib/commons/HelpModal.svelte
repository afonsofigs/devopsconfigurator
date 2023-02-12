<script>
	import { Modal, ModalBody, ModalHeader } from 'sveltestrap';

	export let helpModalOpen = false;
	export let category = '';
	export let title = 'Help';
	const toggleScrollable = () => (helpModalOpen = !helpModalOpen);
</script>

<Modal class='' isOpen={helpModalOpen} scrollable size='lg' toggle={toggleScrollable}>
	<ModalHeader toggle={toggleScrollable}>{title}</ModalHeader>
	<ModalBody class='d-flex flex-column gap-1'>
		{#if category === "VCs"}
			<p class='h4'>How to use:</p>
			<ol>
				<li>Click on any <b>table row</b> to see more information about a specific service.</li>
				<li>Insert the number of <b>users</b> your team is composed of.</li>
				<li>Choose your preferred <b>self-hosted</b> option.</li>
				<li>Check if you require <b>issues</b> tracking to be included.</li>
				<li>Check if you require <b>wiki</b> to be included.</li>
				<li>Choose how many <b>private repositories</b> your team needs.</li>
				<li>Choose how many <b>storage GBs</b> your team needs to store all your current repositories.</li>
				<li>Click <b>more filters</b> to see other available filters.</li>
				<li>Check if you require <b>package registry</b> to be included.</li>
				<li>Check if you require <b>Kanban</b> boards to be included.</li>
				<li>Check if you require <b>commercial support</b> to be included.</li>
			</ol>
			<p class='h4'>Fields info:</p>
			<ul>
				<li><b>Brand:</b> service's brand.</li>
				<li><b>Service:</b> service's name.</li>
				<li><b>Final Price:</b> price calculated from the user's inputs.</li>
				<li><b>Base Cost:</b> service's base price, without extras.</li>
				<li><b>Extras Included:</b> a summary of what's included with this service.</li>
				<li><b>Self-hosted:</b> the service's main application needs to be hosted on-premise.</li>
				<li><b>Issues:</b> issues creation and tracking are included.</li>
				<li><b>Kanban Boards:</b> kanban boards for task visualization are included.</li>
				<li><b>Wiki:</b> a place for creating documentation where users can learn about the project and know how to
					contribute is included.
				</li>
				<li><b>Package Registry:</b> a service for storing, creating and managing public and private packages/libraries
					is included.
				</li>
				<li><b>Included Users:</b> number of users included in the service's base price.</li>
				<li><b>Max Users:</b> service's maximum number of users.</li>
				<li><b>Price per Extra User:</b> price per extra user after reaching the number of included users.</li>
				<li><b>Repositories:</b> calculated number of private repositories, based on the formula.</li>
				<li><b>Nº Private Repositories Formula:</b> formula for calculating the number of private repositories.</li>
				<li><b>Disk Space:</b> calculated number of total GBs available for the files on the repositories.</li>
				<li><b>Disk Space Included Formula:</b> formula for calculating the total GBs available.</li>
				<li><b>Price per Extra GB of Disk Space:</b> price per extra user after reaching the included disk space.</li>
				<li><b>Commercial Support:</b> dedicated support with the whole service.</li>
			</ul>
		{/if}

		{#if category === "CIs"}
			<p>Help CIs</p>
		{/if}

		{#if category === "Chats"}
			<p>Help Chats</p>
		{/if}
	</ModalBody>
</Modal>
