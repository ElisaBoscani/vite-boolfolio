import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsListView from "./views/ProjectsListView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import ErrorPage from "./views/ErrorPage.vue";
import TechnologesProjectView from "./views/TechnologesProjectView.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/list", component: ProjectsListView, children: [] },
  { path: "/about", component: AboutView },
  { path: "/contacts", component: ContactsView },
  {
    path: "/technologes/:slug",
    name: "technologes",
    component: TechnologesProjectView,
  },
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
