<template>
  <div>
    <AppNavbar />
    <main class="container py-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue'
</script>
