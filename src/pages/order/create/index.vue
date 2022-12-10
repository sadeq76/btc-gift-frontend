<template>
  <div
    ref="progress"
    class="progress-bar"
    :style="`--width-progress-bar: ${progressBarWidth}%`"
  ></div>
  <form class="max-w-1366 w-full p-4" @submit.prevent="">
    <div class="w-full mb-8">
      <h1 class="mb-4">ثبت سفارش</h1>
      <p>{{ description }}</p>
    </div>
    <div class="w-full flex flex-wrap" v-if="step == 1">
      <div class="w-1/2 sm:pl-4 max-sm:w-full">
        <input
          dir="rtl"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="نام شخص"
          aria-label="نام شخص"
          class="text-field w-full"
        />
      </div>
      <div class="w-1/2 max-sm:mt-4 max-sm:w-full">
        <input
          dir="rtl"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="نوع کارت"
          aria-label="نوع کارت"
          class="text-field w-full"
        />
      </div>
      <textarea
        dir="rtl"
        name="message"
        id="message"
        rows="5"
        placeholder="متن تبریک"
        aria-label="پیام"
        class="textarea w-full mt-4"
      ></textarea>
    </div>
    <div class="w-full flex flex-wrap" v-if="step == 2">
      <textarea
        dir="rtl"
        name="message"
        id="message"
        rows="5"
        placeholder="آدرس کامل"
        aria-label="پیام"
        class="textarea w-full mb-4"
        required
        oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
        oninput="this.setCustomValidity('')"
      ></textarea>
      <div class="w-1/2 sm:pl-4 max-sm:w-full">
        <input
          dir="rtl"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="کد پستی"
          aria-label="کد پستی"
          class="text-field w-full"
          required
          oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
          oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="w-1/2 max-sm:mt-4 max-sm:w-full">
        <input
          dir="rtl"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="نام تحویل گیرنده"
          aria-label="نام تحویل گیرنده"
          class="text-field w-full"
          required
          oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
          oninput="this.setCustomValidity('')"
        />
      </div>
      <input
        dir="rtl"
        type="text"
        name="fullname"
        id="fullname"
        placeholder="شماره تماس تحویل گیرنده"
        aria-label="شماره تماس تحویل گیرنده"
        class="text-field w-full mt-4"
        required
        oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
        oninput="this.setCustomValidity('')"
      />
    </div>
    <table class="table shadow" v-if="step == 3">
      <tr v-for="(value, key, index) in information" :key="index">
        <th>{{ translateKey(key) }}</th>
        <td>{{ value }}</td>
      </tr>
    </table>
    <div class="w-full flex justify-end mt-8">
      <button
        v-if="step !== 1"
        @click="goToPreviousStep"
        class="secondary-button ml-4"
      >
        مرحله قبلی
      </button>
      <button @click="goToNextStep" class="primary-button">
        {{ step !== 4 ? "مرحله بعدی" : "پرداخت نهایی" }}
      </button>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { orderDetailsModel } from "../../../models/order-details.model";
import { translateKey } from "~/composable/helpers";

const information = reactive<orderDetailsModel>({
  fullName: "s",
  type: "sd",
  message: "ad",
  zipCode: "asd",
  receiverName: "gfg",
  receiverPhone: "asds",
  address: "asdds",
  status: "sad",
  price: 0,
});
const progress = ref<HTMLDivElement>();
const baseValue = 50;
const progressBarWidth = ref<number>(0);
const goToPreviousStep = (): void => {
  if (progressBarWidth.value > 0) {
    progressBarWidth.value -= baseValue;
  }
};
const goToNextStep = (): void => {
  if (progressBarWidth.value < 99) {
    progressBarWidth.value += baseValue;
  }
};
const step = computed((): number => progressBarWidth.value / baseValue + 1);

const description = computed((): string =>
  step.value == 3
    ? "لطفا اطلاعات زیر را بررسی و در صورت عدم وجود خطا روی دکمه پرداخت نهایی کلیک کنید"
    : "لطفا فرم زیر را کامل کنید سپس روی دکمه ادامه کلیک کنید"
);
</script>
<style lang="scss" module="TheCreateOrder">
</style>