<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "SingleProjectView",

  data() {
    return {
      blog_api: `http://127.0.0.1:8000/api/project/${this.$route.params.slug}`,
      project: {},
      FontAwesomeIcon,
    };
  },
  methods: {
    getPosts() {
      axios
        .get(this.blog_api)
        .then((response) => {
          this.project = response.data.result;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
<template>
  <div class="container">
    <img
      :src="getImageUrl(project.cover_image)"
      class="card-img-top pt-3"
      alt="..."
    />
    <h5 class="card-title">{{ project.title }}</h5>
  </div>
</template>
