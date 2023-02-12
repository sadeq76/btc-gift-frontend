
<script setup lang="ts">
import ProfileActions from "@/models/profile-actions.model";
import { useLogout } from "@/composable/states/auth";

const logout = () => useLogout();

const actions: ProfileActions[] = [
  { icon: "card", title: "کارت ها", path: "profile-cards" },
  { icon: "list", title: "سفارشات", path: "profile-factors" },
  { icon: "transaction", title: "تراکنش ها", path: "profile-transactions" },
];

const profile = computed(() => JSON.parse(localStorage.getItem("profile")));
</script>

<template>
  <!-- TODO: fix this style -->
  <div class="flex flex-col items-center w-64" style="font-family: iransans">
    <div class="btc-avatar relative bg-primary" src="" alt="">
      <span class="icon-account text-background"></span>
    </div>
    <div class="mt-4 flex items-center">
      <p class="whitespace-nowrap font-bold">
        {{ profile.first_name + profile.last_name || "بدون نام" }}
      </p>
      <NuxtLink :to="{ name: 'profile-edit' }">
        <span class="icon-info text-base mr-2 text-primary"></span>
      </NuxtLink>
    </div>
    <p class="mt-2 whitespace-nowrap opacity-50 text-text">
      {{ profile.phoneNumber }}
    </p>
    <div class="w-full mt-4">
      <NuxtLink
        v-for="(action, index) in actions"
        :key="index"
        :to="{ name: action.path }"
        class="
          w-full
          border-primary
          rounded
          p-4
          mt-4
          overflow-hidden
          shadow
          hover:shadow hover:shadow-primary/60
          bg-background
          flex
          items-center
          justify-between
        "
      >
        <div class="flex items-center">
          <!-- <span :class="`icon-${action.icon} text-primary text-md`"></span> -->
          <p
            class="
              mr-2
              line-height-normal
              text-center
              whitespace-nowrap
              font-bold
            "
          >
            {{ action.title }}
          </p>
        </div>
        <span class="icon-angle-left text-primary"></span>
      </NuxtLink>
    </div>
    <button
      @click="logout"
      class="btc-icon-button mt-4 w-full flex justify-end items-center"
    >
      <p class="ml-2 font-bold">خروج</p>
      <span class="icon-logout text-2xl text-primary"></span>
    </button>
  </div>
</template>
