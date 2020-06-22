<template>
  <div id="queue-predictions">
    <QueueEstimations />
  </div>
</template>

<script>
import QueueEstimations from "./components/QueueEstimations.vue";
export default {
  name: "App",
  components: {
    QueueEstimations,
  },
};
</script>

<style>
@import "~@/assets/sass/fontStyle.scss";
#queue-predictions {
  font-family: "Oslo Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: black;
  background-color: white;
}
</style>
