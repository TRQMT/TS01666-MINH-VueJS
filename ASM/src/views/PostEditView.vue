<!-- src/views/PostEditView.vue -->
<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header bg-white">
          <h4 class="mb-0">Chỉnh sửa bài viết</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="handleUpdate">
            <div class="mb-3">
              <label class="form-label">Tiêu đề</label>
              <input v-model="form.title" class="form-control" required>
            </div>

            <div class="mb-3">
              <label class="form-label">Hình ảnh</label>
              <input type="file" class="form-control mb-2" @change="handleFileUpload">
              <img v-if="form.image" :src="form.image" height="150" class="rounded border">
            </div>

            <div class="mb-3">
              <label class="form-label">Nội dung</label>
              <textarea v-model="form.content" class="form-control" rows="6" required></textarea>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <RouterLink to="/admin" class="btn btn-secondary">Hủy bỏ</RouterLink>
              <button class="btn btn-primary">Lưu thay đổi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { store } from '../store.js'

const route = useRoute()
const router = useRouter()
const form = reactive({ title: '', content: '', image: '' })
const postId = parseInt(route.params.id)

// Load dữ liệu cũ khi vào trang
onMounted(() => {
  const post = store.posts.find(p => p.id === postId)
  if (post) {
    form.title = post.title
    form.content = post.content
    form.image = post.image
  } else {
    router.push('/admin') // Nếu không tìm thấy bài thì quay về trang quản lý
  }
})

const handleFileUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => form.image = e.target.result
    reader.readAsDataURL(file)
  }
}


const handleUpdate = () => {
  // 1. Gọi hàm update trong store
  const result = store.updatePost(postId, form)
  
  if (result) {
    // 2. Hiện thông báo
    showSuccess.value = true
    
    // 3. Đợi 1 giây rồi chuyển trang
    setTimeout(() => {
      // Chuyển về trang quản lý (admin) hoặc trang chủ
      router.push('/admin') 
    }, 1000)
  } else {
    alert('Có lỗi xảy ra, không tìm thấy bài viết!')
  }
}
</script>
