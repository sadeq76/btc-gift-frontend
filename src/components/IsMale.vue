<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>

<template>
  <div
    class="w-full h-full flex justify-between items-center px-2 mt-4 border border-text/20 rounded p-2"
  >
    <p class="text-base">
      جنسیت:
      {{ props.modelValue === null ? "دیگر" : props.modelValue ? "مرد" : "زن" }}
    </p>
    <div class="flex items-center">
      <button
        type="button"
        @click="emit('update:modelValue', true)"
        class="h-6 w-6 rounded-circle opacity-50 bg-text/10 text-text mr-4"
        :class="{
          'bg-blue/10 text-blue  opacity-100 border border-blue':
            props.modelValue === true,
        }"
      >
        M
      </button>
      <button
        type="button"
        @click="emit('update:modelValue', false)"
        class="h-6 w-6 rounded-circle opacity-50 bg-text/10 text-text mr-4"
        :class="{
          'bg-pink/10 text-pink  opacity-100 border border-pink':
            props.modelValue === false,
        }"
      >
        F
      </button>
      <button
        type="button"
        @click="emit('update:modelValue', null)"
        class="h-6 w-6 rounded-circle opacity-50 bg-text/10 text-text mr-4"
        :class="{
          'bg-text/10 text-text  opacity-100 border border-text':
            props.modelValue === null,
        }"
      >
        -
      </button>
    </div>
  </div>
</template>
