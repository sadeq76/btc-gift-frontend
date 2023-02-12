<script lang="ts" setup>
//helpers
import { counterSimplification } from "@/composable/helpers/numbers";
import { convertToShamsi } from "@/composable/helpers/dates";
//fetch
import { useGetBlogs } from "@/api/blogs";
//types
import Blogs from "@/models/blogs";

const blogs = ref<Blogs[]>();

useGetBlogs({ limit: "100", offset: "0" }).then(
  (response) => (blogs.value = response.result)
);
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full max-w-1366 max-md:px-4">
      <h1 class="my-4">مقاله و خبرنامه ها</h1>
    </div>
    <div
      v-if="blogs && blogs.length"
      class="max-w-1366 w-full relative flex flex-col justify-center md:px-4"
    >
      <img
        class="w-full h-fit aspect-video max-md:rounded-none"
        :src="blogs[0].cover"
        :alt="blogs[0].title"
      />
      <div
        class="btc-card mx-4 max-md:left-4 max-md:-translate-y-8 md:absolute md:w-2/5 md:bottom-4 md:right-4"
      >
        <h2>{{ blogs[0].title }}</h2>
        <p class="mt-2 opacity-50">
          {{ convertToShamsi(blogs[0].date_created) }}
        </p>
        <p class="my-4">
          {{ blogs[0].summary }}
        </p>
        <hr class="border-primary" />
        <div class="mt-4 flex justify-between">
          <div class="flex items-center">
            <p class="flex items-center">
              <span class="icon-insta mx-2"></span>
              {{ counterSimplification(blogs[0].comment_count) }}
            </p>
            <p class="flex items-center">
              <span class="icon-insta mx-2"></span>
              {{ counterSimplification(blogs[0].view_count) }}
            </p>
          </div>
          <button
            class="btc-icon-button border-b-2 border-primary flex items-center pr-2"
          >
            مشاهده بلاگ
            <span class="icon-angle-left text-primary"></span>
          </button>
        </div>
      </div>
    </div>
    <h2 class="mt-4 max-md:px-4 max-w-1366 w-full">آخرین خبرنامه ها</h2>
    <div class="max-w-1366 flex flex-wrap w-full">
      <BlogCard
        v-for="blog in blogs?.slice(1, blogs.length)"
        :key="blog.id"
        v-bind="{ ...blog }"
        class="my-4 w-full px-4 md:w-1/2 md:odd:pr-4 md:odd:pl-2 md:even:pl-4 md:even:pr-2"
      ></BlogCard>
    </div>
  </div>
</template>
