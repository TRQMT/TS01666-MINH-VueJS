<template>
  <div class="container py-4">
    <div class="card shadow-sm">
      <div class="card-header bg-dark text-white">
        Lab 5 - Bài 2: Two-way Data Binding (v-model)
      </div>

      <div class="card-body">
        <label class="form-label">Nhập dữ liệu</label>
        <input
          v-model="userInput"
          type="text"
          class="form-control"
          placeholder="Nhập dữ liệu vào đây"
        />

        <div class="alert alert-primary mt-3 mb-0">
          <strong>Giá trị bạn nhập:</strong> {{ userInput }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userInput = ref('FPL')
</script>
