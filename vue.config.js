// TODO Change path for deploy-prod
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/gjenbruksstasjoner-vue-test/"
      : "/",
};
