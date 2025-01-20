<template>
  <div class="collections-page">
    <div class="container">
      <div class="left-section">
        <!-- Hesap Bilgileri -->
        <div class="account-info">
          <h2>Hesap Bilgileri</h2>
          <ul>
            <li>Sipariş Takibi</li>
            <li>Çerez Tercihleri</li>
            <li @click="toggleGiftClubMenu" class="gift-club">
              Defacto Gift Club
              <span v-if="showGiftClubMenu">▼</span>
              <span v-if="!showGiftClubMenu">►</span>
            </li>
            <div v-if="showGiftClubMenu" class="gift-club-menu">
              <ul>
                <li>Hediye Kartı Kullan</li>
                <li>Hediye Kartı Bakiye Sorgulama</li>
                <li>Hediye Kartı Yükle</li>
              </ul>
            </div>
            <li>Yardım</li>
          </ul>
        </div>
      </div>

      <div class="right-section">
        <!-- Favoriler -->
        <div class="favorites-section">
          <h1>Favorilerim</h1>
          <div class="search-bar">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Favorilerimde Ara"
            />
            <!-- Sıralama seçeneği eklendi -->
            <select v-model="sortOrder" class="sort-select">
              <option value="asc">Fiyat: Düşükten Yükseğe</option>
              <option value="desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
          <div class="favorites-list">
            <div
                v-for="(item, index) in sortedFavorites"
                :key="index"
                class="favorite-item"
            >
              <img :src="item.image" alt="" class="item-image" />
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-price">{{ item.price }} TL</p>
              <p class="cart-price">Sepette: {{ item.cartPrice }} TL</p>
              <button @click="toggleFavorite(item)" class="heart-button">
                <span v-if="item.isFavorite">♥</span>
                <span v-if="!item.isFavorite">♡</span>
              </button>
              <button @click="addToCart(item)" class="add-to-cart-button">
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div v-for="product in products" :key="product.id" class="product-card">
      <img :src="product.image" alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} TL</p>
      <p v-if="product.discountPrice">Sepette: {{ product.discountPrice }} TL</p>
      <button @click="addToCart(product)" class="add-to-cart">Sepete Ekle</button>
      <button @click="removeFromCart(product.id)" class="remove-from-cart">Sepetten Çıkar</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";




export default {
  data() {
    return {
      searchQuery: "",
      sortOrder: ref('asc'),
      favorites: [
        {
          id: 1,
          name: "Viking Vandals Regular Fit Kapüşonlu Sweatshirt",
          price: 799.99,
          cartPrice: 400.0,
          image: "/images/ilkfavori.png",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Defacto Fit Standart Fit Sporcu Jogger Eşofman Altı",
          price: 699.99,
          cartPrice: 200.0,
          image: "/images/ikincifavori.png",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Regular Fit Jogger Eşofman Altı",
          price: 599.99,
          cartPrice: 189.99,
          image: "/images/üçüncüfavori.png",
          isFavorite: true,
        },
        {
          id: 4,
          name: "Relax Fit Dik Yaka Fermuarlı Sweatshirt",
          price: 699.99,
          cartPrice: 251.99,
          image: "/images/dördüncüfavori.png",
          isFavorite: true,
        },
      ],
      showGiftClubMenu: false,
    };
  },
  computed: {
    sortedFavorites() {
      // Önce arama filtresini uygula
      const filtered = this.favorites.filter((item) =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // Sonra sıralama yap
      return filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.toString().replace('TL', '').replace(',', '.'));
        const priceB = parseFloat(b.price.toString().replace('TL', '').replace(',', '.'));

        if (this.sortOrder === 'asc') {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
    }
  },
  methods: {
    toggleFavorite(item) {
      item.isFavorite = !item.isFavorite;
    },
    toggleGiftClubMenu() {
      this.showGiftClubMenu = !this.showGiftClubMenu;
    },
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
      alert(`${product.name} sepete eklendi!`);
    }
  },
};
// Sepete ürün ekleme fonksiyonu
const addToCart = () => {
  cartStore.addToCart(item);
};
</script>

<style scoped>
/* Mevcut stiller korundu */
.collections-page {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.container {
  display: flex;
  width: 100%;
}

.left-section {
  flex: 1;
  margin-right: 20px;
}

.right-section {
  flex: 4;
}

/* Yeni sıralama seçeneği için stil eklendi */
.sort-select {
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

/* Diğer stiller aynı kaldı */
.account-info {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.account-info h2 {
  font-size: 18px;
  margin-bottom: 15px;
}

.account-info ul {
  list-style: none;
  padding: 0;
}

.account-info ul li {
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.account-info ul li:hover {
  color: #007bff;
}

.favorites-section {
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.favorites-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.favorite-item {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 4px;
}

.item-name {
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

.item-price {
  font-size: 16px;
  font-weight: bold;
  color: #555;
}

.cart-price {
  font-size: 14px;
  color: #d9534f;
  margin-bottom: 10px;
}

.heart-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #d9534f;
}

.heart-button:hover {
  color: #c9302c;
}

.add-to-cart-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.add-to-cart-button:hover {
  background-color: #218838;
}
</style>