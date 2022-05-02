<template>
  <div class="container">
    <div class="row d-flex">
      <div class="col-12 py-5">
        <div class="container">
          <div v-if="!editing" class="row d-flex">
            <div class="col-3">
              <div class="card">
                <div class="container"></div>
              </div>
              <i
                class="selectable ms-2 mdi mdi-pencil"
                @click="editing = true"
              ></i>
            </div>
            <div class="col-9"></div>
          </div>
          <form v-else @submit="editAccount">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="helpId"
                placeholder="Name.."
                v-model="account.name"
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
                v-model="account.picture"
              />
            </div>
            <div class="mb-3">
              <label for="bio" class="form-label">Bio</label>
              <input
                type="text"
                class="form-control"
                id="bio"
                placeholder="Write about yourself..."
                v-model="account.bio"
              />
            </div>
            <div class="mb-3">
              <label for="github" class="form-label">Github</label>
              <input
                type="text"
                class="form-control"
                id="github"
                placeholder="Github..."
                v-model="account.github"
              />
            </div>
            <div class="mb-3">
              <label for="class" class="form-label">Class</label>
              <input
                type="text"
                class="form-control"
                id="class"
                placeholder="SEASON/YEAR... "
                v-model="account.class"
              />
            </div>
            <button class="btn btn-danger" @click="editing = false">
              Cancel
            </button>
            <button class="btn btn-success ms-2">Submit</button>
          </form>
        </div>
        <div id="user-info">
          <img :src="profile.picture" alt="" class="img-fluid rounded-pill" />
          <h2>{{ profile.name }}</h2>
          <p>{{ profile.bio }}</p>
        </div>
        <div v-if="userPosts">
          <Post v-for="p in userPosts" :key="p.id" :post="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

import Pop from "../utils/Pop.js";

import { AppState } from "../AppState.js";
import { profilesService } from "../services/ProfilesService.js";
import { accountService } from "../services/AccountService.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    const route = useRoute();
    const editing = ref(false);
    onMounted(async () => {
      try {
        await profilesService.getProfilePosts(route.params.id);
        await profilesService.getProfileById(route.params.id);
      } catch (error) {
        Pop.toast(error.message);
      }
    });
    return {
      editing,
      accountUser: computed(() => AppState.accountUser),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      userPosts: computed(() => {
        return AppState.posts.filter((p) => p.creatorId == route.params.id);
      }),
      async editAccount() {
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
