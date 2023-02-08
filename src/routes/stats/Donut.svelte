<script>
	import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
	import { Doughnut } from 'svelte-chartjs';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
	const donutBackgroundColor = ['#46BFBD', '#F7464A', '#FDB45C', '#949FB1', '#4D5360', '#AC64AD'];
	const donutHoverBackgroundColor = [
		'#5AD3D1',
		'#FF5A5E',
		'#FFC870',
		'#A8B3C5',
		'#616774',
		'#DA92DB'
	];

	export let data = [];
	export let title = 'Default title';
</script>

<Doughnut
	width="250"
	data={{
		labels: data.map((val) => val.id),
		datasets: [
			{
				data: data,
				backgroundColor: donutBackgroundColor,
				hoverBackgroundColor: donutHoverBackgroundColor
			}
		]
	}}
	options={{
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
	}}
/>
