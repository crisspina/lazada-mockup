import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/main.css';
import VueFeather from 'vue-feather';

// const app = createApp({});


createApp(App).use(router).component(VueFeather.name, VueFeather).mount('#app')

