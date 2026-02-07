<!-- src/components/AppNavbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">VUE NEWS</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
          </li>
          <!-- Chỉ hiện khi đã đăng nhập -->
          <li class="nav-item" v-if="store.currentUser">
            <RouterLink class="nav-link" to="/create-post">Đăng bài</RouterLink>
          </li>
          <li class="nav-item" v-if="store.currentUser">
            <RouterLink class="nav-link" to="/admin">Quản lý bài viết</RouterLink>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-2">
          <!-- Chưa đăng nhập -->
          <div v-if="!store.currentUser">
            <RouterLink to="/login" class="btn btn-outline-light btn-sm me-2">Đăng nhập</RouterLink>
            <RouterLink to="/register" class="btn btn-warning btn-sm">Đăng ký</RouterLink>
          </div>

          <!-- Đã đăng nhập -->
          <div v-else class="dropdown">
            <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown">
              Xin chào, {{ store.currentUser.name }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><RouterLink class="dropdown-item" to="/profile">Thông tin cá nhân</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">Đăng xuất</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { store } from '../store.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  store.logout()
  router.push('/login')
}
</script>
