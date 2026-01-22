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
const form = reactive({ name: '', email: '', password: '' })
const onSubmit = () => console.log(form)
</script>
