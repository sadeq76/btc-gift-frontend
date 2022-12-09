<template>
  <div dir="rtl" class="html-content max-w-1366 p-4" v-html="data"></div>
</template>
<script lang="ts" setup>
const appConfig = useAppConfig();
const content = ref<string>("");
const { data } = useFetch("hello");
</script>
<style lang="scss" module="TheHTU">
</style>