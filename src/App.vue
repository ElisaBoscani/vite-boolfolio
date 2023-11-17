<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      blog_api: "http://127.0.0.1:8000/api/project",
      posts: [],
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
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<template>
  <!-- <h1 v-for="post in posts" :key="post.id">{{ post.title }}</h1> -->

  <h2>Current Page: {{ posts.current_page }}</h2>
  <div>
    <div v-for="post in posts.data" :key="post.id" class="card">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <!-- Altre proprietà di 'post' -->
    </div>
  </div>
</template>

<style></style>
