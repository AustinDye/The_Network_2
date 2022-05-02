<template>
  <div class="row">
    <div class="col-12">
      <div class="container-fluid">
        <PostForm />
        <div class="container" v-if="posts">
          <Post v-for="p in posts" :key="p.id" :post="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { postService } from "../services/PostService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

import { accountService } from "../services/AccountService.js";

export default {
  setup() {
    onMounted(async () => {
      try {
        await accountService.getAccount();
        await postService.getAllPosts();
      } catch (error) {
        console.error("[error prefix]", error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      activeUser: computed(() => AppState.activeUser),
      profile: computed(() => AppState.profile),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
