<template>
  <div class="queue-estimations">
    <div class="title">
      <h1>Kø ved våre gjenbruksstasjoner</h1>
      <p>Bildene oppdaters hvert 10. minutt</p>
    </div>
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
.title {
  background-color: #034b45;
  color: #c7f6c9;
  padding: 30px;
}
p {
  text-align: center;
  margin-top: 10px;
}

h1 {
  text-align: center;
  margin-top: 10px;
}
</style>
