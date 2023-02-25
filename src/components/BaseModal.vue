<script lang="ts" setup>
const props = withDefaults(defineProps<{ dialog: boolean }>(), {
  dialog: false,
});

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => emit("close");

const preventBack = function (event) {
  closeModal();
};

watch(
  () => props.dialog,
  (currentValue, _) => {
    if (currentValue) {
      document.body.style.overflow = "hidden";
      history.pushState(null, document.title, location.href);
      window.addEventListener("popstate", preventBack);
    } else {
      document.body.style.overflow = "visible";
      window.removeEventListener("popstate", preventBack);
    }
  }
);
</script>

<template>
  <transition
    enter-active-class="animate-move-up"
    leave-active-class="animate-move-down"
  >
    <div
      v-if="props.dialog"
      :class="[
        BaseModal.container,
        'fixed p-8 max-md:bottom-0 md:top-1/2 md:-translate-y-1/2 rounded-md z-50 shadow bg-background flex flex-col',
      ]"
    >
      <span
        @click="closeModal"
        class="icon-close absolute top-4 left-4 text-text/40"
      ></span>
      <slot></slot>
      <teleport to="#__nuxt">
        <div
          @click="closeModal"
          class="fixed z-40 left-0 right-0 top-0 bottom-0 bg-overlay"
        ></div>
      </teleport>
    </div>
  </transition>
</template>

<style lang="scss" module="BaseModal">
.container {
  width: 40%;
  min-width: 15rem;
  max-width: 25rem;
  height: 50%;
  min-height: 30rem;
  max-height: 40rem;

  @media (orientation: portrait) {
    width: 50%;
    min-width: 30rem;
    max-width: 40rem;
    height: 60%;
    min-height: 30rem;
    max-height: 40rem;

    @media (max-width: theme("screens.md")) {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: fit-content;
      border-radius: 0;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
    }
  }
}
</style>
