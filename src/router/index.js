import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/Admin.vue'
import CreateForm from '../components/CreateForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/adminForm',
    name: 'admin-form',
    component: Admin
  },
  {
    path: '/userForm',
    name: 'create-form',
    component: CreateForm,
    meta: {
      requiresAuth: true
    } 
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router