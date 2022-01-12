<template>
  <Child />
</template>

<script>
export default {
  name: "Parent",
};
</script>

<script setup>
import Child from "@/components/ProvideInjectTest/Child.vue";
</script>

<style scoped></style>
