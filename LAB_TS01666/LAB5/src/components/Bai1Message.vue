<template>
    <div class="container py-4">
        <div class="card shadow-sm">
            <div class="card-header bg-dark text-white">
                 Lab 5 - Bài 1: Event + Data binding
            </div>
                
            <div class="card-body">
                <p class="mb-3">
                    <span class="">Thông điệp: </span>
                    <span class="">{{message}}</span>
                </p>
                <button class="btn btn-primary" @click="changeMessage">Thay đổi thông điệp</button>

            </div>   
                
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref(messageDefault);
const messageDefault = 'Xin chao Minh';
const messageNew = 'Xin chao Minh Bell';
const changeMessage = () => {
    message.value = (message.value === messageDefault) ? messageNew : messageDefault;
};
</script>

<style lang="">
    
</style>