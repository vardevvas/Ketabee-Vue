import * as Vue from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

let token = JSON.parse(localStorage.getItem('token'));
if (token) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}


const app = Vue.createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)


app.mount('#app')
