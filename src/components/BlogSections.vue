<script setup lang="ts">
import Section from "@/models/section";

const props = defineProps<{ sections: Section[] }>();
</script>
<template>
  <div>
    <h2>لیست مطالب</h2>
    <ul>
      <li v-for="section in props.sections" :key="section.header">
        {{ section.header }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module="blogSections">
.container {
  counter-reset: section;
  ul {
    li::before {
      counter-increment: section;
      content: counter(section) ": ";
    }
  }
}
</style>
