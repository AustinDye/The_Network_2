<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <div class="card d-flex">
        <div class="row">
          <div class="col-12">
            <span class="d-flex" id="user-info">
              <img
                :src="post.creator.picture"
                v-if="post.creator.picture"
                class="rounded"
                @click="getProfileById()"
              />
              <p class="pt-4">{{ post.creator.name }}</p>
              <h4>Fame: {{ post.likes.length }}</h4>
              <div class="btn">
                <i
                  class="mdi fs-5"
                  :class="
                    isLiked
                      ? 'mdi-arrow-up-bold btn'
                      : 'mdi-arrow-up-bold-outline btn'
                  "
                  @click="likePost(post.id)"
                ></i>
              </div>
            </span>
            <div class="container d-block">
              <h3 class="">{{ post.body }}</h3>
              <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid" />
            </div>
            <div class="trash" v-if="post.creator.id == account.id">
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
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { router } from "../router.js";
import { likesService } from "../services/LikesService.js";
export default {
  props: {
    post: {
      type: Object,
      required: true,
      isLiked: false,
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
      async getProfileById() {
        try {
          await profilesService.getProfileById(props.post.creator.id);
          router.push({
            name: "User",
            params: { id: props.post.creator.id },
          });
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },
      async likePost() {
        try {
          await likesService.likePost(props.post);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },

      account: computed(() => AppState.account),
      isLiked: computed(() => {
        const found = props.post.likes.find((p) => p.id == AppState.account.id);
        console.log(props.post.body, found);
        return found !== undefined;
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.mdi {
  margin: 1%;
  border: rgb(0, 0, 0) 3px solid;
  box-shadow: 3px 3px 1px rgb(0, 0, 0);
}

.mdi-arrow-up-bold {
  background-color: rgb(184, 179, 134);
}
.mdi-arrow-up-bold:hover {
  background-color: rgb(255, 255, 255);
}

.card {
  box-shadow: 2px 2px 4px #394446a4;
  background-color: #fefbe7;
}

.rounded {
  box-shadow: 3px 3px 1px rgb(0, 0, 0);
  border: rgb(0, 0, 0) 1px solid;
  max-width: 20%;
  margin: 5%;
}

.rounded:hover {
  transition: 300ms;
  box-shadow: none;
}
</style>
