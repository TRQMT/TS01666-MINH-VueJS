<template>
    <div class="container py-4">
        <div class="row justify-content-center">
             <h3 class="mb-3">Lab 6 - Bài 1: Xếp loại theo ĐTB</h3>

        <div class="mb-3" style="max-width: 360px;">
            <label class="form-label">Điểm trung bình:</label>
            <input v-model.number="diemTB" type="number" step="0.1" min="0" max="10" class="form-control">
        </div>

        <p v-if="diemTB === null || diemTB === ''" class="mb-0 text-muted">
            Vui lòng nhập điểm trung bình.
        </p>
        <p v-else-if="diemTB<0 || diemTB >10" class="mb-0 text-danger">
            Điểm trung bình không hợp lệ. Vui lòng nhập điểm từ 0 đến 10.
        </p>
        <p v-else-if="diemTB <= 5" class="mb-0 text-danger">Yếu</p>
        <p v-else-if="diemTB <= 6.5" class="mb-0 text-warning">Trung bình</p>
        <p v-else-if="diemTB <= 8" class="mb-0 text-warning">Khá</p>
        <p v-else-if="diemTB < 9" class="mb-0 text-primary">Giỏi</p>
        <p v-else class="mb-0 text-success">Xuất sắc</p>

        </div>
       
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const diemTB = ref(null);
</script>
