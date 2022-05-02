<template>
  <div class="component mx-4 mt-1" v-if="accountUser.name" id="account-card">
    <div class="d-flex flex-direction-row">
      <img :src="accountUser.picture" alt="" class="img-fluid rounded ps-5" />
      <h5>{{ accountUser.name }}</h5>
    </div>
    <p>{{ accountUser.bio }}</p>
    <p>{{ accountUser.email }}</p>
    <p>{{ accountUser.github }}</p>
    <p>{{ accountUser.class }}</p>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
export default {
  setup() {
    const route = useRoute();

    return {
      accountUser: computed(() => AppState.accountUser),
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped>
.rounded {
  max-width: 50%;
}

#account-card {
  box-shadow: 2px 2px 4px #394446a4;
  background-color: #fefbe7;
  min-height: 5%;
}
</style>
