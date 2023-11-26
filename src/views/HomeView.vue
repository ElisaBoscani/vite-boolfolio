<script>
import AppJumbo from "../components/AppJumbo.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "HomeView",

  data() {
    return {
      FontAwesomeIcon,
      store,
    };
  },
  components: {
    AppJumbo,
  },
  methods: {},
  mounted() {
    store.getPage(store.blog_api_last);
  },
};
</script>
<template>
  <AppJumbo></AppJumbo>
  <main>
    <!--   <h1 class="text-center">Welcome !!!</h1> -->

    <section v-if="store.projects" class="pt-5">
      <div class="container">
        <div
          class="card text-bg-dark"
          v-for="project in store.projects"
          :key="project.id"
        >
          <div class="img_container">
            <img
              :src="store.getImageUrl(project.cover_image)"
              class="card-img card_img_size object-fit-cover"
              alt="..."
            />
          </div>

          <div
            class="card-img-overlay d-flex flex-column justify-content-center"
          >
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
              {{ project.content }}
            </p>
            <div class="d-flex justify-content-center gap-3">
              <a :href="project.url_git" class="btn btn-dark btn-custom"
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
          </div>
        </div>
      </div>
    </section>
    <div v-else>
      Loading...
    </div>
  </main>
</template>
<style scoped>
h1 {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 5%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  font-size: 80px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.img_container {
  width: 100%;
  height: 400px;
}

.card_img_size {
  width: 100%;
  padding: -23px;

  height: inherit;
  object-position: center;
}
.btn-custom {
  transition: background-color 0.5s ease-in-out;
}

.btn-custom:hover {
  background-color: rgba(0, 123, 255, 0.8);
  transform: scale(1.2);
  box-shadow: 0 0 10px 5px rgba(0, 123, 255, 0.5);
}
</style>
