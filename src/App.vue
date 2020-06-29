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

<style lang="scss">
@import "~@/assets/sass/fontStyle.scss";
@import "~@/assets/sass/variables";

#queue-predictions {
  font-family: "Oslo Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: $oslo-dark-blue;
  background-color: $background-color;
}
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
}
h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
}
p {
  font-size: 1.25rem;
}
</style>
