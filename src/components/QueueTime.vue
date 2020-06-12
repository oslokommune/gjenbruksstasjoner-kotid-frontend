<template>
  <div class="queue-time">
    <div v-for="queueTimeArray in mockData" :key="queueTimeArray.station_id">
      <h1>{{ queueTimeArray.station_name }}</h1>
      <div v-if="showQueue">
        <div v-if="queueIsFull">
          <h2>
            Køen går rundt hjørnet. Køtiden vil være minst
            {{ roundedUpTime }} minutter
          </h2>
        </div>
        <h2 v-else>Køtiden er {{ roundedUpTime }} minutter</h2>
      </div>
      <div v-else>
        <h2>Vi har ingen estimert køtid for øyeblikket</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Queue-time",
  data() {
    return {
      time: "10.73525436",
      mockData: [
        {
          station_id: 42,
          station_name: "Haraldrud gjenbruksstasjon",
          is_open: true,
          queue: {
            is_full: false,
            expected_time: 0.5,
            min_time: 0.35,
            max_time: 0.65,
            updated_at: "2020-06-11T13:23:33.642441",
          },
        },
      ],
    };
  },
  computed: {
    roundedUpTime: function() {
      return Math.round(this.time);
    },
    showQueue() {
      return this.mockData[0].queue !== null;
    },
    queueIsFull() {
      return this.mockData[0].queue.is_full === true;
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
