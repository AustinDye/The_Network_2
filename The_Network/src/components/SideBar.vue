<template>
  <div
    class="component mx-4 mt-1 sticky-top"
    v-if="accountUser.name"
    id="account-card"
  >
    <div class="d-flex flex-direction-row">
      <img :src="accountUser.picture" alt="" class="img-fluid rounded ps-5" />
      <Login />
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
  border: none;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px;
  background-color: #fffff4;
  min-height: 5%;
}
</style>
