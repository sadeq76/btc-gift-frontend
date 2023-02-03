<template>
  <div>
    <h2 class="mb-4">مقاله و خبرنامه ها</h2>
    <div :class="[DesktopBlogs.blogs, 'w-full']">
      <div class="relative" v-for="(blog, index) in blogs" :key="index">
        <div
          :class="[{ 'flex flex-col h-full': index === 0 }, 'flex h-full pt-2']"
        >
          <img
            :class="[
              { 'w-full': index === 0, 'w-2/5': index !== 0 },
              'aspect-video object-cover overflow-hidden',
            ]"
            :src="blog.cover"
            :alt="blog.title"
          />
          <div
            :class="[
              { 'w-3/5': index !== 0 },
              'overflow-hidden grow flex flex-col',
            ]"
          >
            <h3 :class="{ 'mt-4': index === 0, 'mr-4': index !== 0 }">
              {{ blog.title }}
            </h3>
            <p
              class="opacity-50"
              :class="{
                'mr-4': index !== 0,
                'mt-2': true,
              }"
            >
              {{ convertToShamsi(blog.date_created) }}
            </p>
            <p
              :class="{
                'my-4': index === 0,
                'mr-4 mt-4 line-clamp-2': index !== 0,
              }"
            >
              {{ blog.summary }}
            </p>
            <div class="grow flex justify-end items-end">
              <button @click="goToBlog(blog.id)" class="btc-icon-button mt-4">
                <span class="text-xl"> بیشتر </span>
                <span class="icon-angle-left text-primary"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavigationFailure } from "vue-router";
import { convertToShamsi } from "../composable/helpers";

//types
import Blogs from "../models/blogs";

const props = defineProps<{ blogs: Blogs[] }>();

const router = useRouter();
const goToBlog = (id): Promise<void | NavigationFailure> =>
  router.push(`blog/${id}`);
</script>

<style lang="scss" module="DesktopBlogs">
.blogs {
  display: grid;
  grid-template-areas:
    "main 1"
    "main 2"
    "main 3";
  column-gap: 1rem;
  div:nth-child(1) {
    grid-area: main;
  }
  div:nth-child(2) {
    grid-area: 1;
  }
  div:nth-child(3) {
    grid-area: 2;
  }
  div:nth-child(4) {
    grid-area: 3;
  }
}
</style>