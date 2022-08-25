import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	server: {
		port: 8001,
		host: 'localhost'
	},
	plugins: [
		laravel({
			input: ['resources/js/app.js', 'resources/sass/app.scss']
		}),
		vue()
	],
	resolve: {
		alias: {
			'@': 'resources/js',
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
		}
	}
})
