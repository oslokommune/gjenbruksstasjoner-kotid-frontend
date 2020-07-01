<!---Shows image and queue-predictions ---->
<template>
  <div class="queue-time">
    <div
      class="queue-time-station"
      v-for="queueTimeObjects in queueEstimations"
      :key="queueTimeObjects.station_id"
    >
      <h2>{{ queueTimeObjects.station_name }}</h2>
      <QueueImages :image="getImageById(queueTimeObjects.station_id)" />
      <div v-if="stationIsOpen(queueTimeObjects)">
        <p>Estimert køtid:</p>
        <div v-if="showQueue(queueTimeObjects)">
          <div v-if="queueIsFull(queueTimeObjects)">
            <h3>
              Køen går utenfor våre beregninger. Køtiden vil være minst
              {{ hoursToMinutes(queueTimeObjects.queue.expected_time) }}
              minutter, men kanskje mer.
            </h3>
          </div>
          <h3 v-else>
            Køtiden er
            {{ hoursToMinutes(queueTimeObjects.queue.min_time) }} -
            {{ hoursToMinutes(queueTimeObjects.queue.max_time) }} minutter
          </h3>
          <p>
            Sist oppdatert: {{ convertDate(queueTimeObjects.queue.updated_at) }}
          </p>
        </div>
        <h3 v-else>Vi har ingen estimert køtid for denne gjenbruksstasjonen</h3>
      </div>
      <h3 v-else>Beklager, vi er nå stengt</h3>
      <hr />
    </div>
  </div>
</template>

<script>
import QueueImages from "./QueueImages.vue";
import Images from "@/images/images.json";
import axios from "axios";
import conf from "@/conf";

export default {
  name: "Queue-time",
  components: {
    QueueImages,
  },
  data() {
    return {
      images: Images.images,
      queueEstimations: [],
    };
  },
  /**
   * Get data every 10 minutes and 10 seconds 610000
   * because image and queue predictions are updated every 10 minutes
   */
  methods: {
    getEstimatedQueueTime(url) {
      axios
        .get(url)
        .then((response) => {
          this.queueEstimations = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * Return the image of the station with ID number `id`, or null if
     * no matching ID was found.
     */
    getImageById(id) {
      return this.images.find((img) => img.station_id === id) || null;
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
    stationIsOpen(obj) {
      return obj.is_open === true;
    },
  },
  mounted() {
    this.getEstimatedQueueTime(conf.urls.queueData);
    /**
     * Get data every 10 minutes and 10 seconds
     * because image and queue predictions are updated every 10 minutes
     */
    setInterval(() => {
      this.getEstimatedQueueTime(conf.urls.queueData);
    }, (10 * 60 + 10) * 1000);
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
hr {
  margin-top: 50px;
}
p {
  text-align: center;
  margin-top: 10px;
}

h3 {
  text-align: center;
  margin-top: 10px;
}
</style>
