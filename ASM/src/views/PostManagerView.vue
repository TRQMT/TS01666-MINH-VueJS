<!-- src/views/PostManagerView.vue -->
<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Quản lý bài viết</h2>
      <RouterLink to="/create-post" class="btn btn-primary">
        + Viết bài mới
      </RouterLink>
    </div>

    <!-- Bảng danh sách bài viết -->
    <div class="card shadow-sm">
      <div class="card-body p-0">
        <table class="table table-hover mb-0">
          <thead class="bg-light">
            <tr>
              <th scope="col" style="width: 5%">#</th>
              <th scope="col" style="width: 40%">Tiêu đề</th>
              <th scope="col">Tác giả</th>
              <th scope="col">Ngày đăng</th>
              <th scope="col" class="text-end">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in store.posts" :key="post.id">
              <td>{{ index + 1 }}</td>
              <td>
                <div class="d-flex align-items-center">
                  <img v-if="post.image" :src="post.image" class="rounded me-2" width="40" height="40" style="object-fit:cover">
                  <span class="fw-bold text-truncate" style="max-width: 300px;">{{ post.title }}</span>
                </div>
              </td>
              <td>{{ post.author }}</td>
              <td>{{ post.date }}</td>
              <td class="text-end">
                <RouterLink :to="`/edit-post/${post.id}`" class="btn btn-sm btn-outline-primary me-2">
                  <i class="bi bi-pencil"></i> Sửa
                </RouterLink>
                <button class="btn btn-sm btn-outline-danger" @click="handleDelete(post.id)">
                  <i class="bi bi-trash"></i> Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Hiển thị khi không có bài viết -->
    <div v-if="store.posts.length === 0" class="text-center py-5">
      <p class="text-muted">Chưa có bài viết nào.</p>
    </div>
  </div>
</template>

<script setup>
import { store } from '../store.js'

const handleDelete = (id) => {
  // Gọi action delete từ store
  // Lưu ý: store.deletePost đã có confirm bên trong
  const success = store.deletePost(id) 
  if (success) {
    // Không cần làm gì thêm vì Vue tự động reactivity cập nhật bảng
  }
}
</script>
