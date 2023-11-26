import { createApp } from "vue";
import "../src/scss/app.scss";
import * as bootstrap from "bootstrap";
import App from "./App.vue";
import { router } from "./router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faEye, faGithub);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
