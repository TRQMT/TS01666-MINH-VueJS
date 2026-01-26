<template>
  <div class="card shadow-sm">
    <div class="card-header bg-dark text-white">Danh sách bài viết</div>

    <div class="card-body">
      <div v-if="posts.length === 0" class="text-muted">
        Chưa có bài viết nào.
      </div>

      <div
        v-for="(post, index) in posts"
        :key="index"
        class="p-3 mb-3 rounded border post"
        :class="{ highlighted: post.title.length > 20 }"
        :style="{ backgroundColor: post.backgroundColor, color: post.textColor }"
      >
        <h5 class="mb-1">{{ post.title }}</h5>
        <div class="small text-secondary mb-2">Tác giả: {{ post.author }}</div>
        <p class="mb-0">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: { type: Array, required: true } 
  }
}
</script>

<style scoped>
.highlighted {
  border: 2px solid #0d6efd !important; 
}
</style>
