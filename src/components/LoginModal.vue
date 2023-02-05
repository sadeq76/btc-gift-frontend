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
          <p class="my-4">
            {{ !step ? login.step1Description : login.step2Description }}
          </p>
          <p
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
          </p>
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
            autocomplete="off"
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
        dateJoined: response.date_joined,
        lastLogin: response.last_login,
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
