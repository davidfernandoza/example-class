import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	server: {
		hmr: {
			host: 'localhost'
		}
	},
	plugins: [
		laravel({
			input: ['resources/js/app.js', 'resources/sass/app.scss']
		}),
		vue()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'resources/js'),
			'~': path.resolve(__dirname, 'node_modules')
		}
	}
})
