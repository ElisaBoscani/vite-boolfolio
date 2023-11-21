import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import BlogView from "./views/BlogView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import ErrorPage from "./views/ErrorPage.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/blog", component: BlogView },
  { path: "/about", component: AboutView },
  { path: "/contacts", component: ContactsView },
  {
    path: "/singleproject/:slug",
    name: "singleproject",
    component: SingleProjectView,
  },
  { path: "/errorPage", component: ErrorPage, name: "ErrorPage" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export { router };
