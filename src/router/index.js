import { createRouter, createWebHistory } from '@ionic/vue-router';
import PaginaInicio from '../views/PaginaInicio.vue';
import ZeldaPage from '../views/ZeldaPage.vue';
import MarioPage from '../views/MarioPage.vue';
import GodOfWar from '../views/GodOfWarPage.vue';
import FinallyFantasy from '../views/FinalFantasyPage.vue';
import MiNombre from '../views/MiNombre.vue';

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    component: PaginaInicio
  },
  {
    path: '/zelda',
    component: ZeldaPage
  },
  {
    path: '/mario',
    component: MarioPage
  },
  {
    path: '/godofwar',
    component: GodOfWar
  },
  {
    path: '/finalfantasy',
    component: FinallyFantasy
  },
  {
    path: '/minombre',
    component: MiNombre
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
