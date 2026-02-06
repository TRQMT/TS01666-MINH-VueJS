<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label">Họ tên</label>
      <input v-model="form.name" class="form-control" placeholder="Nguyễn Văn A" />
    </div>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="form.email" type="email" class="form-control" placeholder="name@email.com" />
    </div>

    <div class="mb-3">
      <label class="form-label">Mật khẩu</label>
      <input v-model="form.password" type="password" class="form-control" />
    </div>

    <button class="btn btn-warning w-100">Tạo tài khoản</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { store } from '../store.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ name: '', email: '', password: '' })

const onSubmit = () => {
  // Logic đơn giản: thêm user vào mảng
  store.register({ ...form, avatar: '' })
  alert('Đăng ký thành công! Vui lòng đăng nhập.')
  router.push('/login')
}
</script>
<!-- Template giữ nguyên như cũ -->

