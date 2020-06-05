<template>
  <div class="queue-time">
    <h1>Køtid - gjenbruksstasjon</h1>
    <h2>{{ roundedUpTime }} minutter</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Queue-time",
  data() {
    return {
      time: "10.73525436",
      url: "venter på url",
    };
  },
  computed: {
    roundedUpTime: function() {
      return Math.round(this.time);
    },
  },

  methods: {
    getEstimatedQueueTime(url) {
      axios
        .get(url)
        .then((response) => {
          this.time = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
