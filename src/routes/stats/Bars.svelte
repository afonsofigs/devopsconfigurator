<script>
	import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
	import { Bar } from 'svelte-chartjs';


	ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
	const donutBackgroundColor = ['#46BFBD', '#F7464A', '#FDB45C', '#AC64AD', '#70C4FF', '#63E657'];
	const donutHoverBackgroundColor = ['#5AD3D1', '#FF5A5E', '#FFC870', '#DA92DB', '#8ADEFF', '#7CFF70'];

	const offset = (arr, offset) => [...arr.slice(offset * 2), ...arr.slice(0, offset * 2)];

	export let offsetBy = 0;
	export let data = [];
	export let title = 'Default title';
	export let step = 1;
	export let xLegend = 'Legend X';
	export let yLegend = 'Nº Brands';
</script>

<Bar data={{
		datasets: [
			{
				data: data,
				backgroundColor: offset(donutBackgroundColor, offsetBy),
				hoverBackgroundColor: offset(donutHoverBackgroundColor, offsetBy)
			}
		]
	}} height='260' options={{
		parsing: {
			xAxisKey: 'id',
			yAxisKey: 'nested.value'
		},
		plugins: {
			title: {
				display: true,
				text: title
			},
			legend: {
				display: false
			}
		},
		responsive: false,
		scales: {
      x: {
        title: {
          display: true,
          text: xLegend
        }
      },
      y: {
        title: {
          display: true,
          text: yLegend
        },
        ticks: {
          // forces step size to be 50 units
          stepSize: step
        }
      }
    }
	}} width='360' />
