<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="item in header" :key="item.tab_id">
        <el-menu-item :index="item.router_name" v-if="item.List.length === 0">{{
          item.name
        }}</el-menu-item>
        <el-sub-menu :index="item.router_name" v-else>
          <template #title>{{ item.name }}</template>
          <template v-for="secondItem in item.List" :key="secondItem.tab_id">
            <el-menu-item
              :index="secondItem.router_name"
              v-if="secondItem.List.length === 0"
              >{{ secondItem.name }}</el-menu-item
            >
            <el-sub-menu :index="item.router_name" v-else>
              <template #title>{{ secondItem.name }}</template>
              <template
                v-for="thirdItem in secondItem.List"
                :key="thirdItem.tab_id"
              >
                <el-menu-item :index="thirdItem.router_name">{{
                  thirdItem.name
                }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HeaderComponet",
};
</script>

<script setup>
import header from "@/api/json/publicJson/header.json";
import { useRouter } from "vue-router";
const router = useRouter();

import { ref } from "vue";
const activeIndex = ref("Home");

const handleSelect = (key) => {
  router.push({ name: key });
};
</script>

<style scoped></style>
