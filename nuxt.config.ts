// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { apiBase } from "./src/config/develop";

export default defineNuxtConfig({
  ssr: false,

  srcDir: "src/",

  app: {
    buildAssetsDir: "btc-gift/",
    head: {
      title: "BTC-Gift",
      htmlAttrs: { dir: "rtl", lang: "fa" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "/stickybits.min.js",
          body: true,
        },
      ],
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

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
