<template>
  <div class="row g-4">
    <div class="col-lg-8">
      <div class="p-4 bg-light rounded-3 border">
        <div class="text-muted small mb-2">Thể thao • 21/01/2026</div>
        <h2 class="mb-2">{{ featured.title }}</h2>
        <p class="text-secondary mb-3">{{ featured.excerpt }}</p>

        <div class="d-flex gap-2">
          <RouterLink class="btn btn-dark" :to="`/posts/${featured.id}`">Đọc tiếp</RouterLink>
          <button class="btn btn-outline-secondary" @click="saveForLater">Lưu xem sau</button>
        </div>
      </div>

      <h5 class="mt-4 mb-3">Tin mới</h5>
      <div class="row g-3">
        <div class="col-md-6" v-for="p in posts" :key="p.id">
          <div class="card h-100">
            <div class="card-body">
              <div class="text-muted small mb-1">{{ p.category }} • {{ p.date }}</div>
              <h6 class="card-title">{{ p.title }}</h6>
              <p class="card-text text-secondary">{{ p.excerpt }}</p>
              <RouterLink class="btn btn-sm btn-outline-dark" :to="`/posts/${p.id}`">
                Xem
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="border rounded-3 p-3">
        <h6 class="mb-2">Trending</h6>
        <ol class="mb-0 ps-3">
          <li class="mb-2" v-for="t in trending" :key="t.id">
            <RouterLink class="text-decoration-none" :to="`/posts/${t.id}`">{{ t.title }}</RouterLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const featured = {
  id: 1,
  title: 'Bài báo demo: U23 Việt Nam và phản ứng của CĐV khu vực',
  excerpt: 'Đây là bài viết tượng trưng để bạn tương tác giao diện như trang báo. Bấm “Đọc tiếp” để xem trang chi tiết.',
}

const posts = [
  { id: 1, category: 'Thể thao', date: '21/01/2026', title: 'U23 Việt Nam: góc nhìn sau trận đấu', excerpt: 'Tóm tắt ngắn 1-2 dòng...' },
  { id: 2, category: 'Công nghệ', date: '21/01/2026', title: 'Vue + Bootstrap: dựng UI nhanh', excerpt: 'Một số kinh nghiệm dựng giao diện...' },
  { id: 3, category: 'Giải trí', date: '20/01/2026', title: 'Top nội dung nổi bật hôm nay', excerpt: 'Tóm tắt ngắn 1-2 dòng...' },
  { id: 4, category: 'Thời sự', date: '20/01/2026', title: 'Điểm tin trong ngày', excerpt: 'Tóm tắt ngắn 1-2 dòng...' },
]

const trending = [
  { id: 2, title: 'Vue Router cơ bản cho người mới' },
  { id: 1, title: 'Bài viết demo kiểu trang báo' },
  { id: 3, title: 'Giao diện Bootstrap: bố cục 2 cột' },
]

const saveForLater = () => alert('Đã lưu (demo).')
</script>
