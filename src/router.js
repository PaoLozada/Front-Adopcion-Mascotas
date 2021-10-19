import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import MascotaIn from './components/MascotaIn.vue'
import CandidatoIn from './components/CandidatoIn.vue'
import Home from './components/Home.vue'
import verMascotas from './components/verMascotas.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  //{
   // path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
 // }
 {
  path: '/user/logIn',
  name: 'logIn',
  component: LogIn
},
{
  path: '/user/candidatoIn',
  name: 'candidatoIn',
  component: CandidatoIn
},
{
  path: '/user/signUp',
  name: 'signUp',
  component: SignUp
},
{
  path: '/user/mascotaIn',
  name: 'mascotaIn',
  component: MascotaIn
},
{
  path: '/user/vermascotas',
  name: 'vermascotas',
  component: verMascotas
},
{
  path: '/user/home',
  name: "home",
  component: Home
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
