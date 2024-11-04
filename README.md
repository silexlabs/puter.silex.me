## Silex instances by Silex Labs

This instance is a fork of the [Silex editor](https://github.com/silexlabs/editor.silex.me) wich implements [`silex-puter` plugin](https://github.com/silexlabs/silex-puter) in order to serve Silex to puter users with the puter integration.

This repo holds the code for the [public Silex instance hosted for free by Silex Labs foundation](https://puter.silex.me) and [The v3 instance too](https://v3.silex.me).

This is also a good example on how to customize Silex. And it has a Dockerfile for easy deployment

[🌐 **Try Silex on Puter**](https://puter.silex.me) – Fully integrated and ready for your next website project!

## Features

This code adds features to the editor specific to our instance (in `index.js` and `index.pug`):

* [x] Puter plugin
* [x] Automatic deployment to [CapRover](https://caprover.com/) (see the captain-definition file and the file `.github/workflows/caprover.yml`)
* [x] Disable cloud services and hosting providers with env vars
* [ ] Onboarding: Send an email with [brevo the 1st time we see a user](https://brevo.co/) + use Silex notification system to guide users through the first steps
* [ ] Silex CMS plugin + build 11ty
* [ ] Analytics: add a tag in Silex editor

## Environment variables

You can set the following environment variables to customize the instance:

| Name | Description | Type | Default value |
|------|-------------| ---- |---------------|
| `BREVO_API_KEY` | The API key for the Brevo service (onboarding, optional) | string | - |
| `BREVO_API_URL` | The API URL for the Brevo service (onboarding, optional) | string | - |
| `BREVO_LIST_ID` | The list ID for the Brevo service (onboarding, optional) | string | - |

## Support

[Please use the main Silex repository](https://github.com/silexlabs/Silex/) for docs and issues
