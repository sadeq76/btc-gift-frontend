<template>
  <div class="ctnr relative w-full flex flex-col justify-center items-center">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card absolute left-0 right-0 m-auto cursor-pointer h-full"
      :class="
        index == 0 ? 'center-item' : index == 1 ? 'right-item' : 'left-item'
      "
      for="item-1"
      :id="`song-${index + 1}`"
    >
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="card.image"
        :alt="card.title"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import cardModel from "../models/card.model";
//@ts-ignore
import blackCard from "../assets/images/cards/black.png";
//@ts-ignore
import diamondCard from "../assets/images/cards/diamond.png";
//@ts-ignore
import goldCard from "../assets/images/cards/gold.png";

const cards: cardModel[] = [
  {
    image: blackCard,
    title: "بلک کارت",
    description: "",
    price: 20000,
  },
  {
    image: diamondCard,
    title: "کارت الماس",
    description: "",
    price: 20000,
  },
  {
    image: goldCard,
    title: "کارت طلایی",
    description: "",
    price: 20000,
  },
];
</script>
<style lang="scss" scoped>
.ctnr {
  transform-style: preserve-3d;
  height: 40vw;
  @media (min-width: theme("screens.md")) {
    height: 25vw;
  }
}

.card {
  transition: transform 0.4s ease;
  width: 75%;
  height: fit-content;
  @media (min-width: theme("screens.md")) {
    width: 40%;
    height: fit-content;
  }
}

.right-item {
  transform: translatex(-40%) scale(0.8);
  opacity: 0.4;
  z-index: -1;
}

.left-item {
  transform: translatex(40%) scale(0.8);
  opacity: 0.4;
  z-index: -1;
}

.main-item {
  transform: translatex(0) scale(1);
  opacity: 1;

  img {
    box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
  }
}
</style>