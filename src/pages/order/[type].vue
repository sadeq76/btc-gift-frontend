<template>
  <div class="w-full h-main flex flex-col justify-center items-center">
    <div
      ref="progress"
      class="progress-bar top-14"
      :style="`--width-progress-bar: ${progressBarWidth}%`"
    ></div>
    <div class="max-w-1366 w-full grow flex items-center">
      <OrderFirstStep
        v-if="step === 1"
        v-model="btc_amount"
        :final-price="+finalPrice"
      />
      <div
        v-if="step === 2"
        class="w-full h-full rounded-xl flex flex-col items-center"
      >
        <div class="w-full px-4 my-4">
          <h1>اطلاعات پایه</h1>
          <p>لظفا اطلاعات پستی و کارت را وارد کنید</p>
        </div>
        <div class="w-full flex flex-wrap px-4">
          <div class="w-1/2 md:pl-4 max-md:w-full">
            <input
              v-model="model.card.owner_phone_number"
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
          <div class="w-1/2 max-md:w-full">
            <BaseSelectbar
              v-model="model.address_id"
              class="mt-4"
              :label="'آدرس را انتخاب کنید'"
              :options="addresses"
            />
          </div>
          <div class="w-1/2 md:pl-4 max-md:w-full">
            <input
              v-model="model.receiver_name"
              type="tel"
              name="phone"
              pattern="[0][9][0-9]{9}"
              id="phone"
              placeholder="نام گیرنده"
              aria-label="نام گیرنده"
              class="btc-text-field w-full mt-4"
              required
              oninvalid="this.setCustomValidity('لطفا نام را با فرمت درست وارد کنید')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="w-1/2 max-md:w-full">
            <input
              v-model="model.receiver_phone_number"
              type="tel"
              name="phone"
              pattern="[0][9][0-9]{9}"
              id="phone"
              placeholder="شماره گیرنده"
              aria-label="شماره گیرنده"
              class="btc-text-field w-full mt-4"
              required
              oninvalid="this.setCustomValidity('لطفا شماره تماس را با فرمت درست وارد کنید')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <textarea
            v-model="model.card.message"
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
      <OrderFinalStep
        v-if="step === 3"
        :data="model"
        :address="asdsda"
        :final-price="+finalPrice"
      />
    </div>
    <div class="max-w-1366 grow p-4 w-full flex justify-end items-end">
      <button
        v-if="step !== 1"
        @click="goToPreviousStep"
        class="btc-secondary-button ml-4"
      >
        مرحله قبلی
      </button>
      <div class="btc-spacer" />
      <button @click="goToNextStep" class="btc-primary-button">
        {{ step !== 3 ? "مرحله بعدی" : "پرداخت نهایی" }}
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Order from "@/models/order";
import { useGetPrice } from "@/api/order";
import { useGetAddress } from "~~/src/api/address";
import { Address } from "cluster";
import { useAuth } from "~~/src/composable/states/auth";
import { useModal } from "~~/src/composable/states/snackbar";

const baseInfo = ref<Order>();
const btc_amount = ref<number>(0.5);
const model = reactive<Order>({
  receiver_name: null,
  receiver_phone_number: null,
  address_id: null,
  card: {
    owner_phone_number: null,
    btc_amount: btc_amount.value,
    message: null,
  },
});

const dynamicRevenue = ref<number>(0);
const staticRevenue = ref<number>(0);
const btc = ref<number>(0);
const fee = ref<number>(0);
const revenue = computed(
  (): number =>
    btc_amount.value * btc.value * dynamicRevenue.value + staticRevenue.value
);

const finalPrice = computed((): string =>
  (revenue.value + btc_amount.value * btc.value + fee.value).toFixed(0)
);

const progress = ref<HTMLDivElement>();
const baseValue = 50;
const progressBarWidth = ref<number>(0);
const goToPreviousStep = (): void => {
  if (progressBarWidth.value > 0) {
    progressBarWidth.value -= baseValue;
  }
};

const step = computed((): number => progressBarWidth.value / baseValue + 1);
const isLoggedIn = useAuth();
const addresses = ref<Address[]>();

useGetPrice().then((response) => {
  dynamicRevenue.value = response.dynamic_revenue;
  staticRevenue.value = response.static_revenue;
  fee.value = response.fee;
  btc.value = response.btc;
});
const getAddresses = () =>
  useGetAddress().then((response) => {
    addresses.value = response;
  });

const goToNextStep = (): void => {
  if (!isLoggedIn.value) useModal().value = true;
  else if (progressBarWidth.value < 99 && isLoggedIn)
    progressBarWidth.value += baseValue;
  if (step.value === 2) getAddresses();
};
</script>
<style lang="scss" module="TheCreateOrder"></style>
