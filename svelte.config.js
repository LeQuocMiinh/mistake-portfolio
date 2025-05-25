import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			preserve: ['group', 'mesh', 'ambientLight', 'directionalLight', 'primitive'],
			scss: {
				prependData: `@use 'src/app.scss' as *;`
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;

