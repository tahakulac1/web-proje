<template>
  <div>
    <!-- Carousel -->
    <Carousel />



    <!-- Login ve Register Bölümü -->
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import CategoryMenu from '@/components/CategoryMenu.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Collections from "@/components/Collections.vue";
import Cart from "@/components/Cart.vue"
import Help from "@/components/Help.vue"
import Mont from "@/components/Mont.vue"

import {ref} from 'vue';

const activeComponent = ref(null);
</script>

<style scoped>
.auth-section {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
