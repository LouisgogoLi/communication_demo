import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/index.html",
    name: "index",
    redirect: { name: "Home" },
  },
  {
    path: "/PropsApp",
    name: "PropsApp",
    component: () => import("@/views/propsApp/PropsApp.vue"),
  },
  {
    path: "/PropsAndEmit",
    name: "PropsAndEmit",
    component: () => import("@/views/propsAndEmit/PropsAndEmit.vue"),
  },
  {
    path: "/DirectiveTest",
    name: "DirectiveTest",
    component: () => import("@/views/directiveTest/DirectiveTest.vue"),
  },
  {
    path: "/SlotTest",
    name: "SlotTest",
    component: () => import("@/views/slotTest/SlotTest.vue"),
  },
  {
    path: "/SlotTest/slotElTable",
    name: "SlotElTable",
    component: () => import("@/views/slotTest/slotElTable/SlotElTable.vue"),
  },
  {
    path: "/ProvideInjectTest",
    name: "ProvideInjectTest",
    component: () => import("@/views/provideInjectTest/ProvideInjectTest.vue"),
  },
  {
    path: "/elementTest/tableView",
    name: "tableView",
    component: () => import("@/views/elementTest/tableView/TableView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

import {
  showElLoading,
  hideElLoading,
} from "@/common/methodCommon/elGlobalMethod";

router.beforeEach(() => {
  showElLoading();
  setTimeout(() => {
    hideElLoading();
  }, 1000);
});

export default router;
