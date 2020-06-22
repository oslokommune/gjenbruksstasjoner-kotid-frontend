<template>
  <div class="queue-images">
    <div v-for="imageObjects in images" :key="imageObjects.station_id">
      <p>
        {{ imageObjects.station_id }}
      </p>
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
    images: Array,
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
