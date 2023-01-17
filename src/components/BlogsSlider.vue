<template>
  <div class="w-full" v-for="(blog, index) in blogs" :key="index">
    <div
      :class="[blogsSlider.container, 'relative rounded-md overflow-hidden']"
    >
      <div class="bg-primary absolute top-0 right-0 bottom-0 left-0">
        <img
          class="w-full h-full aspect-video object-cover"
          :src="blog.cover"
          alt=""
        />
        <div
          class="
            absolute
            top-0
            right-0
            bottom-0
            left-0
            flex
            justify-between
            items-center
            bg-overlay
          "
        >
          <button class="btc-icon-button p-4">
            <span class="icon-angle-right text-background"></span>
          </button>
          <button class="btc-icon-button p-4">
            <span class="icon-angle-left text-background"></span>
          </button>
        </div>
        <div class="absolute right-0 bottom-0 left-0 w-full">
          <div></div>
        </div>
      </div>
    </div>
    <h2 class="mt-4 text-center">{{ blog.title || "بدون عنوان" }}</h2>
    <p class="mt-4 text-center">{{ blog.description || "بدون توضیحات" }}</p>
  </div>
</template>
<script lang="ts" setup>
import BlogModel from "../models/blog.model";
interface Props {
  blogs: BlogModel[];
}

const props = defineProps<Props>();
</script>
<style lang="scss" module="blogsSlider">
.container {
  padding-top: 56%;
}
</style>