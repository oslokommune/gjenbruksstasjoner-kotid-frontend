let conf;

if (process.env.VUE_APP_STAGE === "production") {
  conf = {
    urls: {
      // TODO: change to prodURL
      // PROD URL
      // queueData: "https://api.data.oslo.systems/gjenbruksstasjoner-kotid",
      queueData: "https://f6n6peblsc.execute-api.eu-west-1.amazonaws.com/dev/",
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
