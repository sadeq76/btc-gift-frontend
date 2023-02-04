<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div
      ref="progress"
      class="progress-bar top-14"
      :style="`--width-progress-bar: ${progressBarWidth}%`"
    ></div>
    <form class="max-w-1366 w-full p-4" @submit.prevent="">
      <div class="w-full mb-8">
        <h1 class="mb-4">ثبت سفارش</h1>
        <p>{{ description }}</p>
      </div>
      <div class="flex flex-col items-center" v-if="step == 1">
        <img
          class="mb-4 w-full max-w-sm"
          src="~/assets/images/cards/black.png"
          alt="card"
        />
        <div class="w-full flex flex-wrap">
          <div class="w-1/2 md:pl-4 max-md:w-full">
            <input
              v-model="model.phone"
              type="tel"
              name="phone"
              pattern="[0][9][0-9]{9}"
              id="phone"
              placeholder="شماره تماس"
              aria-label="شماره تماس"
              class="btc-text-field w-full mt-4"
              required
              oninvalid="this.setCustomValidity('لطفا شماره تماس را با فرمت درست وارد کنید')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="w-1/2 max-md:mt-4 max-md:w-full flex btc-input-container">
            <button @click.prevent="increase" class="btc-secondary-button">
              <span class="icon-plus text-primary"></span>
            </button>
            <input
              v-model="model.price"
              dir="rtl"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="مبلغ خرید"
              aria-label="مبلغ خرید"
              class="px-4 w-full"
            />
            <button @click.prevent="descrease" class="btc-secondary-button">
              <span class="icon-minus text-primary"></span>
            </button>
          </div>
          <textarea
            dir="rtl"
            name="message"
            id="message"
            rows="5"
            placeholder="متن تبریک"
            aria-label="پیام"
            class="btc-textarea w-full mt-4"
          ></textarea>
        </div>
      </div>
      <div class="w-full flex flex-wrap" v-if="step == 2">
        <textarea
          dir="rtl"
          name="message"
          id="message"
          rows="5"
          placeholder="آدرس کامل"
          aria-label="پیام"
          class="btc-textarea w-full mb-4"
          required
          oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
          oninput="this.setCustomValidity('')"
        ></textarea>
        <div class="w-1/2 max-md:mt-4 max-md:w-full">
          <input
            v-model="model.receiverName"
            dir="rtl"
            type="text"
            name="fullname"
            id="fullname"
            placeholder="نام تحویل گیرنده"
            aria-label="نام تحویل گیرنده"
            class="btc-text-field w-full"
            required
            oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <input
          v-model="model.receiverPhone"
          dir="rtl"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="شماره تماس تحویل گیرنده"
          aria-label="شماره تماس تحویل گیرنده"
          class="btc-text-field w-full mt-4"
          required
          oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
          oninput="this.setCustomValidity('')"
        />
      </div>
      <table class="table shadow" v-if="step == 3">
        <tr v-for="(value, key, index) in model" :key="index">
          <th>{{ translateKey(key) }}</th>
          <td>{{ value }}</td>
        </tr>
      </table>
      <div class="w-full flex justify-end mt-8">
        <button
          v-if="step !== 1"
          @click="goToPreviousStep"
          class="btc-secondary-button ml-4"
        >
          مرحله قبلی
        </button>
        <button @click="goToNextStep" class="btc-primary-button">
          {{ step !== 4 ? "مرحله بعدی" : "پرداخت نهایی" }}
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { orderDetailsModel } from "../../../models/order-details.model";
import { translateKey } from "~/composable/helpers/others";

const model = reactive<orderDetailsModel>({
  phone: "",
  price: 0,
  message: "",
  address: "",
  receiverName: "",
  receiverPhone: "",
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

const increase = () => model.price + 0.1;
const descrease = () => model.price - 0.1;
</script>
<style lang="scss" module="TheCreateOrder">
</style>