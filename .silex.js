const onboarding = require(__dirname + '/server-plugins/onboarding.js')
const StaticPlugin = require('@silexlabs/silex/dist/plugins/server/plugins/server/StaticPlugin').default
const node_modules = require('node_modules-path')
const { join } = require('path')

module.exports = async function (config) {
  await config.addPlugin(onboarding)

  initConnectors(config)

  config.addPlugin(StaticPlugin, {
    routes: [
      {
        route: '/js/client-plugins/',
        path: './client-plugins/',
      }, {
        route: '/js/silex-puter/',
        path: join(node_modules('@silexlabs/silex-puter'), '@silexlabs/silex-puter/dist/'),
      },
    ],
  })
}

function initConnectors(config) {
  config.setStorageConnectors([])
  config.setHostingConnectors([])
}
