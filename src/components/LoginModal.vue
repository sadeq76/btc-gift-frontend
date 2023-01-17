<template>
  <BaseModal>
    <template #content>
      <div class="flex flex-col justify-center items-center">
        <img class="w-12" src="~/assets/images/logo.png" alt="btc gift" />
        <form
          id="login-form"
          class="mt-4 w-full flex flex-col"
          @submit.prevent="submit"
        >
          <h1>ورود به سیستم</h1>
          <p class="my-4">لطفا برای ورود اطلاعات زیر را وارد نمایید</p>
          <input
            v-if="!step"
            v-model="input"
            type="tel"
            name="phone"
            pattern="[0][9][0-9]{9}"
            id="phone"
            placeholder="شماره تماس"
            aria-label="شماره تماس"
            class="btc-text-field w-full mt-4 text-center"
            required
            oninvalid="this.setCustomValidity('لطفا شماره تماس را با فرمت درست وارد کنید')"
            oninput="this.setCustomValidity('')"
          />
          <input
            v-else
            v-model="input"
            type="tel"
            name="code"
            pattern="[0-9]{4}"
            id="code"
            placeholder="کد ارسالی"
            aria-label="کد ارسالی"
            class="btc-text-field w-full mt-4 text-center"
            maxlength="4"
            required
            oninvalid="this.setCustomValidity('لطفا کد ارسال شده به شماره بالا را وارد کنید')"
            oninput="this.setCustomValidity('')"
          />
        </form>
      </div>
    </template>
    <template #actions>
      <button type="submit" class="w-full btc-primary-button" form="login-form">
        ورود
      </button>
    </template>
  </BaseModal>
</template>

<script lang="ts" setup>
import { useAuth } from "../composable/auth";
import { fetchData } from "../composable/fetch";
import { persianToEnglish } from "../composable/helpers";
import { openSnackbar, useModal } from "../composable/state";

const isOpen = useModal();

const input = ref<string>("");

const step = ref<number>(0);

let data = null;
let pending = null;
let error = null;
let refresh = null;

const submit = async function () {
  if (!step.value) {
    fetchData({
      url: "/login",
      method: "POST",
      body: persianToEnglish(input.value),
    }).then((res) => {
      openSnackbar(res, "success");
      input.value = "";
      step.value = 1;
    });
  } else {
    fetchData({
      url: "/otp",
      method: "POST",
      body: persianToEnglish(input.value),
    }).then((res) => {
      localStorage.setItem("token", res.token);
      isOpen.value = false;
      useAuth().value = true;
      openSnackbar("خوش آمدید", "success");
    });
  }
};
</script>
