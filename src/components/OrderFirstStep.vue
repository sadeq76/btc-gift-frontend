<script lang="ts" setup>
import { convertToRls } from "@/composable/helpers/numbers";

const btc = ref<number>(0.5);

const props = defineProps({
  modelValue: Number,
  finalPrice: Number,
});
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

watch(btc, (currentValue, _) => {
  emit("update:modelValue", currentValue);
});
</script>

<template>
  <div class="w-full h-full rounded-xl flex flex-col items-center">
    <div class="w-full px-4 my-4">
      <h1>ثبت مبلغ</h1>
      <p>مبلغ کارت درخواستی خود را وارد کنید</p>
    </div>
    <div class="h-fit w-full md:fit">
      <CardsSlider v-model="btc" class="my-4" />
    </div>
    <BaseSlider v-model="btc" class="px-4 mb-4" />
    <div class="p-4 w-full flex max-md:flex-wrap">
      <div class="p-4 mb-4 rounded bg-test w-full">
        <span class="text-2xl">مقدار:</span>
        <span class="mr-4 text-primary text-4xl font-bold">
          {{ btc }}
        </span>
      </div>
      <div class="p-4 mb-4 rounded bg-test w-full">
        <span class="text-2xl">قیمت نهایی:</span>
        <span class="mr-4 text-primary text-4xl font-bold">
          {{ convertToRls(props.finalPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>
