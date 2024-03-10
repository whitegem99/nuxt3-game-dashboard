// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      SENTRY_DSN: process.env.NUXT_PUBLIC_SENTRY_DSN,
      DIRECTUS_URL: process.env.NUXT_PUBLIC_DIRECTUS_URL,
    },
    directus: {
      url: process.env.NUXT_PUBLIC_DIRECTUS_URL,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "mixpanel-nuxt",
    "nuxt-gtag",
    "nuxt-directus",
  ],
  css: ["assets/css/custom.css"],
  plugins: [{ src: "~/plugins/click-out.directive.client", mode: "all" }],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  mixpanel: {
    token: process.env.NUXT_PUBLIC_MIXPANEL_TOKEN,
    disabled: false,
    config: {
      // Mixpanel config
    },
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },
});
