<script lang="ts" setup>
import Order from "@/models/order";

const props = defineProps<{
  data: Order;
  address: string;
  finalPrice: number;
}>();
</script>

<template>
  <table class="table shadow">
    <tr>
      <th>نام مالک</th>
      <td>{{ props.data.card.owner_phone_number }}</td>
    </tr>
    <tr>
      <th>مقدار بیت کوین</th>
      <td>{{ props.data.card.btc_amount }}</td>
    </tr>
    <tr>
      <th>نام گیرنده</th>
      <td>{{ props.data.receiver_name }}</td>
    </tr>
    <tr>
      <th>شماره گیرنده</th>
      <td>{{ props.data.receiver_phone_number }}</td>
    </tr>
    <tr>
      <th>آدرس</th>
      <td>{{ props.address }}</td>
    </tr>
    <tfoot clas>
      <h3>قیمت نهایی</h3>
      <p>{{ finalPrice }}</p>
    </tfoot>
  </table>
</template>
