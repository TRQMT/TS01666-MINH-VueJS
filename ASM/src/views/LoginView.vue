<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="form.email" type="email" class="form-control" placeholder="name@email.com" />
    </div>

    <div class="mb-3">
      <label class="form-label">Mật khẩu</label>
      <input v-model="form.password" type="password" class="form-control" placeholder="Your password" />
    </div>

    <button class="btn btn-dark w-100">Đăng nhập</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { store } from '../store.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ email: '', password: '' })

const onSubmit = () => {
  const success = store.login(form.email, form.password)
  if (success) {
    alert('Đăng nhập thành công!')
    router.push('/')
  } else {
    alert('Sai email hoặc mật khẩu!')
  }
}
</script>
<!-- Template giữ nguyên như cũ -->

