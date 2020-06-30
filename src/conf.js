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
      queueData: "https://f6n6peblsc.execute-api.eu-west-1.amazonaws.com/dev/",
    },
  };
}

export default conf;
