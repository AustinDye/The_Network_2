<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <SideBar />
        </div>
        <div class="col-9">
          <router-view />
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4"></div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import SideBar from "./components/SideBar.vue";
export default {
  components: { SideBar },
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
