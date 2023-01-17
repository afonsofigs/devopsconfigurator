//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		paths: {
			base: '/devopsconfigurator'
		},
		adapter: adapter()
	}
};

export default config;
