<template>
  <div class="products-section">
    <h2 class="section-title">Trend Ürünler</h2>
    <div class="carousel-container">
      <!-- Sol Ok -->
      <button class="arrow-button left-arrow" @click="scrollLeft">
        ‹
      </button>

      <!-- Ürün Listesi -->
      <div class="product-list" ref="productList">
        <div
            class="product-card"
            v-for="product in products"
            :key="product.id"
        >
          <!-- Ürün Görseli -->
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
            <button class="wishlist-button">♡</button>
          </div>

          <!-- Ürün Bilgisi -->
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="product-prices">
              <span class="old-price">{{ product.oldPrice }} TL</span>
              <span class="basket-price">Sepette {{ product.basketPrice }} TL</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sağ Ok -->
      <button class="arrow-button right-arrow" @click="scrollRight">
        ›
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Product {
  id: number;
  name: string;
  oldPrice: number;
  basketPrice: number;
  image: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    name: "Sergio Regular Fit Normal Bel Pantolon",
    oldPrice: 899.99,
    basketPrice: 719.99,
    image: "/images/urun1.jpg",
  },
  {
    id: 2,
    name: "Jogger Pantolon Pamuklu",
    oldPrice: 899.99,
    basketPrice: 719.99,
    image: "/images/urun2.jpg",
  },
  {
    id: 3,
    name: "Boxy Fit Kapüşonlu Basic Sweatshirt",
    oldPrice: 599.99,
    basketPrice: 300.0,
    image: "/images/urun3.jpg",
  },
  {
    id: 4,
    name: "Regular Fit Eşofman Altı",
    oldPrice: 699.99,
    basketPrice: 350.0,
    image: "/images/urun4.jpg",
  },
  {
    id: 5,
    name: "Oversize Geniş Kalıp Bisiklet Yaka Sweatshirt",
    oldPrice: 599.99,
    basketPrice: 270.0,
    image: "/images/urun5.jpg",
  },
  {
    id: 6,
    name: "Baggy Fit Geniş Paça Jean",
    oldPrice: 899.99,
    basketPrice: 674.99,
    image: "/images/urun6.jpg",
  },
  {
    id: 7,
    name: "Relax Fit Dik Yaka Fermuarlı Sweatshirt",
    oldPrice: 699.99,
    basketPrice: 524.99,
    image: "/images/urun7.jpg",
  },
]);

const productList = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (productList.value) {
    productList.value.scrollBy({
      left: -300, // 300px sola kaydırır
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (productList.value) {
    productList.value.scrollBy({
      left: 300, // 300px sağa kaydırır
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
.products-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
}

.product-list {
  display: flex;
  gap: 20px;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
}

.product-card {
  flex: 0 0 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.wishlist-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  padding: 4px;
  font-size: 18px;
  color: #d9534f;
  cursor: pointer;
}

.wishlist-button:hover {
  background: #000;
  color: white;
}

.product-info {
  padding: 5px;
  text-align: center;
}

.product-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.product-prices {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.old-price {
  text-decoration: line-through;
  font-size: 12px;
  color: #777;
}

.basket-price {
  font-size: 14px;
  color: #d9534f;
  font-weight: bold;
}

.arrow-button {
  position: absolute;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.left-arrow {
  left: -20px;
}

.right-arrow {
  right: -20px;
}

.arrow-button:hover {
  background-color: #d9534f;
}
</style>
