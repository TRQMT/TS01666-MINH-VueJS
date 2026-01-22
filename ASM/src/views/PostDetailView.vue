<template>
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <div class="mb-3">
        <RouterLink class="text-decoration-none" to="/">← Quay lại Trang chủ</RouterLink>
      </div>

      <article class="border rounded-3 p-4">
        <div class="text-muted small mb-2">Thể thao • ID bài: {{ id }}</div>
        <h2 class="mb-3">{{ post.title }}</h2>

        <p class="text-secondary">
          {{ post.content }}
        </p>

        <hr />

        <h6 class="mb-2">Bình luận (demo)</h6>
        <div class="input-group">
          <input v-model="comment" class="form-control" placeholder="Viết bình luận..." />
          <button class="btn btn-dark" @click="addComment">Gửi</button>
        </div>

        <ul class="list-group mt-3">
          <li class="list-group-item" v-for="c in comments" :key="c.id">
            <strong>{{ c.author }}</strong>:
            <span>{{ c.text }}</span>
            <div class="text-muted small">{{ c.time }}</div>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params.id)

const post = ref({
  title: 'Bài báo demo: U23 Việt Nam và phản ứng của CĐV khu vực',
  content:
    'Nội dung demo để bạn thấy trang chi tiết bài viết. Sau này Y2 bạn sẽ lấy dữ liệu thật từ API/backend.',
})

const comment = ref('')
const comments = ref([
  { id: 1, author: 'User A', text: 'Bài viết hay!', time: '21/01/2026 19:25' },
])

const addComment = () => {
  if (!comment.value.trim()) return
  comments.value.unshift({
    id: Date.now(),
    author: 'Bạn',
    text: comment.value,
    time: new Date().toLocaleString('vi-VN'),
  })
  comment.value = ''
}
</script>
