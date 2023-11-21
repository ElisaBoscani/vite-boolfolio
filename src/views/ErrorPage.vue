<script>
export default {
  name: " ErrorPage",

  data() {
    return {};
  },
};
</script>
<template>
  <main>
    <div class="p-3 mt-3 d-flex justify-content-center">
      <router-link
        :to="{ name: 'home' }"
        class="text-decoration-none fw-bold p-3"
      >
        Back to Home page</router-link
      >
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url(../assets/404-15.svg);
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
}
main a {
  background-color: rgb(151 140 255);
  color: white;
  border-radius: 8px;
}
</style>
