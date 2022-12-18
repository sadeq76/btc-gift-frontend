<template>
  <div>
    <NuxtLayout />
    <NuxtLoadingIndicator color="orange" />
    <div class="main flex flex-col items-center w-full overflow-x-hidden">
      <NuxtPage />
      <LoginModal />
    </div>
  </div>
</template>

<script setup lang="ts">
if (
  !("theme" in localStorage) &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-mode", "dark");
}
if ("theme" in localStorage) {
  document.documentElement.setAttribute("data-mode", localStorage.theme);
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 56px;
}
</style>