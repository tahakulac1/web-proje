<template>
  <div class="register-container">
    <h1>Üye Ol</h1>
    <form @submit.prevent="registerUser">
      <div class="input-group">
        <label for="firstName">Adınız</label>
        <input
            type="text"
            id="firstName"
            v-model="firstName"
            placeholder="Adınız"
            required
        />
      </div>
      <div class="input-group">
        <label for="lastName">Soyadınız</label>
        <input
            type="text"
            id="lastName"
            v-model="lastName"
            placeholder="Soyadınız"
            required
        />
      </div>
      <div class="input-group">
        <label for="phoneNumber">Telefon Numaranız</label>
        <input
            type="tel"
            id="phoneNumber"
            v-model="phoneNumber"
            placeholder="Telefon Numaranız"
            required
        />
      </div>
      <div class="input-group">
        <label for="gender">Cinsiyetiniz</label>
        <select id="gender" v-model="gender" required>
          <option value="">Seçiniz</option>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
          <option value="other">Diğer</option>
        </select>
      </div>
      <div class="input-group">
        <label for="email">E-Posta</label>
        <input
            type="email"
            id="email"
            v-model="email"
            placeholder="E-Posta Adresiniz"
            required
        />
      </div>

      <div class="input-group">
        <label for="password">Şifre Tekrar</label>
        <input
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="Şifreniz"
            required
        />
        <button type="button" @click="togglePasswordVisibility" class="toggle-password">
          {{ passwordVisible ? "👁" : "👁‍🗨" }}
        </button>
      </div>

      <button type="submit" class="register-btn">Kayıt Ol</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: "Register",
  setup() {
    const firstName = ref<string>(""); // Kullanıcıdan alınan ad
    const lastName = ref<string>(""); // Kullanıcıdan alınan soyad
    const phoneNumber = ref<string>(""); // Kullanıcıdan alınan telefon numarası
    const gender = ref<string>(""); // Kullanıcıdan alınan cinsiyet
    const email = ref<string>(""); // Kullanıcıdan alınan e-posta
    const password = ref<string>(""); // Kullanıcıdan alınan şifre
    const passwordVisible = ref<boolean>(false); // Şifre görünür/gizli
    const errorMessage = ref<string | null>(null); // Hata mesajı
    const successMessage = ref<string | null>(null); // Başarı mesajı

    // Şifre görünürlüğünü değiştirme
    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    // Firebase ile kullanıcıyı kaydetme
    const registerUser = async () => {
      errorMessage.value = null;
      successMessage.value = null;
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        successMessage.value = "Başarıyla kayıt oldunuz!";
        firstName.value = "";
        lastName.value = "";
        phoneNumber.value = "";
        gender.value = "";
        email.value = "";
        password.value = "";
      } catch (error: any) {
        errorMessage.value = error.message || "Bir hata oluştu!";
      }
    };

    return {
      firstName,
      lastName,
      phoneNumber,
      gender,
      email,
      password,
      passwordVisible,
      togglePasswordVisibility,
      registerUser,
      errorMessage,
      successMessage,
    };
  },
});
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
}

input:focus, select:focus {
  border-color: #000;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

.toggle-password {
  background: none;
  border: none;
  font-size: 1rem;
  margin-top: 10px;
  cursor: pointer;
  color: #000;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 10px;
}
</style>
