<template>
  <HeaderComponet />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import HeaderComponet from "@/components/publicComponents/header/HeaderComponet.vue";
</script>

<style lang="scss">
#app {
  text-align: center;
}

body,
input,
select {
  font-family: "Noto Sans TC", Helvetica, "微軟正黑體";
  line-height: 140%;
  font-weight: 400;
  color: #333;
  background-color: #f8fafb;
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
