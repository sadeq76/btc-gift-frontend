<template>
  <NuxtLayout />
  <NuxtLoadingIndicator color="orange" />
  <div class="main flex flex-col items-center w-full overflow-x-hidden">
    <NuxtPage />
    <LoginModal />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  if (
    !("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-mode", "dark");
  }
});
</script>

<style lang="scss" scoped>
.main {
  margin-top: 56px;
}
</style>