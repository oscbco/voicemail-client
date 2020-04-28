# voicemail-client
A take home assignment for Focus Services

## Milestone 1

# CORS
The API server was configured without the `Authorization` header in its `access-control-allow-headers` setting. This made basic auth from the browser difficult to do. (Unless browser extensions that disable CORS are installed).

# Getting an auth_token
  Instead of basic authentication, the `X-Auth-Token` header could be used.

  To get a valid auth token the following steps were taken:

  - Get the `api_key` for the account using curl
  - Use it to generate an `auth_token`
  - Use this `auth_token` in the SPA to authenticate, this token expires and is hardcoded, so that's an issue.
  - You'd normally use your username and password associated to the account to authenticate, but these were not given.
