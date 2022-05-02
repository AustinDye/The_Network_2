<template>
  <div class="shadow bg-light">
    <p>sponsored</p>
    <img :src="ad.tall" class="img-fluid" />
  </div>

  <br />
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

<style lang="scss" scoped>
img {
  max-height: 10%;
}
p {
  font-size: 0.75em;
  padding: 0;
  margin: 0;
}
</style>
