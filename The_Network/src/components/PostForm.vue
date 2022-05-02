<template>
  <div class="row my-5">
    <div class="col-12">
      <p class="share-button">
        <i
          class="btn mdi mdi-note-edit-outline fs-1 text-warning bg-dark rounded-pill"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          share
        </i>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body m-5">
          <form @submit.prevent="handleSubmit()" class="mx-5">
            <div class="form-group">
              <div class="mb-3">
                <label for="body" class="form-label">Post body</label>
                <textarea
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

            <button type="submit" class="btn" data-bs-dismiss="">
              Create Post ✏
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

<style lang="scss" scoped>
.btn:hover {
  box-shadow: rgba(240, 46, 170, 0.4) 2px 2px, rgba(240, 46, 170, 0.3) 4px 4px,
    rgba(240, 46, 170, 0.2) 6px 6px;
}

.mdi {
  border: rgba(76, 99, 76, 0.723) 0.4em double;
  box-shadow: #ac9c9c 5px 5px, #a09494 10px 10px, #9b8b8b 15px 15px,
    #8b7e7e 20px 20px, #292c27 22px 22px;
}
</style>
