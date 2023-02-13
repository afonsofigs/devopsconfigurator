<script>
	import { Button } from 'sveltestrap';
	import { base } from '$app/paths';
	import Title from '$lib/commons/Title.svelte';
</script>

<Title prefix='Home' />

<section class='d-flex flex-column align-items-center' style='margin-top: 90px!important'>
	<div class='d-flex flex-row justify-content-center align-items-center gap-3 mb-5'>
		<img alt='Website logo' class='w-25 h-auto' src='{base}/images/gearWithInfinitySign.svg' />
		<p class='h3'>DevOps<br> Comparator</p>
	</div>
	<div class='text-column mt-3'>
		<p>
			This is a <a href='https://kit.svelte.dev'>SvelteKit</a> app. You can make your own by typing the following into
			your command line and following the prompts: </p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed. Because of that, we
			don't need to load any JavaScript. Try viewing the page's source, or opening the devtools network panel and
			reloading. </p>
	</div>
	<Button class='mt-5 opacity-75' color='dark' href='{base}/cicd' size='lg'>Go to the CI/CD comparator</Button>
</section>