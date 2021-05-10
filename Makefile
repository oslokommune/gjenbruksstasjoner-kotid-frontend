.DEV_PROFILE := okdata-dev
.PROD_PROFILE := okdata-prod

.PHONY: login-dev
login-dev:
ifndef OKDATA_AWS_ROLE_DEV
	$(error OKDATA_AWS_ROLE_DEV is not set)
endif
	saml2aws login --role=$(OKDATA_AWS_ROLE_DEV) --profile=$(.DEV_PROFILE)

.PHONY: login-prod
login-prod:
ifndef OKDATA_AWS_ROLE_PROD
	$(error OKDATA_AWS_ROLE_PROD is not set)
endif
	saml2aws login --role=$(OKDATA_AWS_ROLE_PROD) --profile=$(.PROD_PROFILE)
