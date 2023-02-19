<script lang="ts" setup>
const props = defineProps<{ label: string; options: any }>();
</script>

<template>
  <select class="btc-selectbar w-full">
    <option>{{ props.label }}</option>
    <option v-for="option in props.options" :key="option.id" :value="option.id">
      {{ option.title }}
    </option>
  </select>
</template>
