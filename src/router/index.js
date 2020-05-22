import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Main.vue'
import Schedule from '../views/Schedule.vue'
import Meetings from '../views/Meetings.vue'

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
  },
  {
    path:'/meetings',
    name: 'Meetings',
    component: Meetings
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
