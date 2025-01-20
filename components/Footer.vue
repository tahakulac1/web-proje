<template>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      rel="stylesheet"
    />
    
      <footer class="footer">
        <div class="footer-bottom">
          <div class="info-item">
            <p><i class="fas fa-store"></i> Mağazadan Teslim Al </p>
            <p>300 TL üzeri Kargo Bedava</p>
          </div>
          <div class="info-item">
            <p></p>
            <p ><i class="fas fa-hand-holding-usd"></i> Kapıda ödeme </p>
            <p>Hizmet bedeli sadece 19,99 TL</p>
          </div>
          <div class="info-item">
            <p><i class="fas fa-exchange-alt"></i> Mağazada Değişim & İade </p>
            <p>Online al, mağazada değiştir</p>
          </div>
          <div class="info-item">
            <p><i class="fas fa-undo"></i> Ücretsiz iade </p>
            <p>30 gün içerisinde iade et</p>
          </div>
          <div class="info-item">
            <p><i class="fas fa-gift"></i> DeFacto Gift Club </p>
            <p>Ayrıcalıklarla Yenilen, Eğlen, Devam Et!</p>
          </div>
        </div>
        <div class="footer-top">
          <div class="footer-item">
            <div>
              <h4>DeFacto</h4>
              <ul>
                <li><a href="#">Kurumsal</a></li>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">İnsan Kaynakları</a></li>
                <li><a href="#">Kurumsal Satış</a></li>
                <li><a href="#">Toptan Satış (Wholesale Partner)</a></li>
                <li><a href="#">DeFacto Teknoloji</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">DeFacto Blog</a> <span class="new-badge">YENİ</span></li>
              </ul>
            </div>
          </div>
          <div class="footer-item">
            <div>
              <h4>Yardım</h4>
              <ul>
                <li><a href="#">Sıkça Sorulan Sorular</a></li>
                <li><a href="#">Siparişimi Nasıl Takip Ederim?</a></li>
                <li><a href="#">Nasıl İade Ederim?</a></li>
                <li><a href="#">Yenilikler</a></li>
                <li><a href="#">Gift Club Sıkça Sorulan Sorular</a></li>
                <li><a href="#">İşlem Rehberi</a></li>
                <li><a href="#">Kampanyalar</a></li>
                <li><a href="#">Kişisel Verilerin Korunması ve Gizlilik</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-item">
            <div>
              <h4>Bize Ulaşın</h4>
              <ul>
                <li><a href="#">Mağazalarımız</a></li>
                <li><a href="#">İletişim Formu</a></li>
                <br>
                <li> <strong>Müşteri Hizmetleri</strong> </li>
                <li>  
                <strong>0850 333 22 86</strong></li>
                <li><strong>Stil Danışmanı</strong> </li>
                <li><strong>0539 724 24 32</strong></li>
              </ul>
            </div>
          </div>
          <div class="footer-item">
            <div>
              <h4>Takip Edin</h4>
              <div class="social-icons">
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </template>
    
    <script>
    export default {
      name: "Footer",
    };
    </script>
    
    <style scoped>
    .footer {
      background-color: #f9f9f9;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    .footer-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    
    .footer-item h4 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    
    .footer-item ul {
      list-style-type: none;
      padding: 0;
    }
    
    .footer-item ul li {
      margin: 5px 0;
    }
    
    .footer-item ul li a {
      text-decoration: none;
      color: #000;
      font-size: 14px;
    }
    
    .new-badge {
      color: white; /* Yazı rengi beyaz */
      background-color: black; /* Arka plan rengi siyah */
      font-weight: bold;
      font-size: 10px;
      padding: 2px 6px; /* Daha okunabilir bir görünüm için iç boşluk */
      border-radius: 4px; /* Köşeleri yuvarlama */
      display: inline-block; /* Görünümün düzgün olması için satır içi blok */
    }
    
    
    .social-icons a {
        margin-right: 10px; /* İkonlar arasında boşluk bırakır */
        text-decoration: none; /* Alt çizgi kaldırılır */
        color: black; /* Varsayılan ikon rengi */
        font-size: 24px; /* İkon boyutunu ayarlar */
        transition: color 0.3s; /* Geçiş efekti */
      }
      
      .social-icons a:hover {
        color: #00ff6a; /* Üzerine gelindiğinde ikonun rengini değiştirir */
      }
    
    .footer-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border-top: 1px solid #ddd;
      padding-top: 10px;
    }
    
    .info-item {
      margin: 5px 0;
      font-size: 14px;
    }
    
    .info-item i {
      margin-right: 5px;
    }
    
    .font-size f {
      font-size: 10px;
    }
    </style>
    
    
      