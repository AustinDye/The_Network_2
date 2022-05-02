<template>
  <div class="ads-card my-4">
    <div class="ad-sceen text-center">
      <p>sponsored</p>
      <img :src="ad.tall" class="img-fluid p-3 bg-dark" />
    </div>
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
.ads-card {
  background-color: #ac9c9c;
  border: rgba(56, 72, 56, 0.723) 0.4em double;
  border-radius: 35px;
  box-shadow: #ac9c9c 5px 5px, #a09494 10px 10px, #9b8b8b 15px 15px,
    #8b7e7e 20px 20px, #756a6a 25px 25px, #655e5e 30px 30px, #090808 37px 37px,
    rgb(161, 161, 36) 41px 41px, rgb(99, 99, 18) 54px 54px,
    rgb(161, 161, 36) 57px 57px, rgb(12, 12, 10) 66px 66px;
}
img {
  max-width: 80%;
  border-radius: 30px;
  border: rgba(76, 99, 76, 0.723) 0.4em double;
  margin-top: 4%;
  margin-bottom: 4%;
}
</style>
