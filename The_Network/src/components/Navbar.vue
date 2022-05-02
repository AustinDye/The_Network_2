<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <i class="mdi mdi-vpn mdi-48px mx-5" />
        <h6>THE NETWORK</h6>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText"></div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.625);
  border-bottom: rgba(0, 0, 0, 0.625) 0.4em double;
  background-color: #ac9c9c;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}

.mdi {
  color: rgba(0, 0, 0, 0.516);
}
h6 {
  color: black;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
