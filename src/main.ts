import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import VueSmoothScroll from "vue3-smooth-scroll";

createApp(App).use(MotionPlugin).use(VueSmoothScroll).mount("#app");
