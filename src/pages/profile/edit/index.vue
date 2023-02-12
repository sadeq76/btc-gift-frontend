<script setup lang="ts">
import { useGetAddress } from "@/api/address";
import { usePostProfile } from "~~/src/api/profile";
import Profile from "@/models/profile";
import Address from "@/models/address";
import { openSnackbar } from "@/composable/states/snackbar";

let isOpen = ref<boolean>(false);

let model = ref<Profile>({
  firstName: null,
  lastName: null,
  isMale: null,
  phoneNumber: null,
  birthDate: null,
});

const addresses = ref(null);

const getAddresses = function () {
  useGetAddress().then((response) => (addresses.value = response));
};

onMounted(() => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  model.value = { ...profile };
  getAddresses();
});

const closeModal = () => (isOpen.value = false);

const submit = () => {
  usePostProfile(JSON.stringify(model.value)).then((response) =>
    openSnackbar(response.detail, "success")
  );
};

const update = function (address: Address) {
  addresses.value.push(address);
  closeModal();
};
</script>

<template>
  <div class="w-full max-w-1366 p-4 flex flex-col justify-center items-center">
    <div class="bg-background">
      <!-- <h1>پروفایل</h1> -->
      <form @submit.prevent="submit">
        <h2>ویرایش اطلاعات</h2>
        <div class="flex flex-wrap justify-center items-center">
          <div class="w-full md:w-1/3 px-2">
            <input
              v-model="model.firstName"
              dir="rtl"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="نام"
              aria-label="نام"
              class="btc-text-field mt-4 w-full"
              required
              oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="w-full md:w-1/3 px-2">
            <input
              v-model="model.lastName"
              dir="rtl"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="نام خانوادگی"
              aria-label="نام خانوادگی"
              class="btc-text-field mt-4 w-full"
              required
              oninvalid="this.setCustomValidity('این فیلد نمی تواند خالی باشد')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="w-full md:w-1/3 px-2">
            <IsMale v-model="model.isMale" />
          </div>
          <div class="w-full md:w-1/2 px-2">
            <input
              v-model="model.phoneNumber"
              dir="rtl"
              type="email"
              pattern="[0][9][0-9]{9}"
              name="email"
              id="email"
              placeholder="شماره تماس"
              aria-label="شماره تماس"
              class="btc-text-field mt-4 w-full"
              required
              oninvalid="this.setCustomValidity('ایمیل را با فرمت صحیح وارد کنید')"
              oninput="this.setCustomValidity('')"
              disabled
            />
          </div>
          <div class="w-full md:w-1/2 px-2">
            <input
              v-model="model.birthDate"
              dir="rtl"
              type="email"
              name="email"
              id="email"
              placeholder="تاریخ تولد"
              aria-label="تاریخ تولد"
              class="btc-text-field w-full mt-4"
            />
          </div>
        </div>

        <div class="flex mt-8 px-2 justify-end">
          <button type="submit" class="btc-primary-button px-8">ثبت</button>
        </div>
      </form>

      <hr class="mt-4 border-text/10" />

      <div class="mt-8">
        <div class="flex justify-between">
          <h2>لیست آدرس ها</h2>
          <button
            type="submit"
            class="btc-icon-button flex justify-center items-center"
            @click="isOpen = true"
          >
            افزودن
            <span class="icon-plus text-primary mr-2 text-2xl"></span>
          </button>
        </div>
        <div class="flex flex-wrap mt-4">
          <AddressCards
            v-for="(address, index) in addresses"
            :key="index"
            class="w-full md:w-1/2 mb-4 md:odd:pl-2 md:even:pr-2"
            v-bind="{ ...address }"
          />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="animate-zoom-in"
      leave-active-class="animate-zoom-out"
    >
      <BaseModal :dialog="isOpen" @close="closeModal">
        <CreateAddress @update-list="update" />
      </BaseModal>
    </transition>
  </div>
</template>
