<template>
    <div class="container mt-5">
        <input type="number" v-model.number="score">
        <p v-if="score>=5">Đậu</p>
        <p v-else-if="score<5">Rớt</p>

        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4 d-flex align-items-stretch">
                <div class="card h-100 w-100">
                    <img :src="items[0].image" alt="" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[0].title }}</h3>
                        <p class="card-text">{{ items[0].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 d-flex align-items-stretch">
                <div class="card h-100 w-100">
                    <img :src="items[1].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[1].title }}</h3>
                        <p class="card-text">{{ items[1].content }}</p>


                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 d-flex align-items-stretch">
                <div class="card h-100 w-100">
                    <img :src="items[2].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[2].title }}</h3>
                        <p class="card-text">{{ items[2].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const score = ref(0);




// Import hình ảnh từ thư mục assets 
import img1 from '../assets/images/banner1.jpg';
import img2 from '../assets/images/banner2.jpg';
import img3 from '../assets/images/banner3.jpg';

const items = ([
    {
        title: '8 loại rau củ quả giàu canxi', content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...', image: img1
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương vị hấp dẫn...',
        image: img2
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...', image:
            img3
    },
]); 
</script>
<style>
.card-text {
    text-align: justify;
}

.card-body {
    text-align: left;
}
</style>