<template>
  <div class="w-full p-4 flex flex-col items-center">
    <div class="w-full max-w-1366">
      <h1 class="mb-2">سوالات متداول</h1>
      <p class="mb-8 md:mb-12">
        در صورتی که به پاسخ سوالتان را نگرفتید در صفحه اصلی به ما پیغام دهید
      </p>
    </div>
    <img
      class="w-full max-w-sm"
      src="~/assets/images/cards/black.png"
      alt="card"
    />
    <p class="mt-4 text-success flex items-center">
      <span class="icon-check text-success ml-2"></span>
      تغییر مالکیت کارت به آقای فلانی
    </p>
    <div
      v-for="(action, index) in actions"
      :key="index"
      class="bg-test p-4 w-full max-w-1366 rounded-md first:mt-12 mt-4"
    >
      <details @click="clicked($event, action.isDisable)" class="relative">
        <summary id="hello" class="w-width font-bold cursor-pointer ml-4">
          <h2>
            {{ action.title }}
            <span v-if="action.isDisable" class="text-text/50"
              >( به زودی )</span
            >
          </h2>
          <p class="mt-2">{{ action.description }}</p>
          <span class="absolute left-0 top-0 icon-plus text-primary"></span>
        </summary>
        <div class="w-full bg-background p-4 mt-4">
          <div class="flex flex-wrap">
            <div
              v-for="(field, i) in action.fields"
              :key="i"
              class="max-sm:w-full max-md:w-1/2 w-1/3 px-2"
            >
              <input
                v-model="inputs"
                dir="rtl"
                type="email"
                :pattern="field.pattern"
                :name="field.label"
                :placeholder="field.label"
                :aria-label="field.label"
                class="btc-text-field w-full mt-4"
                required
                oninvalid="this.setCustomValidity(`${field.label} را با فرمت صحیح وارد کنید`)"
                oninput="this.setCustomValidity('')"
              />
            </div>
          </div>
          <div class="mt-4 w-full flex justify-end px-2">
            <button
              :disabled="action.button.isDisable"
              @click="submit"
              class="btc-primary-button"
            >
              {{ action.button.label }}
            </button>
          </div>
        </div>
        <span
          class="bg-test absolute left-0 top-0 icon-minus text-primary"
        ></span>
      </details>
    </div>
  </div>
</template>
<script setup lang="ts">
const actions = [
  {
    title: "انتقال به کیف پول دیگر",
    description: "انتقال وجه ازین کارت به کارت دیگر بدونپرداخت کارزد",
    fields: [
      { key: "PhoneNumber", label: "sd", value: "", pattern: "" },
      { key: "name", label: "asd", value: "", pattern: "" },
    ],
    button: { label: "ثبت", isDisable: false },
    isDisable: true,
  },
  {
    title: "دریافت معادل وجه نقد",
    description: "دریافت معادل وجه در کارت بانکی یا بانک های سر تا سر دنیا",
    fields: [
      { key: "PhoneNumber", label: "sd", value: "", pattern: "" },
      { key: "name", label: "asd", value: "", pattern: "" },
    ],
    button: { label: "ثبت", isDisable: false },
    isDisable: false,
  },
  {
    title: "هدیه به شخص دیگر",
    description: "تغییر مالکیت کارت به شخص دیگر",
    fields: [
      { key: "PhoneNumber", label: "sd", value: "", pattern: "" },
      { key: "name", label: "asd", value: "", pattern: "" },
    ],
    button: { label: "ثبت", isDisable: true },
    isDisable: false,
  },
];

const clicked = (event, isDisable) => (isDisable ? event.preventDefault() : {});

const inputs = [];

const submit = () => {};
</script>