<script>
	import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
	import { Doughnut } from 'svelte-chartjs';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
	const donutBackgroundColor = ['#46BFBD', '#F7464A', '#FDB45C', '#AC64AD', '#70C4FF', '#63E657'];
	const donutHoverBackgroundColor = ['#5AD3D1', '#FF5A5E', '#FFC870', '#DA92DB', '#8ADEFF', '#7CFF70'];

	const offset = (arr, offset) => [...arr.slice(offset * 2), ...arr.slice(0, offset * 2)];

	export let offsetBy = 0;
	export let data = [];
	export let title = 'Default title';
</script>

<Doughnut data={{
		labels: data.map((val) => val.id),
		datasets: [
			{
				data: data,
				backgroundColor: offset(donutBackgroundColor, offsetBy),
				hoverBackgroundColor: offset(donutHoverBackgroundColor, offsetBy)
			}
		]
	}} height='230' options={{
		parsing: {
			key: 'nested.value'
		},
		plugins: {
			title: {
				display: true,
				text: title
			}
		},
		responsive: false
	}} width='230' />
