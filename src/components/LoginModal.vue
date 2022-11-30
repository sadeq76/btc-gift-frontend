<template>
  <transition
    enter-active-class="animate-zoom-in"
    leave-active-class="animate-zoom-out"
  >
    <BaseModal v-if="isOpen">
      <template #content>
        <div class="flex flex-col justify-center items-center">
          <img class="w-12" src="~/assets/images/logo.png" alt="btc gift" />
          <form class="mt-4 w-full flex flex-col" @submit.prevent="login">
            <h1>ورود به سیستم</h1>
            <p class="my-4">لطفا برای ورود اطلاعات زیر را وارد نمایید</p>
            <input
              v-model="username"
              dir="rtl"
              type="text"
              name="username"
              id="username"
              placeholder="نام کاربری"
              aria-label="نام کاربری"
              class="text-field w-full mt-4"
              required
            />
            <input
              v-model="password"
              dir="rtl"
              type="password"
              name="password"
              id="password"
              placeholder="رمزعبور"
              aria-label="رمزعبور"
              class="text-field w-full mt-4"
              title="پسورد می بایست بیشتر از هفت کارکتر باشد"
              pattern=".{8,}"
              required
            />
          </form>
        </div>
      </template>
      <template #actions>
        <button class="w-full primary-button">ورود</button>
      </template>
    </BaseModal>
  </transition>
</template>

<script lang="ts" setup>
import { useModal } from "../composable/state";

const isOpen = useModal();

const username = ref<string>("");
const password = ref<string>("");
const login = () => {};
</script>
