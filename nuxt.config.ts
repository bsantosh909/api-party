// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //
  srcDir: "src",
  //
  css: ["@/assets/styles/index.css"],
  //
  head: {
    metaInfo: {
      link: [{ rel: "favicon", href: "favicon.ico" }],
    },
  },
  // Modules
  modules: [
    // https://motion.vueuse.org/
    "@vueuse/motion/nuxt",
    // https://content.nuxtjs.org/
    "@nuxt/content",
    // https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
    // https://v1.image.nuxtjs.org/
    "@nuxt/image-edge",
    // https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",
  ],
  // Nuxt color-mode options
  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
});
