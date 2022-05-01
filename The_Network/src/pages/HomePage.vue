<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-9">
      <div class="container-fluid">
        <PostForm />
        <div class="container" v-if="posts">
          <Post v-for="p in posts" :key="p.id" :post="p" />
        </div>
        <div class="container- fluid" v-if="ads">
          <Ad v-for="a in ads" :key="a.id" :ad="a" />
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
import { usersService } from "../services/UsersService.js";
import { accountService } from "../services/AccountService.js";
import { adsService } from "../services/AdsService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await adsService.getAds();
        await accountService.getAccount();
        AppState.account = AppState.activeUser;
        await postService.getAllPosts();
        await usersService.getUserById(AppState.account);
      } catch (error) {
        console.error("[error prefix]", error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      activeUser: computed(() => AppState.activeUser),
      ads: computed(() => AppState.ads),
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
