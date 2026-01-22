<template>
  <header class="bg-white border-bottom sticky-top">
    <div class="container py-2">
      <!-- Header row: Logo - Search (center) - Actions -->
      <div class="d-flex align-items-center gap-3">
        <!-- Left: Logo -->
        <RouterLink class="brand text-decoration-none" to="/">
          <span class="brand__title">NEWS</span>
          <span class="brand__sub">Simple</span>
        </RouterLink>

        <!-- Center: Search -->
        <form class="search mx-auto" @submit.prevent>
          <div class="input-group input-group-sm">
            <span class="input-group-text bg-white">🔎</span>
            <input class="form-control" placeholder="Tìm kiếm bài viết..." />
            <button class="btn btn-dark">Tìm</button>
          </div>
        </form>

        <!-- Right: Auth actions -->
        <div class="d-flex align-items-center gap-2 ms-auto">
          <button class="btn btn-outline-dark btn-sm" @click="openLogin">Đăng nhập</button>
          <button class="btn btn-warning btn-sm" @click="openRegister">Đăng ký</button>

          <!-- Ẩn nút Đăng bài khi chưa đăng nhập -->
          <RouterLink v-if="isLoggedIn" to="/posts/new" class="btn btn-primary btn-sm">
            Đăng bài
          </RouterLink>
        </div>
      </div>

      <!-- Categories row -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sm flex-wrap gap-2">
          <li class="nav-item"><RouterLink class="nav-link" to="/">Trang chủ</RouterLink></li>
          <li class="nav-item"><a class="nav-link" href="#" @click.prevent>Thời sự</a></li>
          <li class="nav-item"><a class="nav-link" href="#" @click.prevent>Công nghệ</a></li>
          <li class="nav-item"><a class="nav-link" href="#" @click.prevent>Thể thao</a></li>
          <li class="nav-item"><a class="nav-link" href="#" @click.prevent>Giải trí</a></li>
        </ul>
      </nav>
    </div>

    <!-- Modal Login/Register (chỉ hiện khi bấm nút) -->
    <div v-if="authModal !== 'none'" class="auth-overlay" @click.self="closeModal">
      <div class="auth-card">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 class="m-0">{{ authModal === 'login' ? 'Đăng nhập' : 'Đăng ký' }}</h5>
          <button class="btn btn-sm btn-outline-secondary" @click="closeModal">×</button>
        </div>

        <LoginView v-if="authModal === 'login'" />
        <RegisterView v-else />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

// Tạm thời: giả lập trạng thái đăng nhập (Y2 sau làm thật)
const isLoggedIn = ref(false)

const authModal = ref('none') // 'none' | 'login' | 'register'
const openLogin = () => (authModal.value = 'login')
const openRegister = () => (authModal.value = 'register')
const closeModal = () => (authModal.value = 'none')
</script>

<style scoped>
.brand {
  display: flex;
  align-items: baseline;
  gap: 8px;
  white-space: nowrap;
}
.brand__title {
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 22px;
  color: #111;
}
.brand__sub {
  font-size: 12px;
  color: #6c757d;
}

.search {
  width: min(520px, 100%);
}
.nav-sm .nav-link {
  padding: 0.35rem 0.6rem;
  font-size: 0.9rem;
  color: #111;
}
.nav-sm .nav-link.router-link-active {
  background: #111;
  color: #fff;
}

.auth-overlay {
  position: fixed;
  inset: 0;
  background: rgba(17, 17, 17, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 2000;
}
.auth-card {
  width: min(520px, 100%);
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
}
</style>
