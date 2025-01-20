import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-02",
  modules: ['@pinia/nuxt'],
  typescript: {
    strict: true, // TypeScript desteği için kesin mod
  },
  plugins: ['/main.ts'],
  plugins: [{ src: '~/plugins/firebase.ts', mode: 'client' }],
  typescript: {
    strict: true, // Tür denetimini etkinleştirir
    shim: false, // Nuxt'un tür tanımlama eksikliklerini kapatması için
  },

  app: {
    head: {
      title: "Defacto",
    },
    pages: [
      '/Login',
      '/Collections',
      '/Cart'
    ]
  },
})