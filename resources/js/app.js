import '@/bootstrap.js'
import { createApp } from 'vue/dist/vue.esm-bundler'

// Components--------------------------------------
import Welcome from '@/components/welcome.vue'

const app = createApp({
	components: {
		Welcome
	}
})

app.mount('#app')
