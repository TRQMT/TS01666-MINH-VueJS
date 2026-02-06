<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Thông tin cá nhân</div>
        <div class="card-body">
          <form @submit.prevent="handleUpdate">
            <!-- Hiển thị Avatar hiện tại -->
            <div class="mb-3 text-center">
               <img :src="form.avatar || defaultAvatar" class="rounded-circle mb-2 border" width="120" height="120" style="object-fit:cover">
            </div>

            <div class="mb-3">
              <label class="form-label">Họ tên</label>
              <input v-model="form.name" class="form-control">
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="form.email" type="email" class="form-control" disabled>
            </div>

            <!-- THAY ĐỔI: Chọn avatar từ máy -->
            <div class="mb-3">
              <label class="form-label">Thay đổi ảnh đại diện</label>
              <input type="file" class="form-control" @change="handleFileChange" accept="image/*">
            </div>

            <button class="btn btn-primary w-100">Cập nhật thông tin</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { store } from '../store.js'

// Ảnh mặc định nếu user chưa có avatar (dùng ảnh local)
// Lưu ý: Bạn cần có file 'user-default.png' trong src/assets/images/ hoặc đổi tên cho đúng
const defaultAvatar = new URL('../assets/images/user-default.png', import.meta.url).href

const form = reactive({ name: '', email: '', avatar: '' })

onMounted(() => {
  if (store.currentUser) {
    form.name = store.currentUser.name
    form.email = store.currentUser.email
    form.avatar = store.currentUser.avatar
  }
})

// Xử lý chọn ảnh
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.avatar = e.target.result // Cập nhật preview ngay lập tức
    }
    reader.readAsDataURL(file)
  }
}

const handleUpdate = () => {
  store.updateUser({ 
    name: form.name, 
    avatar: form.avatar 
  })
  alert('Cập nhật thành công!')
}
</script>
