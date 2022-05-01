<template>
  <div class="container">
    <div v-if="!editing" class="row d-flex">
      <div class="col-3">
        <div class="card">
          <div class="container">
            <img :src="user.picture" alt="" class="img-fluid rounded-pill" />
            <h2>{{ user.name }}</h2>
          </div>
          <h5>Posts: {{ userPosts.length }}</h5>
          <p>{{ user.bio }}</p>
        </div>
        <div v-if="user.id == account.id">
          <i class="selectable ms-2 mdi mdi-pencil" @click="editing = true"></i>
        </div>
      </div>
      <div class="col-9">
        <div class="container" v-if="userPosts">
          <Post v-for="p in userPosts" :key="p.id" :post="p" />
        </div>
      </div>
    </div>
    <form v-else @submit="editUser">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="helpId"
          placeholder="Name.."
          v-model="user.name"
        />
      </div>
      <div class="mb-3">
        <label for="img" class="form-label">Picture</label>
        <input
          type="text"
          class="form-control"
          id="img"
          aria-describedby="helpId"
          placeholder="Img..."
          v-model="user.picture"
        />
      </div>
      <button class="btn btn-danger" @click="editing = false">Cancel</button>
      <button class="btn btn-success ms-2">Submit</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

import Pop from "../utils/Pop.js";

import { AppState } from "../AppState.js";
import { usersService } from "../services/UsersService.js";
import { accountService } from "../services/AccountService.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    const route = useRoute();
    const editing = ref(false);
    onMounted(async () => {
      try {
        await usersService.getUserPosts(route.params.id);
        await usersService.getUserById(route.params.id);
      } catch (error) {
        Pop.toast(error.message);
      }
    });
    return {
      editing,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      userPosts: computed(() => AppState.userPosts),
      async editUser() {
        try {
          await accountService.editAccount(AppState.account);
          Pop.toast("Updated User", "success");
          editing.value = false;
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  border: black 3px solid;
  box-shadow: 6px 3px 1px rgb(0, 0, 0);
}
</style>
