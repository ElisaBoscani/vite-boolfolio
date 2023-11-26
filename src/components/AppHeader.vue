<script>
import AppJumbo from "./AppJumbo.vue";
export default {
  name: "AppHeader",

  data() {
    return {};
  },
  components: {
    AppJumbo,
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink
                to="/"
                class="nav-link btn_color fw-medium fs-4"
                aria-current="page"
              >
                Home
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/list"
                class="nav-link fw-medium fs-4 btn_color"
                aria-current="page"
              >
                Projects List
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/about"
                class="nav-link fw-medium fs-4 btn_color"
                aria-current="page"
              >
                About
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/contacts"
                class="nav-link fw-medium fs-4 btn_color"
                aria-current="page"
              >
                Contacts
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="http://127.0.0.1:8000/login"
            class="text-decoration-none text-black"
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>
