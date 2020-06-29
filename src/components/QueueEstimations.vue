<template>
  <div class="queue-estimations">
    <header>
      <h1>Kø ved våre gjenbruksstasjoner</h1>
      <p>Bildene oppdateres hvert 10. minutt</p>
    </header>
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
<style scoped lang="scss">
@import "~@/assets/sass/fontStyle.scss";
@import "~@/assets/sass/variables";

.queue-estimations {
  font-family: "Oslo Light", Helvetica, Arial, sans-serif;
}
header {
  background-color: $oslo-dark-green;
  color: $oslo-light-green;
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
