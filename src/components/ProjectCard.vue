<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "ProjectCard",
  props: { project: Object },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card" style="width: 16rem;">
    <img
      :src="store.getImageUrl(project.cover_image)"
      class="card-img-top pt-3"
      alt="..."
    />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">{{ project.title }}</h5>

      <p class="card-text">
        {{ project.content }}
      </p>
      <div class="d-flex justify-content-evenly">
        <a :href="project.url_git" class="btn btn-dark"
          ><font-awesome-icon
            icon="fa-brands fa-github"
            size="lg"
            style="color: #ffffff;"
          />
        </a>
        <a :href="project.url_view" class="btn btn-dark"
          ><font-awesome-icon
            icon="fa-regular fa-eye"
            size="lg"
            style="color: #ffffff;"
        /></a>
      </div>
      <router-link
        :to="{ name: 'singleproject', params: { slug: project.slug } }"
        >View Post</router-link
      >
    </div>
  </div>
</template>
