<script lang="ts" setup>
import { getAssets } from "~~/src/composable/helpers/files";

const images = reactive<{ title: string; min: number; max: number }[]>([
  { title: "silver", min: 0.2, max: 0.4 },
  { title: "gold", min: 0.4, max: 0.6 },
  { title: "diamond", min: 0.6, max: 0.8 },
  { title: "black", min: 0.8, max: 1 },
  { title: "bronze", min: 0, max: 0.2 },
]);

const props = defineProps({
  modelValue: Number,
});
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const setActive = function (card) {
  if (card === images[1].title) return;
  else {
    nextCard();
    setActive(card);
  }
};

const prevCard = () => images.unshift(images.pop());
const nextCard = () => images.push(images.shift());
const changeActiveCard = function (index: number) {
  emit("update:modelValue", images[index].max);
  index === 0 ? prevCard() : index === 2 ? nextCard() : undefined;
};

watch(
  () => props.modelValue,
  (currentValue, prevValue) => {
    if (currentValue <= 0.2) {
      if (prevValue <= 0.2) return;
      setActive("bronze");
    } else if (currentValue <= 0.4) {
      if (prevValue <= 0.4 && prevValue > 0.2) return;
      setActive("silver");
    } else if (currentValue <= 0.6) {
      if (prevValue <= 0.6 && prevValue > 0.4) return;
      setActive("gold");
    } else if (currentValue <= 0.8) {
      if (prevValue <= 0.8 && prevValue > 0.6) return;
      setActive("diamond");
    } else {
      if (prevValue <= 1 && prevValue > 0.8) return;
      setActive("black");
    }
  }
);
</script>

<template>
  <div
    class="w-full max-w-full overflow-hidden flex justify-center items-center"
  >
    <div class="w-fit flex justify-center items-center">
      <div
        v-for="(image, index) in images"
        :key="image.title"
        :class="cardsSlider.container"
        @click="changeActiveCard(index)"
      >
        <img
          :src="getAssets(`images/cards/${image.title}.png`)"
          :alt="image.title + ' card'"
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
    opacity: 0.5;
    filter: blur(3px);
    cursor: pointer;
  }
  &:nth-child(3) {
    transform: scale(0.8);
    opacity: 0.5;
    filter: blur(3px);
    cursor: pointer;
  }
  &:nth-child(n + 4) {
    position: absolute;
    transform: scale(0.7);
    opacity: 0.5;
    filter: blur(4px);
    z-index: -1;
  }
}
</style>
