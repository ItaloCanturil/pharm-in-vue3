import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'
import ModalUser from '../components/Modal/ModaUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'view/:position',
        component: ModalUser,
      },
    ],
  }
]

const router = new VueRouter({
  routes,
});

export default router;