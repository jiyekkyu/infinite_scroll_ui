import { createRouter, createWebHistory } from "vue-router";
import Scroll from "../views/Scroll.vue";

const routes = [
  {
    path: "/",
    name: "Scroll",
    component: Scroll,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
