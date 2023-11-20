import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import BlogView from "./views/BlogView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/blog", component: BlogView },
  { path: "/about", component: AboutView },
  { path: "/contacts", component: ContactsView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export { router };
