<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
</script>
