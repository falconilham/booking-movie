import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/Detail.vue"),
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/History.vue"),
    },
    {
      path: "/book/:movieId",
      name: "book",
      component: () => import("../views/Booking.vue"),
    },
  ],
});

export default router;
