<template>
  <header class="">
    <Navbar />
  </header>
  <main>
    <div class="row">
      <div class="col-md-3 d-none d-lg-block p-2 pt-4 my-4">
        <SideBar />
      </div>
      <div class="col-md-6">
        <router-view />
      </div>
      <div class="col-3">
        <div class="container ads mt-5 mx-5 px-5 ps-0" v-if="ads">
          <Ad v-for="a in ads" :key="a.id" :ad="a" />
        </div>
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
