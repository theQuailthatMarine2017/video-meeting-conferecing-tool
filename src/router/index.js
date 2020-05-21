import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Main.vue'
import Schedule from '../views/Schedule.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Sign In',
    component: SignIn
  },
  {
    path:'/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/schedule',
    name: 'Schedule',
    component: Schedule
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
