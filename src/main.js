// Ponto de entrada: cria o app Vue, liga o roteador e carrega os estilos globais.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './estilos/global.css'
import './estilos/home.css'
import './estilos/produtos.css'
import './estilos/interna.css'

createApp(App).use(router).mount('#app')
