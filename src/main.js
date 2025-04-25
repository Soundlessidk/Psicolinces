import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router/index';


window.initMap = () => {
    const event = new Event('google-maps-loaded')
    window.dispatchEvent(event)
  }

createApp(App).use(router).mount('#app');
