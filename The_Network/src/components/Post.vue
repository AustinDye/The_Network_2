<template>
  <div class="row justify-content-center mb-5">
    <div class="col-12">
      <div class="card d-flex">
        <div class="row">
          <div class="col-12 ps-4 pe-4">
            <div
              class="container text-center bg-dark content-image text-success"
            >
              <span class="d-flex justify-content-between pt-2" id="user-info">
                <div class="d-flex">
                  <img
                    :src="post.creator.picture"
                    v-if="post.creator.picture"
                    class="rounded"
                    @click="getProfileById()"
                  />
                  <p class="ps-4">{{ post.creator.name }}</p>
                </div>
                <p>{{ post.createdAt.substring(0, 10) }}</p>
              </span>
              <h5 class="p-3">{{ post.body }}</h5>
              <img :src="post.imgUrl" v-if="post.imgUrl" class="img-fluid" />
              <h4>Fame: {{ post.likes.length }}</h4>
            </div>
            <div class="d-flex justify-content-between">
              <div class="btn">
                <i
                  class="mdi mdi-24px btn"
                  :class="isLiked ? 'mdi-star' : 'mdi-star-outline'"
                  @click="likePost(post.id)"
                ></i>
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
  box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.625);
  border: rgba(76, 99, 76, 0.723) 0.4em inset;
  border-radius: 30px;
  color: rgba(76, 99, 76, 0.723);
}
img {
  margin-top: 4%;
  margin-bottom: 4%;
}
.mdi-star {
  background-color: rgb(184, 179, 134);
}
.mdi-star:hover {
  background-color: rgb(255, 255, 255);
}

.card {
  background-color: #ac9c9c;
  border: rgba(56, 72, 56, 0.723) 0.4em inset;
  box-shadow: #ac9c9c 5px 5px, #a09494 10px 10px, #9b8b8b 15px 15px,
    #8b7e7e 20px 20px, #756a6a 25px 25px, #655e5e 30px 30px, #090808 37px 37px,
    rgb(161, 161, 36) 41px 41px, rgb(99, 99, 18) 54px 54px,
    rgb(161, 161, 36) 57px 57px, rgb(12, 12, 10) 66px 66px;
  border-radius: 35px;
}

.rounded {
  max-width: 2em;
  margin: 5%;
}

.rounded:hover {
  transition: 300ms;
  box-shadow: none;
}

.content-image {
  border-radius: 30px;
  border: rgba(76, 99, 76, 0.723) 0.4em inset;
  margin-top: 4%;
  margin-bottom: 4%;
}
</style>
