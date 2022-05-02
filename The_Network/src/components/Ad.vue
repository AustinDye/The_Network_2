<template>
  <div class="ads-card my-5">
    <div class="ad-sceen">
      <p>sponsored</p>
      <img :src="ad.tall" class="img-fluid" />
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
  border: rgba(0, 0, 0, 0.625) 0.4em double;
  border-radius: 35px;
  box-shadow: #ac9c9c 5px 5px, #a09494 10px 10px, #9b8b8b 15px 15px,
    #8b7e7e 20px 20px, #756a6a 25px 25px, #655e5e 30px 30px, #5a5252 35px 35px,
    #000000 37px 37px, #3f443ceb 43px 43px, #141513eb 45px 45px;
}
img {
  border-radius: 30px;
  border: rgba(92, 88, 88, 0.611) 20px double;
  margin-top: 4%;
  margin-bottom: 4%;
}
</style>
