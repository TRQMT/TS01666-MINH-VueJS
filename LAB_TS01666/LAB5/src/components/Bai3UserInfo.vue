<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-dark text-white">
            Lab 5 - Bài 3: Thông tin cá nhân (v-model + reactive)
          </div>

          <div class="card-body">
            <form class="row g-3">
              <div class="col-12">
                <label class="form-label">Họ và Tên</label>
                <input
                  v-model="userInfo.name"
                  type="text"
                  class="form-control"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div class="col-md-4">
                <label class="form-label">Tuổi</label>
                <input
                  v-model="userInfo.age"
                  type="number"
                  class="form-control"
                  placeholder="Nhập tuổi"
                />
              </div>

              <div class="col-md-8">
                <label class="form-label">Email</label>
                <input
                  v-model="userInfo.email"
                  type="email"
                  class="form-control"
                  placeholder="Nhập email"
                />
              </div>
            </form>

            <div class="alert alert-secondary mt-4 mb-0">
              <h5 class="mb-3">Thông tin đã nhập</h5>
              <div><strong>Họ và Tên:</strong> {{ userInfo.name }}</div>
              <div><strong>Tuổi:</strong> {{ userInfo.age }}</div>
              <div><strong>Email:</strong> {{ userInfo.email }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const userInfo = reactive({
  name: '',
  age: null,
  email: ''
})
</script>
