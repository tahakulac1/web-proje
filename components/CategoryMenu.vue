<template>
    <div class="category-menu">
      <div 
        class="category-column" 
        v-for="(category, index) in categories" 
        :key="index"
        @mouseenter="showDropdown(index)" 
        @mouseleave="hideDropdown"
      >
        <h3 class="category-title">
          {{ category.title }}
        </h3>
        <ul 
          v-show="activeIndex === index" 
          class="category-items"
        >
          <li 
            v-for="(item, i) in category.items" 
            :key="i"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: -1, // Hangi başlıkta dropdown gösterileceğini takip eder
        hideTimeout: null, // Dropdown kapanma gecikmesi için
        categories: [
          {
            title: 'ÖNE ÇIKANLAR',
            items: ['Yeni Gelenler', 'Çok Satanlar', 'Basic Koleksiyonu', 'Hediye Rehberi'],
          },
          {
            title: 'GİYİM',
            items: [
              'Tüm Ürünler',
              'Sweatshirt',
              'Gömlek',
              'Pantolon',
              'Eşofman Altı',
              'Tişört',
              'Chino Pantolon',
              'Jean Pantolon',
              'Hırka',
              'Kazak',
              'Blazer Ceket',
              'Şort',
              'Keten Koleksiyonu',
              'Polo Tişört',
              'Baskılı Tişört',
              'Bermuda',
              'Atlet',
              'Deniz Şortu',
            ],
          },
          {
            title: 'Ceket ve Mont',
            items: [                       
              'Tüm Ürünler',
              'Kaban-Parka',
              'Mont',
              'Yağmurluk',
              'Şişme Yelek',
              'Yelek',
              'Siyah Mont',
              'Kürklü Mont',
            ],
          },
          {
            title: 'ÖZEL KOLEKSİYONLAR',
            items: [
              'Tüm Ürünler',
              'Jean-Denim Koleksiyonu',
              'Jean-Denim Ceket',
              'Jean-Denim Pantolon',
              'Jean-Denim Gömlek',            
            ],
          },
          {
            title: 'Ev Giyim Ve Pijama',
            items: [
              'Tüm Ürünler',
              'Pijama Takımı',          
              'Pijama Alt',
              'Pijama Üst',
              'Ev Terliği',
              'Ev Giyim',
              'İç Giyim',
              'Boxer',
              'Atlet-Fanila',
            ],
          },
          {
            title: 'Ayakkabılar',
            items: [
              'Tüm Ürünler',
              'Günlük Ve Spor Ayakkabı',
              'Terlik Ve Sandalet',
              'Ev Terliği',
              'Bot',            
            ],
          },
          {
            title: 'Aksesuar',
            items: [
              'Tümünü Göster',
              'Çorap',
              'Atkı Bere Ve Eldiven',
              'Çanta',
              'Parfüm',
              'Kemer',
              'Cüzdan',
              'Şapka',
              'Valiz',
              'Matara Ve Suluk',
              'Güneş Gözlüğü',
              'Havlu',
              'Defter Ve Ajanda',
            ],
          },
        ],
      };
    },
    methods: {
      showDropdown(index) {
        clearTimeout(this.hideTimeout); // Önceki kapanma gecikmesini iptal et
        this.activeIndex = index; // İlgili başlığı aktif yap
      },
      hideDropdown() {
        this.hideTimeout = setTimeout(() => {
          this.activeIndex = -1; // Dropdown'u gizle
        }, 300); // 300ms gecikme
      },
    },
  };
  </script>
  
  <style scoped>
  .category-menu {
    display: flex;
    gap: 20px;
    padding: 20px;
    font-family: Arial, sans-serif;
    position: relative;
    background-color: #f9f9f9;
  }
  .category-column {
    flex: 1;
    position: relative;
  }
  .category-title {
    margin: 0;
    padding: 5px 0;
    font-size: 1rem; /* Daha küçük font boyutu */
    color: #444;
    font-weight: bold;
    cursor: pointer;
    text-align: left;
    border-bottom: 2px solid transparent; /* Başlangıçta alt çizgi görünmez */
    transition: all 0.3s;
  }
  .category-title:hover {
    border-bottom: 2px solid #000; /* Hover olunca alt çizgi görünür */
    color: #222;
  }
  .category-items {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }
  .category-column:hover .category-items {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  .category-items li {
    padding: 8px 15px;
    font-size: 0.9rem;
    color: #555;
    transition: all 0.2s;
  }
  .category-items li:hover {
    background-color: #f0f0f0;
    color: #000;
    cursor: pointer;
  }
  </style>
  