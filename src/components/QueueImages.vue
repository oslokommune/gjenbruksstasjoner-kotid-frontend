<template>
  <div class="queue-images" v-if="image">
    <div v-if="image.comment">
      <p>{{ image.comment }}</p>
    </div>
    <p>
      {{ image.src }}
    </p>
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
</style>
