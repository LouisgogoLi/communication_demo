<template>
  <div>
    <ul class="drop-down-menu">
      <template v-for="item in header" :key="item.tab_id">
        <li>
          <a @click.left="fnGoToNewRouter(item.router_name, item.click)">{{
            item.name
          }}</a>
          <ul v-if="item.List.length !== 0">
            <template v-for="secondItem in item.List" :key="secondItem.tab_id">
              <li>
                <a
                  @click="
                    fnGoToNewRouter(secondItem.router_name, secondItem.click)
                  "
                  >{{ secondItem.name }}</a
                >
                <ul v-if="secondItem.List.length !== 0">
                  <template
                    v-for="thirdItem in secondItem.List"
                    :key="thirdItem.tab_id"
                  >
                    <li>
                      <a
                        @click="
                          fnGoToNewRouter(
                            thirdItem.router_name,
                            thirdItem.click
                          )
                        "
                        >{{ thirdItem.name }}</a
                      >
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
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
const fnGoToNewRouter = (router_name, click) => {
  if (click) {
    router.push({ name: router_name });
  } else {
    alert("不好意思,這裡無功能或者功能還沒做好");
  }
};
</script>

<style scoped>
ul {
  /* 取消ul預設的內縮及樣式 */
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.drop-down-menu {
  border: #ccc 1px solid;
  display: inline-block;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 13px;
}

ul.drop-down-menu li {
  position: relative;
  white-space: nowrap;
  border-right: #ccc 1px solid;
}

ul.drop-down-menu > li:last-child {
  border-right: none;
}

ul.drop-down-menu > li {
  float: left;
  /* 只有第一層是靠左對齊*/
}

ul.drop-down-menu a {
  background-color: #fff;
  color: #333;
  display: block;
  padding: 0 30px;
  text-decoration: none;
  line-height: 40px;
}

ul.drop-down-menu a:hover {
  /* 滑鼠滑入按鈕變色*/
  background-color: #ef5c28;
  color: #fff;
}

ul.drop-down-menu li:hover > a {
  /* 滑鼠移入次選單上層按鈕保持變色*/
  background-color: #ef5c28;
  color: #fff;
}

ul.drop-down-menu ul {
  border: #ccc 1px solid;
  position: absolute;
  z-index: 99;
  left: -1px;
  top: 100%;
  min-width: 180px;
}

ul.drop-down-menu ul li {
  border-bottom: #ccc 1px solid;
}

ul.drop-down-menu ul li:last-child {
  border-bottom: none;
}

ul.drop-down-menu ul ul {
  /*第三層以後的選單出現位置與第二層不同*/
  z-index: 999;
  top: 10px;
  left: 90%;
}

ul.drop-down-menu ul {
  /*隱藏次選單*/
  display: none;
}

ul.drop-down-menu li:hover > ul {
  /* 滑鼠滑入展開次選單*/
  display: block;
}
</style>
