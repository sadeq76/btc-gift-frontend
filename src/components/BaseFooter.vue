<template>
  <footer
    class="
      p-4
      w-full
      bg-text
      text-background
      flex flex-wrap
      justify-between
      items-center
    "
  >
    <div class="flex flex-col items-start max-md:w-full max-md:items-center">
      <h2>لینک ها</h2>
      <NuxtLink
        v-for="(page, index) in pages"
        :key="index"
        class="mt-4 opacity-50"
        :to="page.path"
        >{{ page.title }}</NuxtLink
      >
    </div>
    <div
      class="
        flex flex-col
        items-start
        max-md:w-full max-md:items-center max-md:mt-4
      "
    >
      <h2>تماس با ما</h2>
      <a dir="ltr" class="mt-4 opacity-50" href="tel:+9393557744"
        >+ 93 93 55 77 44</a
      >
      <a
        dir="ltr"
        class="mt-4 opacity-50"
        href="mailto:sadeqshahmoradi76@gmail.com"
        >sadeqshahmoradi76@gmail.com</a
      >
      <address class="flex opacity-50 mt-4 max-md:m-4">
        <h3 class="ml-2">آدرس:</h3>
        <p>یجایی دور خیلی دور دور تر از آنکه تو بدانی یا بتوانی بخواهی</p>
      </address>
    </div>

    <div class="flex max-md:hidden">
      <h2 class="ml-2">ما را دنبال کنید:</h2>
      <span
        v-for="(socialAccount, index) in socialAccounts"
        :key="index"
        :class="`icon-${socialAccount.name} text-primary`"
      ></span>
    </div>
    <hr class="w-full bg-background mt-8" />
    <div
      class="w-full flex justify-between max-md:flex-col max-md:items-center"
    >
      <p class="text-center font-thin mt-4">
        کلیه حقوق این سایت نزد بی تی سی گیفت محفوظ بوده و تنها کپی با ذکر منبع
        بلامانع است
      </p>
      <p class="mt-4">
        <strong
          >powered by
          <a class="text-primary" href="http://alirn.ir/" target="_blank"
            >Ali.Rn</a
          ></strong
        >
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import pageModel from "../models/page.model";

const pages = reactive<pageModel[]>([
  { title: "خانه", path: "/" },
  { title: "بلاگ ها", path: "/blog/list" },
  { title: "سوالات متداول", path: "/faq" },
]);
const socialAccounts = [
  {
    name: "telegram",
    path: "",
  },
  {
    name: "insta",
    path: "",
  },
  {
    name: "whatsapp",
    path: "",
  },
  {
    name: "facebook",
    path: "",
  },
];
</script>