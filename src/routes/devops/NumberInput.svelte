<script>
	import { Input, Label } from 'sveltestrap';

	export let value = 0;
	export let label = 'label';
	export let max = '';
	export let min = '0';
	export let placeholder = 'builds';
	export let width = '45px';
	export let classNames = '';
</script>

<div class="d-flex flex-row gap-2 mb-0 align-content-center">
	<Label class="my-auto">{label}</Label>
	<Input
		bind:value
		class={'p-1 my-auto ' + classNames}
		{max}
		{min}
		name={placeholder}
		{placeholder}
		style="font-size: 0.9rem; width: {width}; height: 28px"
		type="number"
	/>
</div>
