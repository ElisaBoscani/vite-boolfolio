<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
import { store } from "../store.js";
export default {
  name: "SingleProjectView",

  data() {
    return {
      store,
      blog_api: `http://127.0.0.1:8000/api/project/${this.$route.params.slug}`,
      project: {},
      FontAwesomeIcon,
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    getProjectView() {
      axios
        .get(this.blog_api)
        .then((response) => {
          if (response.data.success) {
            this.project = response.data.result;
            store.loading = false;
          } else {
            this.$router.push({ name: "ErrorPage" });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getProjectView();
  },
};
</script>
<template>
  <div v-if="!loading">
    <div class="container">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-4 justify-content-center"
      >
        <ProjectCard :project="project" :key="project.id"></ProjectCard>
      </div>
    </div>
  </div>
  <div v-else>
    loading...
  </div>
</template>
