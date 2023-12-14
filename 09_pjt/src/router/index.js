import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SearchView from "@/views/SearchView.vue";
import VideoCartView from "@/views/VideoCartView.vue";
import DetailView from "@/views/DetailView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:keywords",
      name: "search",
      component: SearchView,
    },
    {
      path: "/cart",
      name: "cart",
      component: VideoCartView,
    },
    {
      path: "/detail/:videoDetailId",
      name: "detail",
      component: DetailView,
    },
  ],
});

export default router;
