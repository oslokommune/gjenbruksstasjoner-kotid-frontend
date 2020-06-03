<template>
  <div id="queue-predictions">
    <Queue />
  </div>
</template>

<script>
import Queue from "./components/Queue.vue";

export default {
  name: "App",
  components: {
    Queue,
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
