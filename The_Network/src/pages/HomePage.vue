<template>
  <div class="row"></div>
  <div class="container-fluid">
    <PostForm />
    <div class="container" v-if="posts">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { postService } from "../services/PostService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
export default {
  setup() {
    onMounted(async () => {
      try {
        await postService.getAllPosts();
      } catch (error) {
        console.error("[error prefix]", error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      posts: computed(() => AppState.posts),
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
