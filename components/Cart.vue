<template>
  <div class="cart-container">
    <h1>Sepetim (1 Ürün)</h1>
    <div class="cart-layout">
      <!-- Ürün Bilgileri -->
      <div class="cart-item">
        <img
          src="/images/dördüncüfavori.png"
          alt="Ürün Resmi"
          class="product-image"
        />
        <div class="product-details">
          <h2>Relax Fit Dik Yaka Fermuarlı Sweatshirt</h2>
          <p class="price">
            <span class="original-price">699,99 TL</span> <br />
            Sepette: <span class="discounted-price">251,99 TL</span>
          </p>
          <p>Seçim: Siyah - Beden L</p>
          <button class="edit-btn" @click="editItem">Düzenle</button>
        </div>
        <div class="item-actions">
          <button class="delete-btn" @click="deleteItem">Sil</button>
          <div class="quantity-control">
            <span>Adet:</span>
            <input type="number" min="1" value="1" class="quantity-input" />
          </div>
        </div>
      </div>

      <!-- Ödeme Özeti -->
      <div class="summary">
        <div class="summary-line">
          <span>Ödenecek Tutar</span>
          <span class="total-price">849,98 TL</span>
        </div>
        <button class="checkout-btn" @click="completePurchase">
          ALIŞVERİŞİ TAMAMLA
        </button>
        <div class="extra-options">
          <label>
            <input type="checkbox" /> Özel Hediye Paketi İstiyorum (14,99 TL)
          </label>
          <button class="discount-btn" @click="applyDiscountCode">
            İndirim Kodu Kullan
          </button>
          <button class="gift-card-btn" @click="useGiftCard">
            DeFacto Hediye Kartı
          </button>
        </div>
        <div class="payment-options">
          <span>Şimdi Al Sonra Öde</span>
          <div class="logos">
            <img src="/images/zıp.jpg" alt="Zip Logo" />
            <img src="/images/hı.jpg" alt="H Logo" />
            <img src="/images/paycell.jpg" alt="Paycell Logo" />
          </div>
        </div>
        <!-- Yatay Düzende Teslimat Seçenekleri -->
        <div class="delivery-options-horizontal">
          <span>Mağazadan teslim al</span>
          <span class="divider">|</span>
          <span>Kapıda öde</span>
          <span class="divider">|</span>
          <span>Ücretsiz iade</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Pinia store'u kullan


// Store'dan getter'lara ve state'e erişim
const cartItems = computed(() => cartStore.cartItems); // Sepet ürünlerini alır
const totalPrice = computed(() => cartStore.totalPrice); // Toplam fiyatı alır

// Sepetten ürün kaldırma fonksiyonu
const removeFromCart = () => {
  cartStore.removeFromCart(index);
};

export default {
  name: "Cart",
  methods: {
    editItem() {
      alert("Ürün düzenleme işlemi henüz eklenmedi.");
    },

    applyDiscountCode() {
      alert("İndirim kodu kullanma işlemi henüz eklenmedi.");
    },
    useGiftCard() {
      alert("Hediye kartı kullanma işlemi henüz eklenmedi.");
    },
  },
};
</script>

<style scoped>
/* Stil kodları burada */
.cart-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 20px;
}

h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.cart-layout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cart-item {
  display: flex;
  border: 1px solid #ddd;
  padding: 15px;
  width: 60%;
}

.product-image {
  width: 100px;
  height: 150px;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.product-details h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.price {
  color: #555;
  margin-bottom: 10px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
}

.discounted-price {
  color: #e60000;
  font-weight: bold;
}

.edit-btn,
.delete-btn {
  background: #ddd;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.quantity-control {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-input {
  width: 50px;
  margin-left: 10px;
}

.summary {
  width: 35%;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.checkout-btn {
  background: #000;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
}

.extra-options {
  margin-top: 20px;
}

.extra-options label {
  display: block;
  margin-bottom: 10px;
}

.discount-btn,
.gift-card-btn {
  display: block;
  margin-bottom: 10px;
  background: #f3f1f1;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.payment-options {
  margin-top: 30px;
}

.payment-options .logos img {
  margin-right: 10px;
}

.delivery-options-horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 0.9em;
}

.delivery-options-horizontal .divider {
  margin: 0 10px;
  color: #ffffff;
}
</style>
