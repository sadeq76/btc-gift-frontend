<template>
  <div
    :class="[
      BaseModal.container,
      'fixed p-8 top-1/2 -translate-y-1/2 rounded-md z-50 shadow bg-background flex flex-col',
    ]"
  >
    <span
      @click="closeModal"
      class="icon-close text-text fixed left-4 top-4 cursor-pointer"
    ></span>
    <div class="h-fit w-full">
      <slot name="content"></slot>
    </div>
    <div class="grow min-h-fit w-full flex items-end">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useModal } from "../composable/state";

const isOpen = useModal();
const closeModal = () => (isOpen.value = false);

const preventBack = function (event) {
  isOpen.value = false;
};

onMounted(() => {
  document.body.style.overflow = "hidden";

  const cls: string[] = [
    "fixed",
    "z-40",
    "left-0",
    "right-0",
    "top-0",
    "bottom-0",
    "bg-overlay",
  ];
  const div = document.createElement("div");
  const app = document.getElementById("__nuxt");

  div.setAttribute("id", "overlay");
  div.classList.add(...cls);
  // app.classList.add("blur-lg");
  document.body.appendChild(div);
  history.pushState(null, document.title, location.href);
  window.addEventListener("popstate", preventBack);
});
onBeforeUnmount(() => {
  document.body.style.overflow = "visible";
  const app = document.getElementById("__nuxt");
  const overlay = document.getElementById("overlay");
  // app.classList.remove("blur-lg");
  document.body.removeChild(overlay);
  window.removeEventListener("popstate", preventBack);
});
</script>
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

    @media (max-width: theme("screens.sm")) {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      height: 100%;
      min-height: 100%;
      max-height: 100%;
      border-radius: 0;
    }
  }
}
</style>