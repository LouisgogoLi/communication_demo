<template>
  <div>{{ injectLocation }} - {{ injectGeolocation }}</div>
  <button @click="fnUpdateChildLocation">點我</button>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const injectLocation = inject("provideLocation");
    const injectGeolocation = inject("provideGeolocation");
    const injectUpdateLocation = inject("provideUpdateLocation");

    return {
      injectLocation,
      injectGeolocation,
      injectUpdateLocation,
    };
  },
};
</script>

<style></style>
