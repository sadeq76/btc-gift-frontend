<template>
  <div class="flex flex-col justify-center items-center h-full">
    <img class="w-12" src="~/assets/images/logo.png" alt="btc gift" />
    <form
      id="login-form"
      class="mt-4 w-full flex flex-col"
      @submit.prevent="submit"
    >
      <h3>ورود به سیستم</h3>
      <p class="my-4">
        {{ !step ? login.step1Description : login.step2Description }}
      </p>
      <!-- <p
            v-if="step"
            class="
              text-center
              flex
              justify-center
              items-center
              align-middle
              mb-4
            "
            @click="editNumber"
          >
            <span class="text-lg font-bold">{{ phoneNumber }}</span>
            <span class="icon-info mr-2"></span>
          </p> -->
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
        class="btc-text-field w-full my-4 text-center"
        maxlength="4"
        required
        oninvalid="this.setCustomValidity('لطفا کد ارسال شده به شماره بالا را وارد کنید')"
        oninput="this.setCustomValidity('')"
        autocomplete="one-time-code"
        inputmode="numeric"
      />
    </form>
    <div class="grow flex flex-col justify-end w-full">
      <button type="submit" class="w-full btc-primary-button" form="login-form">
        ورود
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
//content
import login from "@/content/login.json";

//fetch
import { usePostNumber } from "@/api/otp";
import { usePostOtp } from "@/api/login";

//types
import Otp from "@/models/otp";
import Login from "@/models/login";

import { useAuth } from "@/composable/states/auth";
import { persianToEnglish } from "@/composable/helpers/numbers";
import { openSnackbar, useModal } from "@/composable/states/snackbar";

const isOpen = useModal();

const phoneNumber = ref<string>("");

const input = ref<string>("");

const step = ref<number>(0);

const editNumber = function () {
  step.value = 0;
  input.value = phoneNumber.value;
};

// const getOtp = function () {
//   // Feature detection
//   if ("OTPCredential" in window) {
//     window.addEventListener("DOMContentLoaded", (e) => {
//       const input = document.querySelector(
//         'input[autocomplete="one-time-code"]'
//       );
//       if (!input) return;
//       // Cancel the WebOTP API if the form is submitted manually.
//       const ac = new AbortController();
//       const form = input.closest("form");
//       if (form) {
//         form.addEventListener("submit", (e) => {
//           // Cancel the WebOTP API.
//           ac.abort();
//         });
//       }
//       // Invoke the WebOTP API
//       navigator.credentials
//         .get({
//           otp: { transport: ["sms"] },
//           signal: ac.signal,
//         })
//         .then((otp) => {
//           input.value = otp.code;
//           // Automatically submit the form when an OTP is obtained.
//           if (form) form.submit();
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     });
//   }
// };

const submit = async function () {
  if (!step.value) {
    usePostNumber({ phone_number: persianToEnglish(input.value) }).then(
      (response: Otp) => {
        openSnackbar(response.detail, "success");
        phoneNumber.value = input.value;
        input.value = "";
        step.value = 1;
      }
    );
  } else if (step.value === 1) {
    usePostOtp({
      otp: persianToEnglish(input.value),
      phone_number: phoneNumber.value,
    }).then((response: Login) => {
      const profile = {
        id: response.id,
        firstName: response.first_name,
        lastName: response.last_name,
        isMale: response.is_male,
        phoneNumber: response.phone_number,
        birthDate: response.birth_date,
      };
      localStorage.setItem("accessToken", `bearer ${response.access_token}`);
      localStorage.setItem("profile", JSON.stringify(profile));
      isOpen.value = false;
      useAuth().value = true;
      openSnackbar(login.welcome, "success");
    });
  } else {
  }
};
</script>
