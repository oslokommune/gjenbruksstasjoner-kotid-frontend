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

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploy dev

Needs saml2aws

```
make login-dev
export AWS_PROFILE=saml-origo-dev
npm run deploy-dev
```

### Deploy prod

```
make login-prod
export AWS_PROFILE=saml-dataplatform-prod
npm run deploy-prod
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
