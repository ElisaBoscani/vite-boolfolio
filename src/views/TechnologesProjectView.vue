<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
import { store } from "../store.js";
export default {
  name: "TechnologesProjectView",

  data() {
    return {
      store,
      technology: null,
      loading: true,
      tech_url: `http://127.0.0.1:8000/api/technologes/${this.$route.params.slug}`,
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    getTechnology() {
      axios
        .get(this.tech_url)
        .then((response) => {
          if (response.data.success) {
            this.technology = response.data.result;
            this.loading = false;
            console.log(this.technology);
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
    this.getTechnology(this.tech_url);
  },
};
</script>
<template>
  <h1>Sono nelle technologie</h1>
  <h1 class="display-5 fw-bold">{{ $route.params.slug }} Archive</h1>
  <div v-if="technology" class="container">
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-4 justify-content-center"
    >
      <ProjectCard
        :project="project"
        v-for="project in technology.projects"
        :key="project.id"
      ></ProjectCard>
    </div>
  </div>
  <div v-else>
    loading...
  </div>
</template>
