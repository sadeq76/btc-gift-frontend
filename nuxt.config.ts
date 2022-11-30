// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  app: {
    buildAssetsDir: "btc-gift/",
    head: {
      title: "BTC-Gift",
      htmlAttrs: { dir: "rtl", lang: "fa", "data-mode": "light" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      noscript: [
        {
          children:
            "For full functionality of this site it is necessary to enable JavaScript.<br > Here are the <a href='https://www.enable-javascript.com/'>instructions how to enable JavaScript in your web browser</a>.",
          body: true,
        },
      ],
    },
  },
  css: ["@/assets/styles/main.scss"],

  runtimeConfig: {
    public: {
      apiBase: "www.api.btcgift.shop",
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  nitro: { prerender: { routes: ["/"] } },
});
