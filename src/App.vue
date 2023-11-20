<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  name: "App",
  data() {
    return {
      FontAwesomeIcon,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style></style>
