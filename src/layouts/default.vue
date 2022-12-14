<template>
  <div class="w-full">
    <nav
      :class="[
        TheLayout.navbar,
        'fixed top-0 z-20 px-4 py-2 bg-white dark:bg-test shadow w-full flex justify-between',
      ]"
    >
      <a class="h-full flex items-center md:basis-1/6" href="/" target="_self">
        <img class="h-full" src="../assets/images/logo.png" alt="btc-gift" />
        <span class="pr-4 truncate">بی تی سی گیفت</span>
      </a>

      <div class="flex items-center max-md:hidden">
        <NuxtLink
          class="mx-4"
          v-for="(page, index) in pages"
          :key="index"
          :to="page.path"
        >
          {{ page.title }}
        </NuxtLink>
      </div>

      <div
        class="
          overflow-hidden
          flex
          justify-end
          items-center
          md:basis-1/6
          max-md:hidden
        "
      >
        <span
          @click="changeMode"
          :class="`ml-8 icon-${
            modes.get(!darkMode) == 'dark' ? 'moon' : 'sun'
          } text-primary cursor-pointer`"
        ></span>
        <span
          @click="profile"
          :class="`icon-${
            isLogin ? 'list' : 'account'
          } text-primary ml-4 cursor-pointer`"
        ></span>
        <button
          @click="goToOrderPage"
          class="h-full primary-button whitespace-nowrap"
        >
          ثبت سفارش
        </button>
      </div>
      <button @click="toggleMenu" class="icon-button md:hidden">
        <span class="icon-menu"></span>
      </button>
    </nav>
    <transition
      enter-active-class="animate-move-in"
      leave-active-class="animate-move-out"
    >
      <div
        v-if="isOpen"
        class="
          fixed
          z-20
          left-0
          right-0
          top-0
          bottom-0
          bg-background
          flex
          justify-center
          items-center
        "
      >
        <button @click="toggleMenu" class="icon-button absolute left-4 top-4">
          <span class="icon-angle-left"></span>
        </button>
        <button @click="changeMode" class="icon-button absolute right-4 top-4">
          <span
            :class="`icon-${modes.get(!darkMode) == 'dark' ? 'moon' : 'sun'}`"
          ></span>
        </button>
        <ul class="flex flex-col justify-center items-center">
          <li
            @click="toggleMenu"
            v-for="(page, index) in pages"
            :key="index"
            class="my-4"
          >
            <NuxtLink :to="page.path">{{ page.title }}</NuxtLink>
          </li>
          <li
            @click="profile"
            class="my-4 text-base cursor-pointer font-medium"
          >
            {{ isLogin ? "لیست سفارشات" : "ورود" }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAuth } from "../composable/auth";
import { useModal } from "../composable/state";
import pageModel from "../models/page.model";

const router = useRouter();

const isOpen = ref<boolean>(false);

onMounted(() => {
  darkMode.value =
    document.documentElement.getAttribute("data-mode") === "dark"
      ? true
      : false;
});

const pages = reactive<pageModel[]>([
  { title: "خانه", path: "/" },
  { title: "نحوه استفاده", path: "/how-to-use" },
  { title: "سوالات متداول", path: "/faq" },
]);

let darkMode = ref<boolean>(true);
const modes = new Map();
modes.set(false, "light");
modes.set(true, "dark");

const changeMode = function () {
  darkMode.value = !darkMode.value;
  localStorage.theme = modes.get(darkMode.value);
  if (localStorage.theme === "dark") {
    document.documentElement.setAttribute("data-mode", "dark");
  } else {
    document.documentElement.setAttribute("data-mode", "light");
  }
};

const toggleMenu = function () {
  isOpen.value = !isOpen.value;
};

const isLogin = useAuth();
const profile = function () {
  if (isLogin.value) {
    router.push("/order/list");
  } else {
    useModal().value = true;
  }
  isOpen.value = false;
};

const goToOrderPage = function () {
  router.push("order/create/unknown");
};
</script>

<style lang="scss" module="TheLayout">
.navbar {
  height: 56px;
  overflow: hidden;
}
</style>