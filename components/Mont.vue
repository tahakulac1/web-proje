<script lang="ts" setup>
interface Product {
  title: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    title: '',
    price: '',
    image: '/images/firsat1.jpg',
  },
  {
    title: '',
    price: '',
    image: '/images/firsat2.jpg',
  },
  {
    title: '',
    price: '',
    image: '/images/firsat3.jpg',
  },
  {
    title: '',
    price: '',
    image: '/images/firsat4.jpg',
  },
];
</script>

<template>
  <div class="trend-products">
    <h1 class="title">Trend Ürünler</h1>
    <div class="products-grid">
      <div v-for="(product, index) in products" :key="index" class="">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="">
          <h2 class="">{{ product.title }}</h2>
          <p class="">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trend-products {
  text-align: center;
  padding: 20px;
}
.title {
  font-size: 1.2rem; /* Font boyutunu küçült */
  font-weight: 400; /* Font ağırlığını incelt */
  margin-bottom: 15px; /* Alt boşluğu biraz azalt */
  text-align: left; /* Sola hizala */
}


.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
}

.product-info {
  padding: 10px;
}

.product-title {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-price {
  font-size: 1rem;
  color: red;
  font-weight: bold;
}
</style>
