# Gjenbruksstasjoner Køtid Frontend

Vue-app that shows information from [Gjenbruksstasjoner Køtid API](https://github.oslo.kommune.no/origo-dataplatform/gjenbruksstasjoner-kotid-api)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for development

```
npm run build
```

### Compiles and minifies for production

```
npm run build-prod
```

### Deploy dev

Needs saml2aws

```
make login-dev
export AWS_PROFILE=saml-origo-dev
npm run deploy-dev
```

Endpoint: https://ok-origo-dataplatform-public-dev.s3-eu-west-1.amazonaws.com/gjenbruksstasjoner-vue-test/index.html

### Deploy prod

```
make login-prod
export AWS_PROFILE=saml-dataplatform-prod
npm run deploy-prod
```

Endpoint: https://ok-origo-dataplatform-public-prod.s3-eu-west-1.amazonaws.com/gjenbruksstasjoner-vue-prod/index.html

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
