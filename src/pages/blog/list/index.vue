<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-full max-w-1366 max-md:px-4">
      <h1 class="my-4">مقاله و خبرنامه ها</h1>
    </div>
    <div class="max-w-1366 w-full relative flex flex-col justify-center">
      <img
        class="w-full h-fit aspect-video max-lg:rounded-none"
        src="https://media-cdn.tripadvisor.com/media/photo-s/0b/65/b6/50/hotel-imaage.jpg"
        alt=""
      />
      <div
        class="
          btc-card
          mx-4
          max-lg:left-4 max-lg:-translate-y-8
          lg:absolute lg:w-2/5 lg:bottom-4 lg:right-4
        "
      >
        <h2>تیتر بلاگ اینجاست</h2>
        <p class="my-4">
          این توضیحات بلاگه که هر چند خطی که بک تصمیم بگیره نمایش میدم فقط شعور
          بک باید در نظر گرفته بشه که دویست خط اینجا ننویسه
        </p>
        <hr class="border-primary" />
        <div class="mt-4 flex justify-between">
          <p>22 آبان ماه 76</p>
          <button
            class="
              btc-icon-button
              border-b-2 border-primary
              flex
              items-center
              pr-2
            "
          >
            مشاهده بلاگ
            <span class="icon-angle-left text-primary"></span>
          </button>
        </div>
      </div>
    </div>
    <h2 class="mt-4 px-4 max-w-1366 w-full">آخرین خبرنامه ها</h2>
    <div class="max-w-1366 flex flex-wrap w-full">
      <div
        v-for="n in 4"
        :key="n"
        class="
          my-4
          w-full
          max-lg:px-4
          lg:w-1/2 lg:pl-2 lg:odd:pl-4 lg:even:pr-4
        "
      >
        <img
          class="aspect-video w-full"
          src="https://media-cdn.tripadvisor.com/media/photo-s/0b/65/b6/50/hotel-imaage.jpg"
          alt=""
        />
        <h3 class="mt-2">این تیتر است</h3>
        <p class="mt-2 line-clamp-2">
          این توضیحات دوخطی بلاگ است و نمی تواند ماننید بلاگ پیشنهادی هر چند خطی
          ک میخواهید باشد پس لطفا دقت کنید اگر بلاگی توضیحات مهم دارد می بایست
          یشنهادی باشد
        </p>
        <div class="mt-4 flex justify-between items-center">
          <p>22 آبان ماه 76</p>
          <nuxt-link to="" class="text-primary flex items-center justify-end">
            مشاهده بلاگ
            <span class="icon-angle-left mr-2 text-primary"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { fetchData } from "~~/src/composable/fetch";

let blogs = ref<any[]>();

onMounted(() => {
  fetchData({
    url: "/blog?offset=0&limit=4",
  }).then((res) => {
    blogs.value = res;
  });
});
</script>
<style lang="scss" module="TheBlogs">
</style>