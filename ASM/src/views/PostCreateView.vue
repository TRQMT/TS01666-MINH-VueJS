<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-sm">
        <div class="card-header bg-white">
          <h4 class="mb-0">Đăng bài viết mới</h4>
        </div>
        <div class="card-body">
          <!-- 1. QUAN TRỌNG: Phải có .prevent ở đây -->
          <form @submit.prevent="submitPost">

            <div class="mb-3">
              <label class="form-label">Tiêu đề</label>
              <input v-model="post.title" type="text" class="form-control" required>
            </div>

            <div class="mb-3">
              <label class="form-label">Hình ảnh</label>
              <input type="file" class="form-control" @change="handleFileUpload" accept="image/*">
              <img v-if="post.image" :src="post.image" class="mt-2" height="150">
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
import { useRouter } from 'vue-router' // 2. Import useRouter

const router = useRouter() // 3. Khai báo router (BẮT BUỘC)

const post = reactive({ title: '', content: '', image: null })

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => post.image = e.target.result
    reader.readAsDataURL(file)
  }
}

const submitPost = () => {
  const newPost = {
    id: Date.now(),
    ...post,
    author: store.currentUser ? store.currentUser.name : 'Ẩn danh',
    date: new Date().toLocaleDateString('vi-VN'),
    comments: []
  }

  store.addPost(newPost)

  // 4. Chuyển trang
  // Hãy chắc chắn dòng này nằm CUỐI hàm
  router.push('/')
}
</script>
