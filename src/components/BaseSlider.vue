<script setup lang="ts">
const props = defineProps({
  modelValue: Number,
});
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const slider = ref<HTMLElement>();
</script>

<template>
  <div class="w-full">
    <input
      ref="slider"
      :class="baseSlider.bar"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="w-full h-2 border-none outline-none"
      type="range"
      min="0"
      max="1"
      step=".0001"
      list="volsettings"
    />
    <datalist id="volsettings">
      <option>0</option>
      <option>0.2</option>
      <option>0.4</option>
      <option>0.6</option>
      <option>0.8</option>
      <option>1</option>
    </datalist>
  </div>
</template>

<style lang="scss" module="baseSlider">
.bar {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
}

.bar::-webkit-slider-runnable-track {
  background: rgb(var(--color-test));
  height: 0.5rem;
  border-radius: 200rem;
}

.bar::-moz-range-track {
  background: rgb(var(--color-test));
  height: 0.5rem;
  border-radius: 200rem;
}

/***** Thumb Styles *****/
/***** Chrome, Safari, Opera, and Edge Chromium *****/
.bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 0;
  cursor: pointer;
  background-color: rgb(var(--color-primary));
  border-radius: 50%;
  transform: translateY(-40%);
}

/***** Firefox *****/
.bar::-moz-range-thumb {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-color: rgb(var(--color-primary));
  border-radius: 50%;
  transform: translateY(-40%);
}

.bar:focus {
  outline: none;
}

/***** Chrome, Safari, Opera, and Edge Chromium *****/
.bar:focus::-webkit-slider-thumb {
  border: 1px solid #053a5f;
  outline: 3px solid #053a5f;
  outline-offset: 0.125rem;
}

/******** Firefox ********/
.bar:focus::-moz-range-thumb {
  border: 1px solid #053a5f;
  outline: 3px solid #053a5f;
  outline-offset: 0.125rem;
}
</style>
