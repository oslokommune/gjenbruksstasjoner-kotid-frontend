<template>
  <div class="queue-images" v-if="image">
    <div v-if="image.comment">
      <p>{{ image.comment }}</p>
    </div>
    <div class="crop">
      <img :src="image.src" :alt="image.alt" :class="image.imageclass" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Queue-Images",
  data() {
    return {};
  },
  props: {
    image: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/assets/sass/fontStyle.scss";
.queue-images {
  font-family: "Oslo Light", Helvetica, Arial, sans-serif;
}
p {
  text-align: center;
  margin-top: 10px;
}

h2 {
  text-align: center;
  margin-top: 10px;
}
.full-size {
  max-width: 1400px;
  height: auto;
}
.crop {
  display: inline-block;
  width: 90%;
  max-width: 1400px;
  overflow: hidden;
}
.crop > img {
  width: 90%;
}
.crop-image-gronmo {
  margin: -30% 0 -15% 0;
}
@media screen and (max-width: 600px) {
  .crop {
    width: 100%;
  }
}
</style>
