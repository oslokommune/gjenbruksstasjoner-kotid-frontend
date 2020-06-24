<template>
  <div class="queue-time">
    <div
      class="queue-time-station"
      v-for="queueTimeObjects in mockData"
      :key="queueTimeObjects.station_id"
    >
      <h1>{{ queueTimeObjects.station_name }}</h1>
      <!--Need some help here!  You may have an infinite update loop in a component render function.-->
      <QueueImages :image="getImageById(queueTimeObjects.station_id)" />
      <div v-if="showQueue(queueTimeObjects)">
        <div v-if="queueIsFull(queueTimeObjects)">
          <h2>
            Køen går utenfor våre beregninger. Køtiden vil være minst
            {{ hoursToMinutes(queueTimeObjects.queue.expected_time) }} minutter,
            men kanskje mer.
          </h2>
        </div>
        <h2 v-else>
          Køtiden er
          {{ hoursToMinutes(queueTimeObjects.queue.min_time) }} -
          {{ hoursToMinutes(queueTimeObjects.queue.max_time) }} minutter
        </h2>
        <p>
          Sist oppdatert: {{ convertDate(queueTimeObjects.queue.updated_at) }}
        </p>
      </div>
      <div v-else>
        <h2>Vi har ingen estimert køtid for øyeblikket</h2>
      </div>
    </div>
  </div>
</template>

<script>
import QueueImages from "./QueueImages.vue";
import Images from "@/images/images.json";
import axios from "axios";
export default {
  name: "Queue-time",
  components: {
    QueueImages,
  },
  data() {
    return {
      images: Images.images,
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
        {
          station_id: 10,
          station_name: "Grønmo gjenbruksstasjon",
          is_open: true,
          queue: {
            is_full: true,
            expected_time: 0.5,
            min_time: 0.35,
            max_time: 0.65,
            updated_at: "2020-06-11T13:23:33.642441",
          },
        },
        {
          station_id: 82,
          station_name: "Smestad gjenbruksstasjon",
          is_open: true,
          queue: null,
        },
      ],
    };
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
    getImageById(id) {
      return this.images.find((img) => img.station_id === id);
    },
    hoursToMinutes(hours) {
      return Math.round(hours * 60);
    },
    convertDate(date) {
      var convertedDate = new Date(date).toLocaleString("nb");
      return convertedDate;
    },
    showQueue(obj) {
      return obj.queue !== null;
    },
    queueIsFull(obj) {
      return obj.queue.is_full === true;
    },
    mounted() {
      // this.getEstimatedQueueTime(url)
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
.queue-time-station {
  margin-top: 60px;
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
