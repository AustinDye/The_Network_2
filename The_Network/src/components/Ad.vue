<template>
  <div class="row justify-content-center">
    <div class="col-12">
      <img :src="ad.banner" class="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ad: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
