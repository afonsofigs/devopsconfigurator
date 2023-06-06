<script>
	import { Modal, ModalBody, ModalHeader } from 'sveltestrap';

	export let helpModalOpen = false;
	export let category = '';
	export let title = 'Help';
	const toggleScrollable = () => (helpModalOpen = !helpModalOpen);
</script>

<Modal class="" isOpen={helpModalOpen} scrollable size="lg" toggle={toggleScrollable}>
	<ModalHeader toggle={toggleScrollable}>{title}</ModalHeader>
	<ModalBody class="d-flex flex-column gap-1">
		{#if category === 'VCs'}
			<p class="h4">How to use:</p>
			<ol>
				<li>Click on any <b>table row</b> to see more information about a specific service.</li>
				<li>Insert the number of <b>users</b> your team is composed of.</li>
				<li>Choose your preferred <b>self-hosted</b> option.</li>
				<li>Check if you require <b>issues</b> tracking to be included.</li>
				<li>Check if you require <b>wiki</b> to be included.</li>
				<li>Choose how many <b>private repositories</b> your team needs.</li>
				<li>
					Choose how many <b>storage GBs</b> your team needs to store all your current repositories.
				</li>
				<li>Click <b>more filters</b> to see other available filters.</li>
				<li>Check if you require <b>package registry</b> to be included.</li>
				<li>Check if you require <b>Kanban</b> boards to be included.</li>
				<li>Check if you require <b>commercial support</b> to be included.</li>
			</ol>
			<p class="h4">Fields info:</p>
			<ul>
				<li><b>Brand:</b> service's brand.</li>
				<li><b>Service:</b> service's name.</li>
				<li><b>Final Price:</b> price calculated from the user's inputs.</li>
				<li><b>Base Cost:</b> service's base price, without extras.</li>
				<li><b>Extras Included:</b> a summary of what's also included with this service.</li>
				<li><b>Self-hosted:</b> the service's main application needs to be hosted on-premise.</li>
				<li><b>Issues:</b> issues creation and tracking are included.</li>
				<li><b>Kanban Boards:</b> kanban boards for task visualization are included.</li>
				<li>
					<b>Wiki:</b> a place for creating documentation where users can learn about the project and
					know how to contribute is included.
				</li>
				<li>
					<b>Package Registry:</b> a service for storing, creating and managing public and private packages/libraries
					is included.
				</li>
				<li><b>Included Users:</b> number of users included in the service's base price.</li>
				<li><b>Max Users:</b> service's maximum number of users.</li>
				<li>
					<b>Price per Extra User:</b> price per extra user after reaching the number of included users.
				</li>
				<li>
					<b>Repositories:</b> calculated number of private repositories, based on the formula.
				</li>
				<li>
					<b>Nº Private Repositories Formula:</b> formula for calculating the number of private repositories.
				</li>
				<li>
					<b>Disk Space:</b> calculated number of total GBs available for the files on the repositories.
				</li>
				<li>
					<b>Disk Space Included Formula:</b> formula for calculating the total GBs available.
				</li>
				<li>
					<b>Price per Extra GB of Disk Space:</b> price per extra user after reaching the included disk
					space.
				</li>
				<li><b>Commercial Support:</b> dedicated support for the whole service.</li>
			</ul>
		{/if}

		{#if category === 'CIs'}
			<p class="h4">How to use:</p>
			<ol>
				<li>Click on any <b>table row</b> to see more information about a specific service.</li>
				<li>Insert the number of <b>users</b> your team is composed of.</li>
				<li>Choose your preferred <b>self-hosted</b> option.</li>
				<li>Check if you require <b>CD</b> (continuous deployment) to be included.</li>
				<li>
					Select which <b>git platforms</b> are you currently using, or keep it blank if you aren't currently
					using any or don't mind changing.
				</li>
				<li>Click <b>more filters</b> to see other available filters.</li>
				<li>
					Select which <b>cloud operating systems</b> are needed to build your pipelines. Also, select
					'Or' if you want at least one of the selected OSs or 'And' if you require the platform to be
					able to run pipelines on all selected OSs.
				</li>
				<li>
					Select which <b>self-hosted operating systems</b> are needed to build your pipelines. Also,
					select 'Or' if you want at least one of the selected OSs or 'And' if you require the platform
					to be able to run pipelines on all selected OSs.
				</li>
				<li>
					Set how many <b>cloud concurrent builds</b> you need to fulfill your total pipeline execution
					time needs.
				</li>
				<li>Set how many <b>self-hosted runners</b> you need to to run on-premise testing</li>
				<li>
					From your monthly averages, set how many <b>Linux monthly cloud minutes</b> you need.
				</li>
				<li>
					From your monthly averages, set how many <b>Docker monthly cloud minutes</b> you need.
				</li>
				<li>
					From your monthly averages, set how many <b>Windows monthly cloud minutes</b> you need.
				</li>
				<li>
					From your monthly averages, set how many <b>macOS monthly cloud minutes</b> you need.
				</li>

				<li>Check if you require <b>commercial support</b> to be included.</li>
			</ol>
			<p class="h4">Fields info:</p>
			<ul>
				<li><b>Brand:</b> service's brand.</li>
				<li><b>Service:</b> service's name.</li>
				<li><b>Final Price:</b> price calculated from the user's inputs.</li>
				<li><b>Base Cost:</b> service's base price, without extras.</li>
				<li><b>Extras Included:</b> a summary of what's also included with this service.</li>
				<li><b>Self-hosted:</b> the service's main application needs to be hosted on-premise.</li>
				<li>
					<b>CD:</b> this service is not only for continuous integration but also for continuous deployment.
				</li>
				<li>
					<b>Git Platforms:</b> which git platforms can this service interact with repositories from.
				</li>
				<li>
					<b>Plugins:</b> number of plugins that interact with other external services and tools.
				</li>
				<li>
					<b>Cloud Build OSs:</b> which operating systems can this service do CI in the cloud.
				</li>
				<li>
					<b>Self-hosted Build OSs:</b> which operating systems can this service do CI on-premise.
				</li>
				<li>
					<b>N Cloud Concurrent Builds:</b> number of parallel builds running at the same time.
				</li>
				<li><b>Price Extra Parallel Build:</b> price per extra parallel build pipeline.</li>
				<li>
					<b>N Self-hosted Runners:</b> number of runners that do CI on-premise, on different computers
					or VMs.
				</li>
				<li><b>Price per extra runner:</b> price per extra runner on-premise.</li>
				<li><b>Builds per month limit:</b> number of pipeline executions.</li>
				<li>
					<b>Included credits per month:</b> included credits are converted from pricing when the brand
					is not credits based
				</li>
				<li>
					<b>Credits per Self-hosted build minute:</b> how many credits are needed to run an on-premise
					pipeline for one minute.
				</li>
				<li>
					<b>Credits per Linux cloud build minute:</b> how many credits are needed to run a Linux pipeline
					in the cloud for one minute.
				</li>
				<li>
					<b>Credits per Docker cloud build minute:</b> how many credits are needed to run a Docker pipeline
					in the cloud for one minute.
				</li>
				<li>
					<b>Credits per Windows cloud build minute:</b> how many credits are needed to run a Windows
					pipeline in the cloud for one minute.
				</li>
				<li>
					<b>Credits per macOS build minute:</b> how many credits are needed to run a macOS pipeline
					in the cloud for one minute.
				</li>
				<li><b>Price per Extra Credit:</b> how many dollars per extra credit.</li>
				<li><b>Included Users:</b> number of users included in the service's base price.</li>
				<li><b>Max Users:</b> service's maximum number of users.</li>
				<li>
					<b>Price per Extra User:</b> price per extra user after reaching the number of included users.
				</li>
				<li>
					<b>Included Credits Per Extra User:</b> how many credits are included for each extra user.
				</li>
				<li>
					<b>Caching:</b> the pipeline is able to store frequently used packages for faster and cheaper
					run times.
				</li>
				<li><b>Scheduled Pipelines:</b> pipelines can be ran at a given date, on schedule.</li>
				<li>
					<b>Statistics and Metrics:</b> metrics and statistics are generated giving the users insights
					on the performance of their pipelines.
				</li>
				<li><b>Commercial Support:</b> dedicated support for the whole service.</li>
				<li>
					<b>Easy Fill:</b> an arbitrary non-scientific value related to the effort it took to find the
					needed information to fill all these other fields. Ranges from 1 to 3, where 1 means it took
					a lot of effort and 3 less effort.
				</li>
			</ul>
		{/if}

		{#if category === 'Chats'}
			<p class="h4">How to use:</p>
			<ol>
				<li>Click on any <b>table row</b> to see more information about a specific service.</li>
				<li>Insert the number of <b>users</b> your team is composed of.</li>
				<li>Choose your preferred <b>self-hosted</b> option.</li>
				<li>Check if you require the messages to have an <b>unlimited history</b>.</li>
				<li>Insert the maximum number of <b>users per call</b> you require.</li>
				<li>Insert the maximum <b>call duration</b> time you require.</li>
				<li>Click <b>more filters</b> to see other available filters.</li>
				<li>Insert the expected size of shared <b>chat files GB</b> you require.</li>
				<li>Insert the number of included<b>free guests</b> you require.</li>
				<li>Check if you require <b>commercial support</b> to be included.</li>
			</ol>
			<p class="h4">Fields info:</p>
			<ul>
				<li><b>Brand:</b> service's brand.</li>
				<li><b>Service:</b> service's name.</li>
				<li><b>Final Price:</b> price calculated from the user's inputs.</li>
				<li><b>Base Price:</b> service's base price, without extras.</li>
				<li><b>Extras Included:</b> a summary of what's also included with this service.</li>
				<li><b>Chat Files GB:</b> total available size of files shared in chat rooms.</li>
				<li>
					<b>Chat Files Formula:</b> formula for calculating total available size of files shared in
					chat rooms.
				</li>
				<li><b>Self-hosted:</b> the service's main application needs to be hosted on-premise.</li>
				<li><b>History:</b> messages are only visible or searchable within this time-frame.</li>
				<li><b>Users per Call:</b> number of users at once in a voice or video call.</li>
				<li><b>Call Duration:</b> maximum time duration of a voice or video call.</li>
				<li>
					<b>Free Guests:</b> calculated number of free temporary external guests. For extra guests,
					you need to create normal user accounts that may or may not be paid.
				</li>
				<li>
					<b>Free Guests Formula:</b> formula to calculate the number of free included guests.
				</li>
				<li><b>Integrations:</b> plugins and chatbots that automate and aid certain tasks.</li>
				<li><b>Included Users:</b> number of users included in the service's base price.</li>
				<li><b>Max Users:</b> service's maximum number of users.</li>
				<li>
					<b>Price per Extra User:</b> price per extra user after reaching the number of included users.
				</li>
				<li><b>Commercial Support:</b> dedicated support for the whole service.</li>
			</ul>
		{/if}
	</ModalBody>
</Modal>
