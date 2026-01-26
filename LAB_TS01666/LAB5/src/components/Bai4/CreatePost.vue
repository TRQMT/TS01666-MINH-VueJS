<template>
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">Tạo bài viết mới</div>

    <div class="card-body">
      <div class="mb-3">
        <label class="form-label">Tiêu đề</label>
        <input v-model="title" class="form-control" placeholder="Nhập tiêu đề bài viết" />
      </div>

      <div class="mb-3">
        <label class="form-label">Tác giả</label>
        <input v-model="author" class="form-control" placeholder="Nhập tên tác giả" />
      </div>

      <div class="mb-3">
        <label class="form-label">Nội dung</label>
        <textarea v-model="content" class="form-control" rows="4" placeholder="Nhập nội dung"></textarea>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-primary" @click="submitPost">Đăng bài</button>
        <button class="btn btn-outline-secondary" @click="resetForm">Xóa nhập</button>
      </div>

      <div v-if="error" class="alert alert-warning mt-3 mb-0">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-post']) // lab yêu cầu emit sự kiện add-post [file:1]

const title = ref('')
const author = ref('')
const content = ref('')
const error = ref('')

function resetForm() {
  title.value = ''
  author.value = ''
  content.value = ''
  error.value = ''
}

function submitPost() {
  if (!title.value || !author.value || !content.value) {
    error.value = 'Vui lòng nhập đầy đủ tiêu đề, tác giả và nội dung.'
    return
  }

  const newPost = {
    title: title.value,
    author: author.value,
    content: content.value,

    backgroundColor: '#f8f9fa',
    textColor: '#212529'
  }

  emit('add-post', newPost) // gửi bài viết lên component cha [file:1]
  resetForm()
}
</script>
