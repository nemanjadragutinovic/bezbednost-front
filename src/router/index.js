import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/adminForm',
    name: 'admin-form',
    component: Admin
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router