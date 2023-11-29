<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProjectCard from "../components/ProjectCard.vue";
import AppMain from "../components/AppMain.vue";
import axios from "axios";
import { store } from "../store.js";

export default {
  name: "ProjectsListView",

  data() {
    return {
      FontAwesomeIcon,
      store,
    };
  },

  components: {
    ProjectCard,
  },
  methods: {},

  mounted() {
    store.getPage(store.blog_api);
    store.getTechnology(store.tech_url);
  },
};
</script>
<template>
  <section id="project">
    <h1 class="p-2">Projects</h1>

    <div class="container">
      <div class="" aria-label="Default select example">
        <h5>
          Select technology
        </h5>
        <div class="dropdown d-inline-block ms-4">
          <button
            class="btn project_btn dropdown-toggle border border-black shadow"
            type="button"
            id="technologyfilter"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filtra per Categoria
          </button>
          <ul class="dropdown-menu border border-black shadow">
            <router-link
              class="dropdown-item"
              v-for="projects in store.technologies"
              :to="{ name: 'technologes', params: { slug: projects.slug } }"
            >
              {{ projects.name }}
            </router-link>
          </ul>
        </div>
      </div>
    </div>

    <main class="pt-3">
      <section v-if="store.projects">
        <div class="container">
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-4 justify-content-center"
          >
            <ProjectCard
              :project="project"
              v-for="project in store.projects.data"
              :key="project.id"
            ></ProjectCard>
          </div>
        </div>
      </section>
      <div v-else>
        Loading...
      </div>
    </main>

    <nav aria-label="Page navigation example ">
      <div class="d-flex justify-content-center gap-2 p-2">
        <div>
          <button
            v-if="store.projects.next_page_url"
            @click="store.prevPage(store.projects.prev_page_url)"
            class="project_btn btn border-black"
          >
            Previous
          </button>
        </div>
        <div>
          <button
            @click="store.nextPage(store.projects.next_page_url)"
            class="project_btn btn border-black"
          >
            Next
          </button>
        </div>
      </div>
    </nav>
  </section>
</template>
