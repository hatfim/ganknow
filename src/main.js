import { createApp } from 'vue'

import router from '@/router'
import store from '@/store'

import App from './App.vue'
import '@/styles/main.css'

const app = createApp(App)

app.use(router)
app.use(store) // Add the store to your Vue app
app.mount('#app')
