<template>
  <div class="p-4 w-full">
    <h1 class="mb-4">لیست سفارشات</h1>
    <div
      v-for="order in orders"
      :key="order.id"
      class="shadow pb-4 my-4 rounded"
    >
      <table class="table">
        <tr v-for="(value, key, i) in order" :key="i">
          <th>{{ translateKey(key) }} :</th>
          <td>
            <span v-if="key === 'type'">
              {{ translateCardTitle(value.toString()) }}
            </span>
            <span v-if="key === 'price'">
              {{
                value ? convertToRls(+value) + " تومان" : "خطا در دریافت داده"
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

const orders = reactive<orderDetailsModel[]>([
  {
    fullName: "آدولف هیتلر",
    type: "black",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "pending",
    price: 100000,
  },
  {
    fullName: "صدام حسین",
    type: "diamond",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "prepareWallet",
    price: 350000,
  },
  {
    fullName: "معمر قذافی",
    type: "gold",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "increaseWallet",
    price: 530200,
  },
  {
    fullName: "نیکلای چائوشسکو",
    type: "silver",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "preparing",
    price: 200450,
  },
  {
    fullName: "موسولینی ",
    type: "bronze",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "sending",
    price: 2300000,
  },
  {
    fullName: "نیکلای چائوشسکو",
    type: "gold",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "done",
    price: 100000,
  },
  {
    fullName: "آدولف هیتلر",
    type: "black",
    receiverName: "سید علی",
    address: "تهران خیابان شهید مدنی شمالی  ",
    status: "asd",
    price: 0,
  },
]);
</script>
<style lang="scss" module="TheOrdersList">
</style>