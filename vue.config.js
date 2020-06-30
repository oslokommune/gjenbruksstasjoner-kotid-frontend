let public_url;

if (process.env.VUE_APP_STAGE === "production") {
  public_url = "/gjenbruksstasjoner-vue-prod/";
} else {
  public_url = "/gjenbruksstasjoner-vue-test/";
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? public_url : "/",
};
