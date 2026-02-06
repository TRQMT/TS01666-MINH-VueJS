<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store.js'

const route = useRoute()
const commentContent = ref('')

// Tìm bài viết theo ID từ URL trong store
const post = computed(() => {
  const id = parseInt(route.params.id)
  return store.posts.find(p => p.id === id) || { title: 'Không tìm thấy', content: '', comments: [] }
})

const addComment = () => {
  if (!store.currentUser) return alert('Bạn cần đăng nhập để bình luận!')
  if (!commentContent.value.trim()) return

  const newComment = {
    id: Date.now(),
    author: store.currentUser.name, // Lấy tên người đang đăng nhập
    text: commentContent.value,
    time: new Date().toLocaleString('vi-VN')
  }

  // Nếu bài viết chưa có mảng comments thì tạo mới
  if (!post.value.comments) post.value.comments = []
  
  post.value.comments.unshift(newComment)
  commentContent.value = ''
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-lg-9">
       <!-- Giữ lại cấu trúc cũ, chỉ sửa phần v-for comments -->
       <article class="border rounded-3 p-4" v-if="post.title !== 'Không tìm thấy'">
         <h2>{{ post.title }}</h2>
         <div class="text-muted small mb-3">Đăng bởi: {{ post.author }} - {{ post.date }}</div>
         
         <!-- Hiển thị ảnh nếu có -->
         <img v-if="post.image" :src="post.image" class="img-fluid mb-3 rounded">
         
         <p style="white-space: pre-line">{{ post.content }}</p>

         <hr>
         <h6>Bình luận</h6>
         <!-- Form bình luận -->
         <div class="input-group mb-3">
           <input v-model="commentContent" class="form-control" placeholder="Viết bình luận..." @keyup.enter="addComment">
           <button class="btn btn-dark" @click="addComment">Gửi</button>
         </div>

         <!-- Danh sách bình luận -->
         <ul class="list-group">
           <li class="list-group-item" v-for="c in post.comments" :key="c.id">
             <strong>{{ c.author }}</strong>: {{ c.text }}
             <div class="text-muted small">{{ c.time }}</div>
           </li>
         </ul>
       </article>
       <div v-else class="alert alert-danger">Bài viết không tồn tại</div>
    </div>
  </div>
</template>
