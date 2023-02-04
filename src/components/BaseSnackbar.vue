<template>
  <div
    :class="[
      {
        'text-success bg-success/20 max-md:bg-success border-success shadow-success':
          content.status === 'success',
        'text-info bg-info/20 max-md:bg-info border-info shadow-info':
          content.status === 'info',
        'text-warn bg-warn/20 max-md:bg-warn border-warn shadow-warn':
          content.status === 'warn',
        'text-error bg-error/20 max-md:bg-error border-error shadow-error':
          content.status === 'error',
      },
      'fixed z-50 p-4 md:top-16 right-4 rounded-md flex items-center translate-y-0 md:max-w-1/4 min-w-snackbar max-md:left-4 max-md:top-4 max-md:text-background shadow-sm border-2',
    ]"
  >
    <span
      @click="closeSnackbar"
      class="icon-close text-current fixed left-4 top-auto cursor-pointer"
    ></span>
    <div class="h-fit w-full ml-12">
      <slot name="content">{{ content.text }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Container } from "postcss";
import { useSnackbar, useSnackbarContent } from "@/composable/states/snackbar";
const isOpen = useSnackbar();
const content = useSnackbarContent();
const closeSnackbar = () => (isOpen.value = false);

const timeOut = setTimeout(() => {
  closeSnackbar();
}, 5000);

onBeforeUnmount(() => clearTimeout(timeOut));
</script>