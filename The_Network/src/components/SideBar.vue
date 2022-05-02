<template>
  <div class="component sticky-top" v-if="accountUser.name" id="account-card">
    <div class="bg-dark user-screen text-success">
      <div class="text-center pt-5">
        <Login />
        <img :src="accountUser.picture" alt="" class="img-fluid rounded" />
      </div>
      <div class="row d-block text-center">
        <div class="col- pt-3 ps-4">
          <p>{{ accountUser.class }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col ps-4 d-flex justify-content-between mx-4 me-5">
        <a :href="accountUser.github">
          <i class="mdi mdi-github fs-3 btn p-0 bg-info"></i>
        </a>
        <a :href="accountUser.github">
          <i class="mdi mdi-github fs-3 btn p-0 bg-warning"></i>
        </a>
        <a :href="accountUser.github">
          <i class="mdi mdi-github fs-3 btn p-0 bg-danger"></i>
        </a>
      </div>
    </div>
    <br />
    <div class="col-3"></div>
    <br />
    <div class="col-3"></div>
    <br />
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
  max-width: 40%;
  border: rgba(0, 0, 0, 0.625) 0.1em double;
}

#account-card {
  border: rgba(0, 0, 0, 0.625) 0.4em double;
  box-shadow: #ac9c9c 5px 5px, #a09494 10px 10px, #9b8b8b 15px 15px,
    #8b7e7e 20px 20px, #292c27 22px 22px;
  top: 5%;
  margin-left: 10%;

  background-color: #ac9c9c;
  border-radius: 35px;
}
.mdi {
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.625);
  border: rgba(0, 0, 0, 0.625) 0.4em double;
  border-radius: 20px;
}
.user-screen {
  border: rgba(173, 171, 171, 0.89) 1em double;
  border-radius: 70px;
  margin: 0.5em;
  font-size: 0.75em;
}
a {
  color: #151775;
}
</style>
