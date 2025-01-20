<template>
  <header class="header">
    <!-- Üst Bar -->
    <div class="top-bar">
      <div class="top-bar-right">

      </div>
      <div class="top-bar-right">
        <a href="#" @click.prevent="$emit('toggle-help-modal')">Yardım</a> |
        <a href="#">İletişim</a>
        <span>Türkiye</span> |
        <span>TL</span> |
        <span>Türkçe</span>
      </div>
    </div>
    <div class="container">
      <!-- Logo Resmi -->
      <div class="logo">
        <img src="/logo.png" alt="DeFacto Logo" />
      </div>

      <!-- Menü -->
      <nav class="menu">
        <ul>
          <li>KADIN</li>
          <li>ERKEK</li>
          <li>ÇOCUK & BEBEK</li>
        </ul>
      </nav>

      <!-- Arama Çubuğu -->
      <div class="search-bar">
        <input type="text" placeholder="Ürün, kategori ya da marka ara" />
      </div>

      <!-- Sağ Bölüm -->
      <div class="right-section">
        <a href="#" class="nav-link" @click.prevent="$emit('toggle-login-modal')">Giriş Yap</a>
        <a href="#" class="nav-link" @click.prevent="$emit('toggle-register-modal')">Üye Ol</a>
        <a href="#" class="nav-link" @click.prevent="$emit('toggle-collections-modal')">Favorilerim</a>
        <a href="#" class="nav-link" @click.prevent="$emit('toggle-cart-modal')">Sepetim</a>

      </div>
    </div>
    <!-- Alt Çizgi -->
    <div class="bottom-line"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Genel Header */
.header {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 0.5rem;
}

/* Top Bar */
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-size: 0.75rem; /* Küçük font boyutu */
  background-color: #f7f7f7; /* Hafif gri arka plan */
  border-bottom: 1px solid #ddd; /* İnce alt çizgi */
}

.top-bar a {
  text-decoration: none;
  color: #555;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
}

.top-bar a:hover {
  color: #ff0000; /* Hover için kırmızı renk */
}

.top-bar-right span {
  margin: 0 0.5rem;
  color: #555;
}

/* Container */
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo img {
  height: 50px;
  width: auto;
}

/* Menü */
.menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  margin-left: 1.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease, font-weight 0.3s ease;
}

.menu li:hover {
  color: #000000;
  font-weight: bold;
}

.menu li::after {
  content: '';
  display: block;
  height: 3px;
  background-color: #000000;
  width: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease;
}

.menu li:hover::after {
  width: 100%;
}

/* Arama Çubuğu */
.search-bar {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-bar input {
  padding: 0.5rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Sağ Bölüm */
.right-section {
  display: flex;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  display: block;
  height: 2px;
  background-color: #000000;
  width: 0;
  position: absolute;
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #535252;
}

.nav-link:hover::after {
  width: 100%;
}

/* Alt Çizgi */
.bottom-line {
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: 1.5rem;
}
</style>

