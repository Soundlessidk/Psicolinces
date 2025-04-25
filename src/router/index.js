import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Consejos from '../views/Consejos.vue'
import Eventos from '../views/Eventos.vue'
import Pasantes from '../views/Pasantes.vue'
import Recursos from '../views/Recursos.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/consejos',
    name: 'Consejos',
    component: Consejos
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos
  },
  {
    path: '/pasantes',
    name: 'Pasantes',
    component: Pasantes
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: Recursos
  },{
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
