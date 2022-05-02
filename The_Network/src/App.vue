<template>
  <header class="sticky-top">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-md-8">
        <Navbar />
      </div>
    </div>
  </header>
  <main>
    <div class="row">
      <div class="col-md-4 d-none d-lg-block">
        <SideBar />
        <div class="container ads" v-if="ads">
          <Ad v-for="a in ads" :key="a.id" :ad="a" />
        </div>
      </div>
      <div class="col-md-8">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import SideBar from "./components/SideBar.vue";
import { adsService } from "./services/AdsService";
export default {
  components: { SideBar },
  name: "App",
  setup() {
    onMounted(async () => {
      await adsService.getAds();
    });
    return {
      ads: computed(() => AppState.ads),
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.ads {
  max-width: 80%;
}
</style>
