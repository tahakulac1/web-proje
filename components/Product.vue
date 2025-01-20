<template>
  <section class="product">
    <div class="container">
      <h1 class="title">Popüler Kategoriler</h1>

      <div class="categories">
        <button class="category">Erkek Tüişört</button>
        <button class="category">Polo Yaka Tüişört</button>
        <button class="category">Kargo Pantolon</button>
        <button class="category">Pantolon</button>
        <button class="category">Ceket</button>
        <button class="category">Mevsimlik Dış Giyim</button>
      </div>

      <div class="content">
        <section>
          <h1>Erkek Giyim & Ayakkabı & Aksesuar</h1>
          <p><!-- Bu alana metin gelecek --></p>
          <p></p>

          <h2>Erkek Bahar Kombinleri</h2>
          <p><!-- Bu alana metin gelecek --></p>

          <h2>Erkek Kombin Yaz Modası</h2>
          <p><!-- Bu alana metin gelecek --></p>



          <h2>Erkek Sonbahar Kombinleri</h2>
          <p><!-- Bu alana metin gelecek --></p>



          <h2>Erkek Kış Kombini</h2>
          <p><!-- Bu alana metin gelecek --></p>



          <h2>Erkek Sokak Modası</h2>
          <p><!-- Bu alana metin gelecek --></p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Burada gerekirse TypeScript kodlarınızı yazabilirsiniz.
</script>

<style scoped>
.product {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.categories {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.category {
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background 0.3s;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  flex: 1;
}

.category:hover {
  background: #e0e0e0;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  color: #333;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 0.5rem;
}

.content section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content h2, .content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.content p {
  font-size: 0.875rem;
  line-height: 1.6;

}
</style>
