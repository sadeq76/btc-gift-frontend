<template>
  <div class="p-4 w-full max-w-1366">
    <div class="flex justify-between items-center mb-4">
      <h1>لیست سفارشات</h1>
      <span @click="logoutUser" class="text-primary">خروج</span>
    </div>
    <p class="mb-8 md:mb-12">
      در صورت نیاز بر روی دکمه دانلود کلیک کنید و خروجی پی دی اف را دریافت کنید
    </p>
    <div class="flex flex-wrap">
      <div
        v-for="order in orders"
        :key="order.id"
        class="w-full max-md:mb-4 md:p-4 md:w-1/2"
      >
        <div class="shadow rounded-lg p-4">
          <h2 class="text-center">
            سفارش : <span class="text-primary"> {{ order.id }}# </span>
          </h2>
          <table class="table">
            <tr v-for="(value, key, i) in order" :key="i">
              <th>{{ translateKey(key) }} :</th>
              <td>
                <span v-if="key === 'type'">
                  {{ translateCardTitle(value.toString()) }}
                </span>
                <span v-else-if="key === 'price'">
                  {{
                    value
                      ? convertToRls(+value) + " تومان"
                      : "خطا در دریافت داده"
                  }}
                </span>
                <span v-else>
                  {{ value }}
                </span>
              </td>
            </tr>
          </table>
          <div class="px-2 mt-4 flex">
            <div
              :class="[
                {
                  'border-error text-error bg-error/20':
                    statusColor(order.status) == 'error',
                  'border-warn text-warn bg-warn/20':
                    statusColor(order.status) == 'warn',
                  'border-info text-info bg-info/20':
                    statusColor(order.status) == 'info',
                  'border-success text-success bg-success/20':
                    statusColor(order.status) == 'success',
                  'border-overlay/20 text-overlay/20 bg-overlay/5':
                    statusColor(order.status) == 'unknown',
                },
                'w-2/3 flex justify-center items-center rounded border-2',
              ]"
            >
              {{ translateStatus(order.status) }}
            </div>
            <button class="w-1/3 primary-button mr-4">دانلود</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { orderDetailsModel } from "~~/src/models/order-details.model";
import {
  translateKey,
  statusColor,
  translateStatus,
  translateCardTitle,
  convertToRls,
} from "~/composable/helpers";
import { fetchData } from "~~/src/composable/fetch";
import { logout } from "~~/src/composable/auth";

const logoutUser = () => logout();

let orders = ref<orderDetailsModel[]>();

onMounted(() => {
  fetchData({
    url: "/order",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NzEzNDM3MTIuNTY3NDk5fQ._7O8DNVE6QtkvoCt2KFW1ZetFXS9lY8UKhdDjxYBNfE",
    },
  }).then((res) => (orders.value = res));
});
</script>
<style lang="scss" module="TheOrdersList">
</style>