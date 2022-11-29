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
        :src="`btc-gift/assets/images/cards/${card.image}.png`"
        :alt="card.title"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import cardModel from "../models/card.model";

const cards: cardModel[] = [
  {
    image: "black",
    title: "بلک کارت",
    description: "",
    price: 20000,
  },
  {
    image: "diamond",
    title: "کارت الماس",
    description: "",
    price: 20000,
  },
  {
    image: "gold",
    title: "کارت طلایی",
    description: "",
    price: 20000,
  },
  // {
  //   image: "silver",
  //   title: "کارت نقره ای",
  //   description: "",
  //   price: 20000,
  // },
  // {
  //   image: "bronze",
  //   title: "کارت برنزی",
  //   description: "",
  //   price: 20000,
  // },
];
</script>
<style lang="scss" scoped>
.ctnr {
  transform-style: preserve-3d;
  height: 36vw;
  @media (min-width: theme("screens.sm")) {
    height: 14vw;
  }
}

.card {
  transition: transform 0.4s ease;
  width: 65vw;
  height: 36vw;
  @media (min-width: theme("screens.sm")) {
    width: 25vw;
    height: 14vw;
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