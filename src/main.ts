import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index'

import './assets/style.scss'

createApp(App).use(store).mount('#app')
