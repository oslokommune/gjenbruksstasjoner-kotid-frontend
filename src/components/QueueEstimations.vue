<template>
  <div class="queue-estimations">
    <h1>Køestimering</h1>
    <QueueTime />
  </div>
</template>

<script>
import QueueTime from "./QueueTime.vue";

export default {
  name: "Queue-Estimations",
  components: {
    QueueTime,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/assets/sass/fontStyle.scss";
.queue-estimations {
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
