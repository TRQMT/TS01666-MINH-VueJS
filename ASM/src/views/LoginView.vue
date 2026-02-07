<!-- src/views/LoginView.vue -->
<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label">Email</label>
      <!-- Chú ý: v-model phải trỏ đúng vào form.email -->
      <input v-model="form.email" type="email" class="form-control" required>
    </div>

    <div class="mb-3">
      <label class="form-label">Mật khẩu</label>
      <input v-model="form.password" type="password" class="form-control" required>
    </div>

    <button class="btn btn-dark w-100">Đăng nhập</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { store } from '../store.js'
import { useRouter } from 'vue-router'

const router = useRouter()
// Khởi tạo form rỗng
const form = reactive({ email: '', password: '' })

const onSubmit = () => {
  // Gọi hàm login từ store
  // QUAN TRỌNG: Phải truyền form.email và form.password vào
  const success = store.login(form.email, form.password)
  
  if (success) {
    alert('Đăng nhập thành công!') // Hoặc dùng Toast như bài trước
    router.push('/')
  } else {
    alert('Sai email hoặc mật khẩu!')
    // Reset mật khẩu để nhập lại cho tiện
    form.password = '' 
  }
}
</script>
