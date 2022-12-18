<template>
  <div class="max-w-1366 w-full p-4">
    <h1 class="text-center flex flex-col">
      <span class="text-primary text-sm mb-2"> نحوه کار با بی تی سی گیفت </span>
      <span> {{ htu.mainTitle }} </span>
    </h1>
    <div class="flex max-md:flex-wrap justify-around mt-12">
      <div
        :class="[TheHTU.card, 'p-4 rounded-lg  text-center']"
        v-for="(part, index) in htu.mainRoad"
        :key="index"
      >
        <img
          :src="getAssets('images/how-to-use/' + part.image)"
          :alt="part.title"
        />
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
          class="
            absolute
            top-16
            left-6
            max-md:-translate-x-1/2
            text-center
            bg-background
            p-2
            w-64
            overflow-hidden
            flex flex-col
          "
          :class="[
            {
              'md:top-0 md:-right-4 md:translate-x-full md:text-left':
                index % 2 === 0,
              'md:right-16 md:top-0 md:text-right': index % 2 !== 0,
            },
          ]"
        >
          <h2 class="mb-2">{{ step.title }}</h2>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
    <h2 class="mb-2 text-center">{{ htu.finalTitle }}</h2>
    <p class="text-center">{{ htu.finalDescription }}</p>
    <div
      class="relative flex flex-col justify-center items-center rounded md:mt-8"
    >
      <video
        class="w-full rounded"
        :src="getAssets('images/how-to-use/' + htu.video)"
      ></video>
      <div
        class="
          absolute
          w-1/2
          bottom-0
          -translate-y-1/2
          p-8
          rounded
          hover:shadow hover:shadow-primary
          flex
          justify-between
          bg-primary
        "
      >
        <div class="w-full"></div>
        <div>
          <span class="icon-play cursor-pointer text-background mx-2"></span>
          <span class="icon-play cursor-pointer text-background mx-2"></span>
          <span class="icon-play cursor-pointer text-background mx-2"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { default as htu } from "../../content/how-to-use.json";
import { getAssets } from "~~/src/composable/helpers";
</script>
<style lang="scss" module="TheHTU">
.card {
  width: 100vw;
  height: 120vw;
  @media (min-width: theme("screens.md")) {
    width: 25vw;
    height: 30vw;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>