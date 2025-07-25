import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createApp(App).mount('#app')
