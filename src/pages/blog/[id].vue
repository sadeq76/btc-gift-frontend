<script setup lang="ts">
import { useGetBlog } from "~~/src/api/blog";

import { useRoute } from "vue-router";
import Blog from "@/models/blog";
import { useAuth } from "~~/src/composable/states/auth";

let blog: any;
const comment = ref<string>("");

const isLogin = useAuth();

const submitComment = (): void => {};

await useGetBlog(useRoute().params.id).then((response) => {
  blog = response.data;
});
console.log(blog);
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <article class="max-w-1366 py-4 w-full flex max-md:flex-wrap px-4">
      <div
        class="
          btc-card
          md:sticky
          top-18
          w-1/3
          max-md:w-full
          h-fit
          md:ml-4
          max-md:mb-4
        "
      >
        <h2>لیست مطالب</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <div class="btc-card w-2/3 max-md:w-full h-fit">
        <h1>{{ blog.title }}</h1>
        <p class="my-4">
          {{ blog.summary }}
        </p>
        <img
          class="w-full aspect-video mb-4"
          :src="blog.cover"
          :alt="blog.title"
        />
        <p class="leading-8" v-html="blog.content"></p>
      </div>
    </article>
    <section class="max-w-1366 w-full mb-4 px-4 max-md:hidden">
      <div class="flex flex-nowrap justify-items-stretch">
        <BlogCard
          v-for="n in 4"
          :key="n"
          class="ml-4 last:mr-0 w-1/4"
          v-bind="{ ...blog }"
        ></BlogCard>
      </div>
    </section>

    <section class="p-4 w-full md:hidden">
      <BlogsSlider :blogs="[blog]" />
    </section>

    <section class="max-w-1366 w-full mb-4 px-4 mt-8">
      <h2 class="mb-8">نظرات کاربران</h2>
      <form v-if="isLogin" @submit.prevent="submitComment">
        <textarea
          v-model="comment"
          dir="rtl"
          name="message"
          id="message"
          rows="5"
          placeholder="نظر خود را وارد کنید ..."
          aria-label="نظر"
          class="btc-textarea w-full"
          required
          oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
          oninput="this.setCustomValidity('')"
        ></textarea>
        <div class="flex justify-end mt-4">
          <button type="submit" class="w-1/8 btc-primary-button">
            ثبت نظر
          </button>
        </div>
      </form>
      <div
        v-for="comment in blog.comments"
        :key="comment.id"
        class="mt-4 rounded p-4 border border-text/20"
      >
        <div class="btc-avatar">
          <span class="icon-account text-background text-4xl"></span>
        </div>
        <p class="mt-2">ناشناس</p>
        <p class="mt-4">
          {{ comment.text }}
        </p>
      </div>
    </section>
    <BaseFooter></BaseFooter>
  </div>
</template>

<style lang="scss" module="TheBlog">
</style>
