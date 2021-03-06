<!---Shows image and queue-predictions ---->
<template>
  <div class="queue-time">
    <div
      class="queue-time-station"
      v-for="queueTimeObject in queueEstimations"
      :key="queueTimeObject.station_id"
    >
      <div class="show-station" v-if="showStation(queueTimeObject)">
        <h2>{{ queueTimeObject.station_name }}</h2>
        <QueueImages :image="getImageById(queueTimeObject.station_id)" />
        <div v-if="stationIsOpen(queueTimeObject)">
          <div v-if="showQueue(queueTimeObject)">
            <p>Estimert køtid:</p>
            <div v-if="queueIsFull(queueTimeObject)">
              <h3>
                Kameraet kan ikke se enden av køen. Køtiden vil være minst
                {{ hoursToMinutes(queueTimeObject.queue.expected_time) }}
                minutter, men kanskje mer.
              </h3>
            </div>
            <h3 v-else-if="queueIsEmpty(queueTimeObject)">
              Det er lite eller ingen kø
            </h3>
            <h3 v-else>
              Køtiden er
              {{ hoursToMinutes(queueTimeObject.queue.min_time) }} -
              {{ hoursToMinutes(queueTimeObject.queue.max_time) }} minutter
            </h3>
            <p class="date-text">
              Sist oppdatert:
              {{ convertDate(queueTimeObject.queue.updated_at) }}
            </p>
            <p class="beta-text">
              Køtidsestimeringen er under utprøving - avvik kan forekomme
            </p>
          </div>
        </div>
        <h3 v-else>Beklager, vi er nå stengt</h3>
        <hr />
      </div>
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
    showStation(obj) {
      return obj.show_station;
    },
    showQueue(obj) {
      return obj.queue !== null && obj.queue_prediction_enabled;
    },
    /**
     * Return true if the queue appears to be empty (i.e. both the
     * lower and upper estimated waiting times are 0 minutes).
     */
    queueIsEmpty(obj) {
      return obj.queue.min_time === 0 && obj.queue.max_time === 0;
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
     * Get data every 2 minutes to keep estimations updated.
     * Image and queue predictions are updated every 10 minutes.
     */
    setInterval(() => {
      this.getEstimatedQueueTime(conf.urls.queueData);
    }, (2 * 60) * 1000);
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
.beta-text {
  font-size: 0.86rem;
}
.date-text {
  font-size: 16px;
}
</style>
