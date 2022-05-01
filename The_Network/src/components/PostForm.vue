<template>
  <div class="row">
    <div class="col-6"></div>
    <div class="col-6">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          New Post +
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <form @submit.prevent="handleSubmit()" class="mx-5">
            <div class="form-group">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Post Title..."
                  v-model="editable.title"
                />
              </div>
              <div class="mb-3">
                <label for="body" class="form-label">Post body</label>
                <input
                  type="text"
                  class="form-control"
                  id="body"
                  placeholder="What's on your mind?"
                  v-model="editable.body"
                />
              </div>
              <div class="mb-3">
                <label for="imgUrl" class="form-label">Image URL:</label>
                <input
                  type="text"
                  class="form-control"
                  id="imgUrl"
                  placeholder="Image URL..."
                  v-model="editable.imgUrl"
                />
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-success"
              data-bs-dismiss="modal"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop.js";
import { postService } from "../services/PostService.js";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async handleSubmit() {
        try {
          await postService.createPost(editable.value);
        } catch (error) {
          console.error("[CREATE_POST_ERROR]", error.message);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
