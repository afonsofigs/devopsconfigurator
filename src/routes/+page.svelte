<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="d-flex flex-column justify-content-center align-items-center flex-grow-1">
	<span
		class="welcome d-block position-relative w-100"
		style="height: 0; padding: 0 0 calc(100% * 495 / 2048) 0;"
	>
		<picture>
			<source srcset={welcome} type="image/webp" />
			<img
				alt="Welcome"
				class="position-absolute w-100 h-100 top-0 d-block "
				src={welcome_fallback}
			/>
		</picture>
	</span>
	<h1 class="my-1 w-100">Welcome to the DevOps comparator!</h1>
</section>
