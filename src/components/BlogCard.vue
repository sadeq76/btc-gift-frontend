<script lang="ts" setup>
import { convertToShamsi } from "@/composable/helpers/dates";
import { counterSimplification } from "@/composable/helpers/numbers";

const props = defineProps<{
  id: number;
  cover: string;
  title: string;
  summary: string;
  date_created: string;
  date_updated: string;
  like_count: number;
  comment_count: number;
  view_count: number;
  time_to_read: number;
}>();
</script>

<template>
  <div class="my-4 max-md:m-4 w-full md:even:pr-2 md:odd:pl-2 lg:w-1/2">
    <div class="shadow rounded p-4">
      <img class="aspect-video w-full" :src="props.cover" :alt="props.title" />
      <h3 class="mt-2">{{ props.title }}</h3>
      <p class="mt-2 opacity-50">{{ convertToShamsi(props.date_created) }}</p>
      <p class="mt-2 line-clamp-2">
        {{ props.summary }}
      </p>
      <div class="mt-4 flex justify-between items-center">
        <div class="flex items-center">
          <p class="flex items-center">
            <span class="icon-insta mx-2"></span>
            {{ counterSimplification(props.like_count) }}
          </p>
          <p class="flex items-center">
            <span class="icon-insta mx-2"></span>
            {{ counterSimplification(props.comment_count) }}
          </p>
          <p class="flex items-center">
            <span class="icon-insta mx-2"></span>
            {{ counterSimplification(props.view_count) }}
          </p>
        </div>
        <nuxt-link
          :to="`/blog/${props.id}`"
          class="text-primary flex items-center justify-end"
        >
          مشاهده بلاگ
          <span class="icon-angle-left mr-2 text-primary"></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>