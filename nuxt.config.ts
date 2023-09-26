// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
    "nuxt-icon",
  ],
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  image: {
    domains: ["rickandmortyapi.com"],
  },
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/chess-knight.svg"}],
    },
  },
});
