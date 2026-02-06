<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-sm">
        <div class="card-header bg-white">
          <h4 class="mb-0">Đăng bài viết mới</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitPost">
            <div class="mb-3">
              <label class="form-label">Tiêu đề bài viết</label>
              <input v-model="post.title" type="text" class="form-control" required>
            </div>

            <!-- THAY ĐỔI: Chọn ảnh từ máy -->
            <div class="mb-3">
              <label class="form-label">Hình ảnh minh họa</label>
              <input type="file" class="form-control" @change="handleFileUpload" accept="image/*">

              <!-- Xem trước ảnh nếu đã chọn -->
              <div v-if="post.image" class="mt-3">
                <p class="text-muted small">Xem trước:</p>
                <img :src="post.image" class="img-thumbnail" style="max-height: 200px">
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Nội dung</label>
              <textarea v-model="post.content" class="form-control" rows="6" required></textarea>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <RouterLink to="/" class="btn btn-secondary">Hủy</RouterLink>
              <button class="btn btn-primary">Đăng bài</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { store } from '../store.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const post = reactive({ title: '', content: '', image: null }) // image mặc định là null

// Hàm xử lý khi người dùng chọn file
const handleFileUpload = (event) => {
  const file = event.target.files[0] // Lấy file đầu tiên
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      // Khi đọc xong, gán kết quả (Base64 string) vào biến post.image
      post.image = e.target.result
    }
    reader.readAsDataURL(file) // Bắt đầu đọc file dưới dạng URL
  }
}

const submitPost = () => {
  const newPost = {
    id: Date.now(),
    ...post,
    author: store.currentUser.name,
    date: new Date().toLocaleDateString('vi-VN'),
    comments: []
  }

  store.addPost(newPost)
  alert('Đăng bài thành công!')
  router.push('/')
}
</script>
