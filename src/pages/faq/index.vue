<template>
  <div class="p-4 w-full flex flex-col items-center">
    <div class="max-w-1366 w-full">
      <h1 class="mb-2">سوالات متداول</h1>
      <p class="mb-8 md:mb-12">
        در صورتی که به پاسخ سوالتان را نگرفتید در صفحه اصلی به ما پیغام دهید
      </p>
      <div v-for="(faq, index) in faqs" :key="index">
        <details class="relative">
          <summary class="w-width font-bold cursor-pointer ml-4">
            {{ faq.question }}
            <span class="absolute left-0 top-0 icon-plus text-primary"></span>
          </summary>
          <p
            class="
              mt-4
              mx-2
              pr-4
              opacity-60
              border-r-4 border-solid border-primary
            "
          >
            {{ faq.answer }}
          </p>
          <span
            class="bg-background absolute left-0 top-0 icon-minus text-primary"
          ></span>
        </details>
        <hr class="my-8 opacity-50" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import faqModel from "../../models/faq.model";
import { default as faqs } from "../../content/faq.json";
</script>
<style lang="scss" module="TheFaq">
</style>