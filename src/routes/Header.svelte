<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/NOVA_RGB_DIGITAL_DEPART_HORIZ_POSIT_001.png';
	import github from '$lib/images/github.svg';
	import { base } from '$app/paths';

	let nova_logo = 'https://github.com/afonsofigs/devopsconfigurator/blob/d2b2a7ebc361ea23400b56f6dba2c94a76f4fcf3/build/_app/immutable/assets/NOVA_RGB_DIGITAL_DEPART_HORIZ_POSIT_001-07f694f4.png?raw=true';
	let git_logo = 'https://raw.githubusercontent.com/afonsofigs/devopsconfigurator/d2b2a7ebc361ea23400b56f6dba2c94a76f4fcf3/build/_app/immutable/assets/github-1ea8d62e.svg';
	if ($page.url.hostname === 'afonsofigs.github.io') {
		nova_logo = logo;
		git_logo = github;
	}
</script>

<header class='px-4'>
	<div class='mt-2 corner'>
		<a href='https://www.fct.unl.pt/' rel='noreferrer' target='_blank'> <img alt='SST-UNL' src={nova_logo} /> </a>
	</div>
	<nav>
		<svg aria-hidden='true' viewBox='0 0 2 3'>
			<path d='M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z' />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === base + '/' || $page.url.pathname === base
					? 'page'
					: 'false'}>
				<a href={base + '/'}>Home</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/about' ? 'page' : 'false'}>
				<a href={base + '/about'}>About</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/vcs' ? 'page' : 'false'}>
				<a href={base + '/vcs'}>VC</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/cicd' ? 'page' : 'false'}>
				<a href={base + '/cicd'}>CI/CD</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/chats' ? 'page' : 'false'}>
				<a href={base + '/chats'}>Chats</a>
			</li>
			<li aria-current={$page.url.pathname === base + '/stats' ? 'page' : 'false'}>
				<a href={base + '/stats'}>Stats</a>
			</li>
		</ul>
		<svg aria-hidden='true' viewBox='0 0 2 3'>
			<path d='M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z' />
		</svg>
	</nav>

	<div class='mt-2 corner'>
		<a href='https://github.com/afonsofigs/devopsconfigurator' rel='noreferrer' target='_blank'> <img alt='GitHub'
																																																			src={git_logo} />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		z-index: 2;
		height: 48px;
		width: 100%;
	}

	.corner img {
		width: auto;
		height: 3.5vw;
		max-height: 40px;
	}

	nav {
		display: flex;
		--background: rgba(255, 255, 255, 1);
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
	}

	nav svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	nav path {
		fill: var(--background);
	}

	nav ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}


	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	@media (max-width: 500px) {
		nav a {
			font-size: 0.7rem;
			padding: 0 0.2rem;
		}

		.corner {
			display: none;
		}
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
