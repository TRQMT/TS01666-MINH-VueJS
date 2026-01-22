import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/PostDetailView.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/posts/:id', component: PostDetailView },

    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
  ],
})
