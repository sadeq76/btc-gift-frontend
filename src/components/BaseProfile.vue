<template>
  <div class="flex flex-col items-center w-56">
    <div class="btc-avatar bg-primary" src="" alt="">
      <span class="icon-account text-background"></span>
    </div>
    <p class="mt-4 whitespace-nowrap font-bold">سید صادق شاهمرادی</p>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 w-full mt-4">
      <NuxtLink
        v-for="(action, index) in actions"
        :key="index"
        :to="action.path"
        class="
          w-full
          border-primary
          p-4
          mt-4
          aspect-square
          overflow-hidden
          shadow
          bg-background
          rounded
          flex flex-col
          items-center
          justify-between
        "
      >
        <span :class="`icon-${action.icon} text-primary text-md`"></span>
        <p
          class="
            mr-4
            line-height-normal
            text-center
            whitespace-nowrap
            font-bold
          "
        >
          {{ action.title }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileActions from "@/models/profile-actions.model";

const actions: ProfileActions[] = [
  { icon: "card", title: "کارت ها", path: "/cards" },
  { icon: "list", title: "سفارشات", path: "/order/list" },
  { icon: "transaction", title: "تراکنش ها", path: "/transactions" },
  { icon: "addresses", title: " آدرس های", path: "/transactions" },
];
</script>