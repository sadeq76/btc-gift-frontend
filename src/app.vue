<template>
  <div>
    <NuxtLayout />
    <NuxtLoadingIndicator color="orange" />
    <div class="main flex flex-col items-center w-full overflow-x-hidden">
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
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "./composable/auth";
import { useSnackbar, useModal } from "./composable/state";
const modalIsOpen = useModal();
const snackbarIsOpen = useSnackbar();
const isLogin = useAuth();

// if (
//   !("theme" in localStorage) &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   document.documentElement.setAttribute("data-mode", "dark");
// }
// if ("theme" in localStorage) {
//   document.documentElement.setAttribute("data-mode", localStorage.theme);
// }
</script>

<style lang="scss" scoped>
.main {
  margin-top: 56px;
}
</style>