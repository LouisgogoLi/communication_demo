<template>
  <ChildComponent />
</template>

<script>
export default {
  name: "ParentComponent",
};
</script>

<script setup>
import ChildComponent from "@/components/provideInjectTest/ChildComponent.vue";
</script>

<style scoped></style>
