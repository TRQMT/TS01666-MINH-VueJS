<template>
  <div class="row g-4">
    <!-- CỘT CHÍNH (BÊN TRÁI) -->
    <div class="col-lg-8">
      
      <!-- 1. BÀI VIẾT NỔI BẬT (FEATURED) -->
      <!-- Thêm v-if để kiểm tra có bài viết không mới hiển thị -->
      <div v-if="featured" class="p-4 bg-light rounded-3 border">
        <div class="text-muted small mb-2">Nổi bật • {{ featured.date }}</div>
        <h2 class="mb-2">{{ featured.title }}</h2>
        <p class="text-secondary mb-3">{{ featured.excerpt || featured.content.substring(0, 100) + '...' }}</p>

        <div class="d-flex gap-2">
          <RouterLink class="btn btn-dark" :to="`/posts/${featured.id}`">Đọc tiếp</RouterLink>
          <button class="btn btn-outline-secondary" @click="saveForLater">Lưu xem sau</button>
        </div>
      </div>
      <!-- Nếu không có bài viết nào -->
      <div v-else class="alert alert-info">Chưa có bài viết nào.</div>

      <!-- 2. DANH SÁCH TIN MỚI -->
      <h5 class="mt-4 mb-3">Tin mới nhất</h5>
      <div class="row g-3">
        <!-- Duyệt qua danh sách các bài viết còn lại -->
        <div class="col-md-6" v-for="p in listPosts" :key="p.id">
          <div class="card h-100">
            <!-- Hiển thị ảnh nếu có -->
            <img v-if="p.image" :src="p.image" class="card-img-top" style="height: 160px; object-fit: cover;">
            
            <div class="card-body">
              <div class="text-muted small mb-1">{{ p.author }} • {{ p.date }}</div>
              <h6 class="card-title">{{ p.title }}</h6>
              <p class="card-text text-secondary small">
                {{ p.excerpt || p.content.substring(0, 50) + '...' }}
              </p>
              <RouterLink class="btn btn-sm btn-outline-dark" :to="`/posts/${p.id}`">
                Xem chi tiết
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CỘT PHỤ (BÊN PHẢI) -->
    <div class="col-lg-4">
      <div class="border rounded-3 p-3">
        <h6 class="mb-2">Trending (Xem nhiều)</h6>
        <ol class="mb-0 ps-3">
          <!-- Lấy danh sách trending từ store -->
          <li class="mb-2" v-for="t in trending" :key="t.id">
            <RouterLink class="text-decoration-none" :to="`/posts/${t.id}`">
              {{ t.title }}
            </RouterLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '../store.js' // Import kho dữ liệu chung
import { RouterLink } from 'vue-router'

// 1. Logic lấy bài nổi bật (Lấy bài mới nhất đầu tiên trong Store)
const featured = computed(() => {
  if (store.posts && store.posts.length > 0) {
    return store.posts[0] // Lấy phần tử đầu tiên làm bài nổi bật
  }
  return null // Trả về null nếu không có bài nào
})

// 2. Logic lấy danh sách tin mới (Lấy các bài còn lại trừ bài đầu tiên)
const listPosts = computed(() => {
  if (store.posts && store.posts.length > 1) {
    return store.posts.slice(1) // Lấy từ bài thứ 2 trở đi
  }
  return []
})

// 3. Logic lấy trending (Ví dụ: lấy 3 bài đầu tiên)
const trending = computed(() => {
  return store.posts ? store.posts.slice(0, 3) : []
})

const saveForLater = () => alert('Đã lưu bài viết vào danh sách xem sau!')
</script>
