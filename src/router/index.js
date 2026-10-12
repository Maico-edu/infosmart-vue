// Rotas: cada endereço do site aponta para uma página em src/paginas/.
// Para criar uma nova página: crie o .vue em paginas/ e adicione uma linha aqui.
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../paginas/Home.vue'
import Produtos from '../paginas/Produtos.vue'
import Servicos from '../paginas/Servicos.vue'
import Sobre from '../paginas/Sobre.vue'
import Contato from '../paginas/Contato.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/produtos', component: Produtos },
    { path: '/servicos', component: Servicos },
    { path: '/sobre', component: Sobre },
    { path: '/contato', component: Contato }
  ],
  scrollBehavior: () => ({ top: 0 })
})
