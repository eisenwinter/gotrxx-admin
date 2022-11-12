import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gotrxx-admin/",
  plugins: [svelte({
    preprocess: sveltePreprocess(),
  })],
  css: {
		postcss: {
			plugins: [
				autoprefixer()
			]
    }
  }
})
