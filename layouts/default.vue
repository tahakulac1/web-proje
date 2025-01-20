<template>
  <div>
    <!-- Header her sayfada görünecek -->
    <Header
        @toggle-login-modal="toggleLoginModal"
        @toggle-collections-modal="toggleCollectionsModal"
        @toggle-cart-modal="toggleCartModal"
        @toggle-help-modal="toggleHelpModal"
        @toggle-register-modal="toggleRegisterModal"
        @toggle-mont-modal="toggleMontModal"
    />
    <CategoryMenu/>

    <!-- Sayfa içeriği -->
    <NuxtPage />
    <Mont/>

    <Urunler/>





    <!-- Footer her sayfada görünecek -->
    <Footer />
    <div
        v-if="isMontModalVisible"
        class="modal-overlay"
        @click.self="toggleMontModal"
    >
      <!-- login açılma yeri -->
      <div class="modal-content2">
        <button class="close-button" @click="toggleMontModal">X</button>
        <Mont/>
      </div>
    </div>

    <!-- Login Modal -->
    <div
        v-if="isLoginModalVisible"
        class="modal-overlay"
        @click.self="toggleLoginModal"
    >
      <!-- login açılma yeri -->
      <div class="modal-content">
        <button class="close-button" @click="toggleLoginModal">X</button>
        <Login />
      </div>
    </div>

    <div
        v-if="isRegisterModalVisible"
        class="modal-overlay"
        @click.self="toggleRegisterModal"
    >
    <div class="modal-content">
      <button class="close-button" @click="toggleRegisterModal">X</button>
      <Register />
    </div>
  </div>

    <!-- Collections Modal -->
    <div
        v-if="isCollectionsModalVisible"
        class="modal-overlay"
        @click.self="toggleCollectionsModal"
    >
      <!-- Collections açılma yeri -->
      <div class="modal-content2">
        <button class="close-button" @click="toggleCollectionsModal">X</button>
        <Collections />

      </div>
    </div>

    <div
        v-if="isCartModalVisible"
        class="modal-overlay"
        @click.self="toggleCartModal"
    >
      <!-- Collections açılma yeri -->
      <div class="modal-content2">
        <button class="close-button" @click="toggleCartModal">X</button>
        <Cart />
      </div>
    </div>

    <div
        v-if="isHelpModalVisible"
        class="modal-overlay"
        @click.self="toggleHelpModal"
    >
      <!-- Collections açılma yeri -->
      <div class="modal-content2">
        <button class="close-button" @click="toggleHelpModal">X</button>
        <Help />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/components/Login.vue';
import Collections from "@/components/Collections.vue";
import CategoryMenu from "~/components/CategoryMenu.vue";
import Register from "@/components/Register.vue";
import Carousel from "~/components/Carousel.vue";
import Help from "@/components/Help.vue";
import Product from "~/components/Product.vue";
import Cart from "~/components/Cart.vue";
import Mont from "@/components/Mont.vue"

import { ref } from 'vue';

const isLoginModalVisible = ref(false);
const isCollectionsModalVisible = ref(false);
const isCartModalVisible = ref(false);
const isHelpModalVisible = ref(false);
const isRegisterModalVisible = ref(false);
const isMontModalVisible = ref(false);

const toggleMontModal = () => {
  isMontModalVisible.value = !isMontModalVisible.value;
};
const toggleLoginModal = () => {
  isLoginModalVisible.value = !isLoginModalVisible.value;
};

const toggleCollectionsModal = () => {
  isCollectionsModalVisible.value = !isCollectionsModalVisible.value;
};

const toggleCartModal = () => {
  isCartModalVisible.value = !isCartModalVisible.value;
};

const toggleHelpModal = () => {
  isHelpModalVisible.value = !isHelpModalVisible.value;
};

const toggleRegisterModal = () => {
  isRegisterModalVisible.value = !isRegisterModalVisible.value;
};
// Kategori verileri
const categories = [
  { title: "", image: "/firsat1.jpg" },
  { title: "", image: "/firsat2.jpg" },
  { title: "", image: "/firsat3.jpg" },
  { title: "", image: "/firsat4.jpg" },
];

</script>

<style scoped>
/* Modal için düzenlemeler */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Arka plan karartması */
  display: flex;
  align-items: center; /* Dikeyde ortala */
  justify-content: center; /* Yatayda ortala */
  z-index: 1000; /* Üstte görünmesi için */
}
.modal-content {
  background: white; /* Modal arka planı */
  padding: 20px;
  border-radius: 8px 0 0 8px; /* Sol üst ve sol alt köşeleri yuvarla */
  width: 35%; /* Ekranın %25'ini kapla */
  height: 100%; /* Tüm yüksekliği kapla */
  position: fixed; /* Sağ tarafa sabitler */
  top: 0;
  right: 0; /* Sağ tarafa yapışık */
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3); /* Sağdan gölge efekti */
  overflow: auto; /* İçerik taşarsa kaydırma ekler */
  z-index: 1001; /* Üstte görünmesi için */
}



.modal-content2 {
  background: white; /* Modal arka planı */
  padding: 20px; /* İç boşluk */
  border-radius: 0; /* Kenar köşelerini düz yap */
  width: 100%; /* Tüm genişliği kapla */
  height: 100%; /* Tüm yüksekliği kapla */
  box-shadow: none; /* Gölgeyi kaldır */
  position: relative; /* Kapatma butonunu konumlandırmak için */
  overflow: auto; /* İçerik taşarsa kaydır */
}


.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  padding: 0;
}
</style>
