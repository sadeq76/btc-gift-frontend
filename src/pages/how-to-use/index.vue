<template>
  <div class="max-w-1366 w-full p-4">
    <h1 class="text-center flex flex-col">
      <span class="text-primary text-sm mb-2"> نحوه کار با بی تی سی گیفت </span>
      <span> {{ htu.mainTitle }} </span>
    </h1>
    <div class="flex justify-around mt-12">
      <div
        :class="[TheHTU.card, 'p-4 rounded-lg  text-center']"
        v-for="(part, index) in htu.mainRoad"
        :key="index"
      >
        <img :src="getImageAbsolutePath(part.image)" :alt="part.title" />
        <h2 class="mt-4">{{ part.title }}</h2>
        <p class="mt-2">{{ part.description }}</p>
      </div>
    </div>
    <h1 class="mt-12 text-center flex flex-col">
      <span class="text-primary text-sm mb-2">
        جزییات کار با بی تی سی گیفت
      </span>
      <span> {{ htu.planTitle }} </span>
    </h1>
    <p class="mt-4 text-center">{{ htu.planDescription }}</p>
    <div
      class="
        plan
        w-full
        my-12
        mx-auto
        border-b-2 border-primary border-dashed
        flex flex-col
        items-center
      "
    >
      <div
        v-for="(step, index) in htu.plan"
        :key="index"
        class="relative w-fit"
      >
        <div
          class="
            w-12
            h-12
            p-4
            flex
            justify-center
            items-center
            text-primary
            font-bold
            text-lg
            border-2 border-primary
            rounded-circle
            hover:shadow hover:shadow-primary
          "
        >
          {{ index + 1 }}
        </div>
        <div
          class="border-l-2 border-primary border-dashed w-fit h-64 mx-auto"
        ></div>
        <div
          class="h-64 w-64 overflow-hidden flex flex-col"
          :class="[
            {
              'absolute top-0 -right-4 translate-x-full text-left':
                index % 2 === 0,
              'absolute right-16 top-0 text-right': index % 2 !== 0,
            },
          ]"
        >
          <h2>{{ step.title }}</h2>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
    <h2 class="mb-2 text-center">{{ htu.finalTitle }}</h2>
    <p class="text-center">{{ htu.finalDescription }}</p>
    <div
      class="
        w-full
        flex flex-col
        justify-center
        items-center
        rounded
        border-primary border-2
        p-4
        my-4
      "
    >
      <video
        class="rounded mb-4"
        :src="getImageAbsolutePath(htu.video)"
      ></video>
      <div>
        <span class="icon-play mx-2"></span>
        <span class="icon-play mx-2"></span>
        <span class="icon-play mx-2"></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { default as htu } from "../../content/how-to-use.json";

const glob = import.meta.glob("~/assets/images/how-to-use/*", {
  eager: true,
});

const getImageAbsolutePath = (imageName: string): string => {
  return glob[`/assets/images/how-to-use/${imageName}`]["default"];
};
</script>
<style lang="scss" module="TheHTU">
.card {
  width: 25vw;
  height: 30vw;

  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>