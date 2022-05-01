<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="card d-flex">
        <div class="row">
          <div class="col-12">
            <span class="d-flex">
              <img
                :src="post.creator.picture"
                v-if="post.creator.picture"
                class="rounded-pill"
                @click="getUserById()"
              />
              <p class="pt-4">{{ post.creator.name }}</p>
            </span>
            <div class="container d-block">
              <h3 class="m-5">{{ post.body }}</h3>
              <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid" />
            </div>
            <div class="trash">
              <i
                class="mdi mdi-delete-outline mdi-24px btn"
                @click="deletePost()"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { postService } from "../services/PostService.js";
import { usersService } from "../services/UsersService.js";
import Pop from "../utils/Pop.js";
import { router } from "../router.js";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      async deletePost() {
        try {
          if (await Pop.confirm()) await postService.deletePost(props.post.id);
        } catch (error) {
          console.error("[DELETE_POST_ERROR]", error.message);
          Pop.toast(error.message, "error");
        }
      },
      async getUserById() {
        try {
          await usersService.getUserById(props.post.creator.id);
          router.push({
            name: "User",
            params: { id: props.post.creator.id },
          });
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },

      account: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped>
.rounded-pill {
  max-height: 10%;
  max-width: 10%;
  margin: 5%;
}

img {
  border: black 3px solid;
}

.card {
  border: rgb(0, 0, 0) 3px solid;
  box-shadow: 7px 7px 1px rgb(0, 0, 0);
}
</style>
