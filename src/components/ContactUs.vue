<template>
  <section class="w-full h-max bg-test shadow-lg shadow-background flex">
    <form
      class="p-4 md:basis-1/2 md:px-8 lg:px-14"
      @submit.prevent="sendMessage"
    >
      <h2>با ما در ارتباط باشید ...</h2>
      <input
        v-model="fullname"
        dir="rtl"
        type="text"
        name="fullname"
        id="fullname"
        placeholder="نام کامل"
        aria-label="نام کامل"
        class="text-field w-full mt-4"
        required
        oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
        oninput="this.setCustomValidity('')"
      />
      <input
        v-model="email"
        dir="rtl"
        type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        name="email"
        id="email"
        placeholder="ایمیل"
        aria-label="ایمیل"
        class="text-field w-full mt-4"
        required
        oninvalid="this.setCustomValidity('ایمیل را با فرمت صحیح وارد کنید')"
        oninput="this.setCustomValidity('')"
      />
      <textarea
        v-model="message"
        dir="rtl"
        name="message"
        id="message"
        rows="5"
        placeholder="پیام خود را وارد کنید ..."
        aria-label="پیام"
        class="textarea w-full mt-4"
        required
        oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
        oninput="this.setCustomValidity('')"
      ></textarea>
      <div class="flex mt-8">
        <button
          class="ml-2 w-full secondary-button flex justify-center items-center"
        >
          <span class="icon-upload text-primary ml-2"></span>
          آپلود فایل
        </button>
        <button class="w-full primary-button">ارسال پیام</button>
      </div>
    </form>
    <div class="basis-1/2 bg-overlay max-md:hidden">
      <!-- <img
          class="w-full h-full object-cover"
          src="~/assets/images/image3.jpg"
          alt="contact us"
        /> -->
    </div>
  </section>
</template>
  <script lang="ts" setup>
const fullname = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const sendMessage = () => {};
</script>