<template>
    <div class="help-page">
      <!-- Sol Menü -->
      <div class="help-sidebar">
        <h2>Yardım</h2>
        <ul>
          <li>Popüler Sorular</li>
          <li>İşlem Rehberi</li>
          <li>Yeni Üyelik</li>
          <li>Kolay İade ve Değişim İşlemleri</li>
          <li>Ödeme Seçenekleri</li>
          <li>Kargo ve Teslimat</li>
          <li>Mağazadan Teslim Al</li>
          <li>Kapıda Ödeme</li>
          <li>Sipariş Takip</li>
          <li>İndirim ve Kupon Kodları</li>
          <li>Ürün Bakımı</li>
          <li>Kişisel Verilerin Korunması ve Gizlilik</li>
          <li>Kurumsal Satış</li>
          <li>Beden Rehberi</li>
        </ul>
      </div>
  
      <!-- İçerik -->
      <div class="help-content">
        <!-- Mağazadan Teslim Al -->
        <section>
          <h3>Mağazadan Teslim Al</h3>
          <div class="info-cards">
            <div class="card" @click="handleCardClick('store-select')">
              <img src="/images/yardim.jpg" alt="Store Icon" />
              <p>Teslimat bilgilerinde Mağazadan Teslim Al'ı tıkla ve teslim almak istediğin mağazayı seç.</p>
            </div>
            <div class="card" @click="handleCardClick('free-shipping')">
              <img src="/images/yardim2.jpg" alt="Free Shipping Icon" />
              <p>Mağazadan teslim alınan siparişlerde kargo 19,99 TL'dir. 300 TL üzeri kargo bedava!</p>
            </div>
            <div class="card" @click="handleCardClick('sms-code')">
              <img src="/images/yardim3.jpg" alt="SMS Icon" />
              <p>Siparişin mağazaya teslim edildiğinde SMS ile kod göndereceğiz.</p>
            </div>
            <div class="card" @click="handleCardClick('store-delivery')">
              <img src="/images/yardim4.jpg" alt="Store Delivery Icon" />
              <p>Siparişini teslim almak için kasada SMS ile ilettiğimiz kodu paylaşman yeterlidir.</p>
            </div>
          </div>
        </section>
        
  
        <!-- Sipariş Takip -->
        <section>
          <h3>Sipariş Takip</h3>
          <div class="info-cards">
            <div class="card" @click="handleCardClick('my-orders')">
              <img src="/images/yardim5.jpg" alt="My Orders Icon" />
              <p>Hesabım’dan Siparişlerim bölümüne tıkla.</p>
            </div>
            <div class="card" @click="handleCardClick('order-details')">
              <img src="/images/yardim6.jpg" alt="Details Icon" />
              <p>Sipariş Detayına Gir.</p>
            </div>
            <div class="card" @click="handleCardClick('where-is-my-cargo')">
              <img src="/images/yardim7.jpg" alt="Tracking Icon" />
              <p>Kargom Nerede butonundan siparişini takip edebilirsin.</p>
            </div>
            <div class="card" @click="handleCardClick('notifications')">
              <img src="/images/yardim8.jpg" alt="SMS Email Icon" />
              <p>Ayrıca her süreçte SMS ve email ile bilgilendirme yapacağız.</p>
            </div>
          </div>
        </section>
  
        <section>
          <h3>KOLAY İADE VE DEĞİŞİM İŞLEMLERİ</h3>
          <div class="info-cards">
            <div class="card" @click="handleCardClick('my-orders')">
              <img src="/images/yardim9.jpg" alt="My Orders Icon" />
              <p>Sipariş detay sayfasından iade talebini tıkla</p>
            </div>
            <div class="card" @click="handleCardClick('order-details')">
              <img src="/images/yardim10.jpg" alt="Details Icon" />
              <p>İade etmek istediğin ürünü ve iade nedenini seç iade kodunu not al.</p>
            </div>
            <div class="card" @click="handleCardClick('where-is-my-cargo')">
              <img src="/images/yardim11.jpg" alt="Tracking Icon" />
              <p>Ürünlerini paketle ve iade kodu ile PTT Kargo’ya ücretsiz iade et.</p>
            </div>
            <div class="card" @click="handleCardClick('notifications')">
              <img src="/images/yardim12.jpg" alt="SMS Email Icon" />
              <p>İaden tamamlandığında SMS ve mail ile bilgilendirme yapılacaktır.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HelpPage",
    methods: {
      handleCardClick(action) {
        alert(`Kart tıklandı: ${action}`);
        // Burada yönlendirme veya başka bir işlem yapılabilir
      },
    },
  };
  </script>
  
  <style scoped>
  .help-page {
    display: flex;
    padding: 20px;
    gap: 20px;
  }
  
  .help-sidebar {
    flex: 1;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .help-sidebar h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .help-sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .help-sidebar ul li {
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .help-sidebar ul li:hover {
    color: #ff0000;
  }
  
  .help-content {
    flex: 6;
    background: #f8f9fa;
  }
  
  section {
    margin-bottom: 40px;
  }
  
  section h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .info-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10x; /* Aralıkları daha küçük yaptık */
  }
  
  .card {
    flex: 1 1 calc(20% - 10px); /* Daha küçük kareler için yüzdeyi düşürdük */
    aspect-ratio: 4; /* Kare boyutu korunur */
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px; /* İç boşluk küçültüldü */
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  .card img {
    width: 100px; /* Görseller küçültüldü */
    height: 100px;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 15px; /* Yazı boyutu küçültüldü */
    color: #666;
  }
  
  </style>
  