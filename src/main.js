import { createApp } from "vue";
import App from "./App.vue";
//javascript宣告命名 props宣告命名
//import App from "./PropsApp.vue";
//props emit 如何傳值 ref寫法測試
//import App from "./PropsAndEmit.vue";
//directive 資料夾放置位置與寫法
//import App from "./DirectiveTest.vue";
//slot 寫法測試
//import App from "./SlotTest.vue";
//Provide,Inject寫法
//import App from "./ProviedInjectTest.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

import { fnToDoDirective } from "@/common/directiveCommon";
fnToDoDirective(app);

app.use(store).use(router).mount("#app");
