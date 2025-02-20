<template>
  <div class="register-container">
    <h1>Giriş Yap</h1>
    <form @submit.prevent="registerUser">
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
        <label for="password">Şifre</label>
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
        successMessage.value = "Başarıyla Giriş Yaptınız!";
        email.value = "";
        password.value = "";
      } catch (error: any) {
        errorMessage.value = error.message || "Bir hata oluştu!";
      }
    };

    return {
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

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
}

input:focus {
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
