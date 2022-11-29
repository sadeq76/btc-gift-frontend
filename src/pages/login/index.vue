<template>
  <div class="p-8 flex flex-col items-center">
    <img class="w-12" src="~/assets/images/logo.png" alt="btc gift" />
    <form class="mt-4 w-full flex flex-col" @submit.prevent="login">
      <h1>ورود به سیستم</h1>
      <p class="my-4">لطفا برای ورود اطلاعات زیر را وارد نمایید</p>
      <input
        v-model="username"
        dir="rtl"
        type="text"
        name="fullname"
        id="fullname"
        placeholder="نام کامل"
        aria-label="نام کامل"
        class="text-field w-full mt-4"
        required
      />
      <input
        v-model="password"
        dir="rtl"
        type="password"
        name="fullname"
        id="fullname"
        placeholder="نام کامل"
        aria-label="نام کامل"
        class="text-field w-full mt-4"
        title="پسورد می بایست بیشتر از هفت کارکتر باشد"
        pattern=".{8,}"
        required
      />
      <div class="grow mt-4">
        <button class="w-full primary-button">ورود</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
const username = ref<string>("");
const password = ref<string>("");

const login = () => {};
</script>
<style lang="scss" module="TheLogin">
</style>