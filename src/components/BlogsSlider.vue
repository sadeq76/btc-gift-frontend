<template>
  <div
    v-for="(blog, index) in blogs"
    :key="index"
    class="w-full animate-fade"
    :class="{ hidden: slideIndex !== index }"
  >
    <div
      :class="[blogsSlider.container, 'relative rounded-md overflow-hidden']"
    >
      <div class="bg-primary absolute top-0 right-0 bottom-0 left-0">
        <img
          class="w-full h-full aspect-video object-cover"
          :src="blog.cover"
          :alt="blog.title"
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
          <button @click="previousSlide" class="btc-icon-button p-4">
            <span class="icon-angle-right text-background"></span>
          </button>
          <button @click="nextSlide" class="btc-icon-button p-4">
            <span class="icon-angle-left text-background"></span>
          </button>
        </div>
        <div class="absolute right-0 bottom-0 left-0 w-full">
          <div></div>
        </div>
      </div>
    </div>
    <h2 class="mt-4 text-center">{{ blog.title || "بدون عنوان" }}</h2>
    <p class="mt-4 text-center line-clamp-4">
      {{ blog.summary || "بدون توضیحات" }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import Blogs from "../models/blogs";

const props = defineProps<{ blogs: Blogs[] }>();

let slideIndex = ref<number>(0);

const previousSlide = (): number =>
  slideIndex.value !== 0
    ? slideIndex.value--
    : (slideIndex.value = props.blogs.length - 1);

const nextSlide = (): number =>
  slideIndex.value < props.blogs.length - 1
    ? slideIndex.value++
    : (slideIndex.value = 0);

const selectSlide = (index: number): number => (slideIndex.value = index);
</script>
<style lang="scss" module="blogsSlider">
.container {
  padding-top: 56%;
}
</style>