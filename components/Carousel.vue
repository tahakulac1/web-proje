<template>
    <div class="carousel">
      <div class="carousel-container">
        <!-- Slider Items -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item"
          :class="{ active: currentIndex === index }"
        >
          <img :src="slide.image" :alt="slide.alt" />
          <div class="carousel-caption">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.subtitle }}</p>
            <div class="discount-code" v-if="slide.code">
              Kod: <span>{{ slide.code }}</span>
            </div>
          </div>
        </div>
        
  
        <!-- Navigation Buttons -->
        <button class="carousel-control prev" @click="prevSlide">
          &lt;
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-control next" @click="nextSlide">
          &gt;
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
  
      <!-- Indicators -->
      <div class="carousel-indicators">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
    data() {
      return {
        currentIndex: 0,
        slides: [
          {
            image: "/images/slide1.jpg", // Görsel URL
            alt: "Slider 1",
            title: "%70'E VARAN İNDİRİM FIRSATLARINA EK",
            subtitle: "1500 TL'ye 250 TL İNDİRİM",
            code: "DCM250",
          },
          {
            image: "/images/slide2.jpg", // Görsel URL
            alt: "Slider 2",
            title: "SEPETTE %50'YE VARAN İNDİRİMLER",
            subtitle: "Aksesuar Koleksiyonunu Keşfet",
          },
          {
            image: "/images/slide3.jpg", // Görsel URL
            alt: "Slider 3",
            title: "İNDİRİME GİREN ÜRÜNLER",
            subtitle: "Hemen tıkla bu fırsatı kaçırma!",
          },
        ],
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex =
          this.currentIndex === 0
            ? this.slides.length - 1
            : this.currentIndex - 1;
      },
      nextSlide() {
        this.currentIndex =
          this.currentIndex === this.slides.length - 1
            ? 0
            : this.currentIndex + 1;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
    },
  };

  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    max-width: 100%; /* Tam genişlik */
    width: 100%; /* Tam genişlik */
    height: 700px; /* Yüksekliği artır */
    margin: auto;
    overflow: hidden;
  }
  .carousel-container {
    display: flex;
    position: relative;
  }
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateX(100%);
    opacity: 0;
  }
  .carousel-item.active {
    transform: translateX(0);
    opacity: 1;
  }
  .carousel img {
    width: 100%; /* Genişliği kapsar */
    height: 100%; /* Slider'ın yüksekliğini doldurur */
    object-fit: cover; /* Görselin kesilmeden doldurulması için */
  }
  .carousel-caption {
    position: absolute;
    bottom: 0; /* Alt boşluk */
    left: 0; /* Sol boşluk */
    width: 100%; /* Tüm satırı kaplar */
    background-color: rgba(77, 77, 77, 0.8); /* Arka plan şeffaflığı */
    padding: 20px; /* İç boşluk */
    border-radius: 0; /* Köşe yuvarlama kaldırıldı */
    font-size: 1.2rem; /* Yazı boyutu */
    color: white; /* Yazı rengi */
    text-align: center; /* Metni ortala */
  }
  
  .discount-code span {
    color: #ff0;
    font-weight: bold;
  }
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.7); /* Daha koyu arka plan */
    border: none;
    color: white;
    font-size: 30px; /* Daha büyük simgeler */
    padding: 15px; /* Daha geniş tıklama alanı */
    cursor: pointer;
  }
  .carousel-control {
    position: absolute;
    top: 300px; /* Statik konumlandırma */
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
    font-size: 30px; /* Yazı boyutu büyük */
    padding: 15px;
    cursor: pointer;
    border-radius: 50%; /* Daire düğme */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-control.prev {
    left: 10px;
  }
  .carousel-control.next {
    right: 10px;
  }
  
  .carousel-indicators {
    display: flex;
    justify-content: center;
    margin-top: 650px;
  }
  .carousel-indicators span {
    width: 12px;
    height: 12px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  .carousel-indicators span.active {
    background-color: #000;
  }
  
  
  </style>
  