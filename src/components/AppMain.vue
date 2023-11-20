<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "AppMain",

  data() {
    return {
      blog_api: "http://127.0.0.1:8000/api/project",
      posts: null,
      pages: [],
      FontAwesomeIcon,
    };
  },
  methods: {
    getPosts() {
      axios
        .get(this.blog_api)
        .then((response) => {
          this.posts = response.data.result;
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
  <main class="pt-3">
    <section v-if="posts">
      <div class="container">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-4 justify-content-center"
        >
          <div
            class="card"
            style="width: 16rem;"
            v-for="post in posts.data"
            :key="post.id"
          >
            <img
              :src="getImageUrl(post.cover_image)"
              class="card-img-top pt-3"
              alt="..."
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">
                {{ post.content }}
              </p>
              <div class="d-flex justify-content-evenly">
                <a :href="post.url_git" class="btn btn-dark"
                  ><font-awesome-icon
                    icon="fa-brands fa-github"
                    size="lg"
                    style="color: #ffffff;"
                  />
                </a>
                <a :href="post.url_view" class="btn btn-dark"
                  ><font-awesome-icon
                    icon="fa-regular fa-eye"
                    size="lg"
                    style="color: #ffffff;"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-else>
      Loading...
    </div>
  </main>
</template>
<style>
img {
  height: 200px;
  object-fit: contain;
}
</style>
