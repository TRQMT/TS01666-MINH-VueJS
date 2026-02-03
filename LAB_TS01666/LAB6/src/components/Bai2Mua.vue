<template lang="">
    <div class="container py-4">
        <div class="row justify-content-center">
             <h3 class="mb-3">Lab 6 - Bài 2: Nhập tháng -> Mùa</h3>

        <div class="mb-3" style="max-width: 360px;">
                <label class="form-label">Tháng:</label>
                <input v-model.number="month" type="number" step="1" min="0" max="12" class="form-control">
        </div>

        <p v-if="month === null || month === ''" class="mb-0 text-muted">
            Vui lòng nhập tháng.
        </p>
        <p v-else-if="month <= 0 || month >12" class="mb-0 text-danger">
            Tháng không hợp lệ. Vui lòng nhập tháng từ 1 đến 12.
        </p>
        <p v-else-if="month <= 3" class="mb-0 text-danger">Mùa xuân</p>
        <p v-else-if="month <= 6" class="mb-0 text-warning">Mùa hạ</p>
        <p v-else-if="month <= 9" class="mb-0 text-warning">Mùa thu</p>
        <p v-else class="mb-0 text-primary">Mùa đông</p>
         </div>
       
        
    </div>
</template>
<script setup>
import { ref } from "vue";
const month = ref(null);
</script>
