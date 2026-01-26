<template>
  <div class="container py-4">
    <div class="row g-3">
      <div class="col-12 col-lg-5">
        <CreatePost @add-post="addPost" />
      </div>

      <div class="col-12 col-lg-7">
        <PostList :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './CreatePost.vue'
import PostList from './PostList.vue'

const posts = ref([
  {
    title: 'Bật Mí 8 Nguyên Tắc Phối Màu Quần Áo Sành Điệu',
    author: 'Nguyễn Văn Tèo',
    content: 'Bạn có thể phối áo màu xanh lá, quần màu kem và giày màu tím...',
    backgroundColor: '#f8f9fa',
    textColor: '#212529'
  }
])

function addPost(newPost) {
  posts.value.unshift(newPost)
}
</script>
