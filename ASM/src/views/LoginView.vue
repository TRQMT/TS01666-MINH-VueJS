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
const form = reactive({ email: '', password: '' })
const onSubmit = () => console.log(form)
</script>
