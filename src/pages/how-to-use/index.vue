<template>
  <div class="max-w-1366 p-4">
    <h1 class="text-center flex flex-col">
      <span class="text-primary text-sm mb-2"> نحوه کار با بی تی سی گیفت </span>
      <span> شما در سه مرحله می توانید کیف خود را شارژ کنید </span>
    </h1>
    <div v-for="(part, index) in htu.mainRoad" :key="index">
      <img :src="getImageAbsolutePath(part.image)" :alt="part.title" />
      <h2>{{ part.title }}</h2>
      <p>{{ part.description }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { default as htu } from "../../public/content/how-to-use.json";

const glob = import.meta.glob("~/assets/images/how-to-use/*", {
  eager: true,
});

const getImageAbsolutePath = (imageName: string): string => {
  return glob[`/assets/images/how-to-use/${imageName}`]["default"];
};
</script>
<style lang="scss" module="TheHTU">
</style>