// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/vendors/_variables.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],

  runtimeConfig: {
    public: {
      apiBaseUrl: "",
    },
  },

  // translator
  i18n: {
    locales: [
      {
        code: "es",
        file: "es.ts",
        name: "Español",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "es",
  },
});
