<template>
  <div class="queue-time">
    <h1>Køtid - gjenbruksstasjon</h1>
    <h2>Tid</h2>
  </div>
</template>

<script>
export default {
  name: "Queue-time",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@/assets/sass/fontStyle.scss";
.queue-time {
  font-family: "Oslo Light", Helvetica, Arial, sans-serif;
}
h1 {
  text-align: center;
  margin-top: 60px;
}

h2 {
  text-align: center;
  margin-top: 60px;
}
</style>
