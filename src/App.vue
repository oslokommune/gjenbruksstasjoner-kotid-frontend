<template>
  <div id="queue-predictions">
    <QueueTime />
  </div>
</template>

<script>
import QueueTime from "./components/QueueTime.vue";

export default {
  name: "App",
  components: {
    QueueTime,
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
