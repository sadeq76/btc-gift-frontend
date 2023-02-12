<script></script>

<template>
  <div class="w-full">
    <input
      :class="baseSlider.bar"
      class="w-full h-2 border-none outline-none"
      type="range"
      min="0"
      max="1"
      step=".01"
      value=".5"
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
  background: #053a5f;
  height: 1rem;
}

/******** Firefox ********/
.bar::-moz-range-track {
  background: #053a5f;
  height: 1rem;
}

/***** Thumb Styles *****/
/***** Chrome, Safari, Opera, and Edge Chromium *****/
.bar::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  margin-top: -12px; /* Centers thumb on the track */
  background-color: #5cd5eb;
  height: 2rem;
  width: 1rem;
}

/***** Firefox *****/
.bar::-moz-range-thumb {
  border: none; /*Removes extra border that FF applies*/
  border-radius: 0; /*Removes default border-radius that FF applies*/
  background-color: #5cd5eb;
  height: 2rem;
  width: 1rem;
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
