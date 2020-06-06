import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Main.vue'
import Schedule from '../views/Schedule.vue'
import Meetings from '../views/Meetings.vue'
import Validate from '../views/Validate.vue'
import authenticate from "../auth/authenticate";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Sign In',
    component: SignIn
  },
  {
    path:'/validate',
    name:'Validate Account',
    component: Validate
  },
  {
    path:'/home',
    beforeEnter: authenticate,
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
