import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Admin from '../components/Admin.vue'
import CreateForm from '../components/CreateForm.vue'
import CertList from '../components/CertList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homePage',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/adminForm',
    name: 'admin-form',
    component: Admin
  },
  {
    path: '/userForm',
    name: 'create-form',
    component: CreateForm,
  },
  {
    path: '/certList',
    name: 'cert-list',
    component: CertList
  }
]

const router = new VueRouter({
  
    routes
  
})

export default router