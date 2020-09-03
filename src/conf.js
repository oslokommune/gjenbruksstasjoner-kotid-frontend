let conf;

if (process.env.VUE_APP_STAGE === "production") {
  conf = {
    urls: {
      // PROD URL
      queueData: "https://api.data.oslo.systems/gjenbruksstasjoner-kotid",
    },
  };
} else {
  conf = {
    urls: {
      // DEV URL
      queueData: "https://api.data-dev.oslo.systems/gjenbruksstasjoner-kotid",
    },
  };
}

export default conf;
