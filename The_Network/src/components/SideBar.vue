<template>
  <div class="component" v-if="accountUser.name">
    <img :src="accountUser.picture" alt="" class="img-fluid rounded-pill" />
    <h2>{{ accountUser.name }}</h2>
    <p>{{ accountUser.bio }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      accountUser: computed(() => AppState.accountUser),
    };
  },
};
</script>

<style lang="scss" scoped></style>
