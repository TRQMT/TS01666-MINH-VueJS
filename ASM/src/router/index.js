// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store.js'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import PostCreateView from '../views/PostCreateView.vue'
import ProfileView from '../views/ProfileView.vue'
import PostEditView from '../views/PostEditView.vue'
import PostManagerView from '../views/PostManagerView.vue'

const router = createRouter({

  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/posts/:id', name: 'post-detail', component: PostDetailView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },

    // Các route cần đăng nhập mới vào được
    {
      path: '/create-post',
      name: 'create-post',
      component: PostCreateView,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: PostManagerView,
      meta: { requiresAuth: true }
    },
    {
      path: '/edit-post/:id',
      name: 'edit-post',
      component: PostEditView,
      meta: { requiresAuth: true }
    },
  ],
})

// Navigation Guard (Kiểm tra đăng nhập)
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.currentUser) {
    alert('Vui lòng đăng nhập để sử dụng chức năng này!')
    next('/login')
  } else {
    next()
  }
})

export default router
