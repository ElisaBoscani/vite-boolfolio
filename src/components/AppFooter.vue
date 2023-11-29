<script>
export default {
  name: "AppFooter",

  data() {
    return {};
  },
};
</script>
<template>
  <section id="footer" class="pt-3">
    <div class="d-flex justify-content-around pt-2">
      <ul class="list-unstyled p-3 text-white">
        <li>
          <RouterLink
            to="/list"
            class="nav-link fw-medium text-decoration-none"
            aria-current="page"
          >
            Projects List
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="nav-link fw-medium"
            aria-current="page"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contacts"
            class="nav-link fw-medium"
            aria-current="page"
          >
            Contacts
          </RouterLink>
        </li>
      </ul>
      <div class="pt-2">
        <span class="text-white">Follow me</span>
        <ul class="list-unstyled p-3 d-flex gap-3 align-items-center">
          <li>
            <a href="http://www.linkedin.com/in/elisa-boscani-3365861a4/">
              <font-awesome-icon
                icon="fa-brands fa-linkedin"
                size="xl"
                style="color: #ffffff;"
            /></a>
          </li>
          <li>
            <a href="https://github.com/ElisaBoscani"
              ><font-awesome-icon
                icon="fa-brands fa-github"
                size="lg"
                style="color: #ffffff;"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
