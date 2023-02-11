<script>
	import {
		CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip
	} from 'chart.js';
	import { Line } from 'svelte-chartjs';


	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
	const donutBackgroundColor = ['#46BFBD', '#F7464A', '#FDB45C', '#AC64AD', '#70C4FF', '#63E657'];
	const donutHoverBackgroundColor = ['#5AD3D1', '#FF5A5E', '#FFC870', '#DA92DB', '#8ADEFF', '#7CFF70'];

	const offset = (arr, offset) => [...arr.slice(offset * 2), ...arr.slice(0, offset * 2)];

	export let offsetBy = 0;
	export let data = [];
	export let title = 'Default title';
	export let step = 1;
	export let xLegend = 'Legend X';
	export let yLegend = 'Price';
</script>

<Line data={{
		labels: data.map((val) => val.id),
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
    },
		elements: {
			line:{
				borderColor: "#6c6c6c",
				borderWidth: 4
			},
			point:{
				radius: 3
					}
			}

	}} width='410' />
