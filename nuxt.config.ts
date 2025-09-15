// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  css: ['~/assets/css/github-markdown.css','~/assets/css/main.css'],
   app: {
    head: {
      title: '图灵和铁生', // 默认备用标题
      htmlAttrs: {
        lang: 'zh',
      },
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css' },{rel: 'stylesheet',href:'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'}]
    }
  },
  //  router: {
  //   options: {
  //     hashMode: true
  //   }
  // },
   ssr:false
});