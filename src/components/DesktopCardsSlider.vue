<template>
  <div class="container bg-test">
    <div
      v-for="(image, index) in images"
      :key="index"
      ref="cards"
      :class="`c-${index + 1} rounded select-none cursor-pointer transition`"
      @click="next"
      @mouseover="pauseInterval"
      @mouseleave="playInterval"
    >
      <img
        :src="getAssets(`images/cards/${image}.png`)"
        :alt="image + ' card'"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getAssets } from "~~/src/composable/helpers/files";
import { useRouter } from "vue-router";

const router = useRouter();

const pause = ref<boolean>(false);

const images = ["silver", "gold", "diamond", "black", "bronze"];
const cards = reactive<HTMLDivElement[]>([]);

const autoPlay = setInterval(() => {
  if (!pause.value) {
    cards.forEach((elm) => {
      if (+elm.classList[0].match(/(\d+)/)[0] === cards.length) {
        elm.classList.replace("c-5", "c-1");
      } else {
        elm.classList.replace(
          `c-${+elm.classList[0].match(/(\d+)/)[0]}`,
          `c-${+elm.classList[0].match(/(\d+)/)[0] + 1}`
        );
      }
    });
  }
}, 3000);

const pauseInterval = () => (pause.value = true);
const playInterval = () => (pause.value = false);

const next = (event) => {
  if (event.target.parentElement.classList[0] !== "c-4") {
    cards.forEach((elm) => {
      if (+elm.classList[0].match(/(\d+)/)[0] === cards.length) {
        elm.classList.replace("c-5", "c-1");
      } else {
        elm.classList.replace(
          `c-${+elm.classList[0].match(/(\d+)/)[0]}`,
          `c-${+elm.classList[0].match(/(\d+)/)[0] + 1}`
        );
      }
    });
  } else {
    router.push(
      `order/create/${event.target.getAttribute("alt").split(" ")[0]}`
    );
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.c-1 {
  position: absolute;
  top: 0%;
  transform: translateY(-100%);
  z-index: 1;
  transition: none;
}
.c-2 {
  position: absolute;
  top: 25%;
  left: 50%;
  filter: blur(0.1em);
  transform: translate(-50%, -50%) rotateZ(60deg) scale(0.7);
  z-index: 2;
}
.c-3 {
  position: absolute;
  top: 50%;
  left: 50%;
  filter: blur(0.07em);
  transform: translate(-50%, -50%) rotateZ(30deg) scale(0.8);
  z-index: 3;
}
.c-4 {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-30deg) scale(0.85);
  z-index: 4;
}
.c-5 {
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  z-index: 5;
  transition: none;
}

.c-4:hover {
  transform: translate(-50%, -50%) rotateZ(0) scale(1);
}

.c-4:hover::after {
  content: "برای سفارش کلیک کنید";
  font-size: 1rem;
  position: absolute;
  z-index: 10;
  left: 1rem;
  bottom: 1rem;
  color: white;
  font-weight: bold;
}
</style>
