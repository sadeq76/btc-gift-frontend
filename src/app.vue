<template>
  <div class="main flex flex-col justify-center items-center">
    <NuxtLayout />
    <NuxtLoadingIndicator color="orange" />
    <NuxtPage />
    <transition
      enter-active-class="animate-zoom-in"
      leave-active-class="animate-zoom-out"
    >
      <LoginModal v-if="modalIsOpen"
    /></transition>
    <transition
      enter-active-class="animate-zoom-in"
      leave-active-class="animate-zoom-out"
    >
      <BaseSnackbar v-if="snackbarIsOpen" />
    </transition>
  </div>
</template>

<script setup lang="ts">
//fetch
import { useGetProfile } from "@/api/profile";

import { useAuth } from "@/composable/states/auth";
import { useSnackbar, useModal } from "@/composable/states/snackbar";
const modalIsOpen = useModal();
const snackbarIsOpen = useSnackbar();
const isLogin = useAuth();

if (
  process.client &&
  !("theme" in localStorage) &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-mode", "dark");
}
if (process.client && "theme" in localStorage) {
  document.documentElement.setAttribute("data-mode", localStorage.theme);
}

onMounted(() => {
  !localStorage.profile && useAuth().value
    ? useGetProfile().then((response) => console.log(response))
    : undefined;
});
</script>

<style lang="scss" scoped>
.main {
  margin-top: 56px;
}
</style>