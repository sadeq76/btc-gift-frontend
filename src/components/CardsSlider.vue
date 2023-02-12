<script lang="ts" setup>
import { getAssets } from "~~/src/composable/helpers/files";

const images = ["silver", "gold", "diamond", "black", "bronze"];
</script>

<template>
  <div class="w-full overflow-hidden flex justify-center items-center">
    <div class="w-fit flex justify-center items-center">
      <div v-for="image in images" :key="image" :class="cardsSlider.container">
        <img
          :src="getAssets(`images/cards/${image}.png`)"
          :alt="image + ' card'"
          class="w-100"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="cardsSlider">
.container {
  transform-style: preserve-3d;
  width: 70vmin;
  @media (min-width: theme("screens.md")) {
    width: 40vmin;
  }
}

.container {
  &:nth-child(1) {
    transform: scale(0.8);
  }
  &:nth-child(2) {
    transform: scale(0.8);
  }
  &:nth-child(4) {
    transform: scale(0.8);
  }
  &:nth-child(5) {
    transform: scale(0.8);
  }
}
</style>
