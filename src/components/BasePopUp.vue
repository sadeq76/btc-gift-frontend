<template>
  <div
    :class="BasePopUp.container"
    class="
      btc-card
      absolute
      z-50
      bg-background/90
      left-0
      -bottom-2
      translate-y-full
      animate-fade
      invisible
      flex flex-col
      justify-start
      items-start
    "
    ref="popup"
  >
    <a href="#">
      <span class="icon-close text-sm"></span>
    </a>
    <slot></slot>
  </div>
</template>

<style lang="scss" module="BasePopUp">
.container::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0;
  margin-left: 0.5rem;
  transform: translate(0, -100%);
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent transparent rgb(var(--color-background)) transparent;
  opacity: 0.5;
}
.container:target {
  visibility: visible !important;
}
</style>