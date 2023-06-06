import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";
import VueSmoothScroll from "vue3-smooth-scroll";

import "@/scss/mainStyles.scss";
import App from "./App.vue";

import Main from "@/components/Main/Main.vue";
import Courses from "@/components/Courses/Courses.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Main", component: Main },
    { path: "/Courses", name: "Courses", component: Courses },
  ],
});

createApp(App).use(router).use(MotionPlugin).use(VueSmoothScroll).mount("#app");
