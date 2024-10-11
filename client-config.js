// This file is loaded by Silex when the user opens the editor
// Its path is set in the environment variable SILEX_CLIENT_CONFIG in index.js

//import SilexCms from './js/silex-cms/client.js'
import onboarding from './js/client-plugins/onboarding.js'
import puter from './js/silex-puter/client.js'

export default async function (config) {
    config.addPlugin(onboarding, {})
    config.addPlugin(puter, {})
    //config.addPublicationTransformers({
    //    transformPermalink: (path, type) => {
    //        // Replace /index.html with /
    //        return type === 'html' && path.endsWith('/index.html') ? path.replace(/index\.html$/, '') : path
    //    },
    //})
    //// CMS Plugin
    //config.addPlugin(SilexCms, {
    //    dataSources: [],
    //    imagePlugin: false,
    //    i18nPlugin: false,
    //    fetchPlugin: false,
    //    // enable11ty: false,
    //    view: {
    //        // disableStates: true,
    //        // disableAttributes: false,
    //        // disableProperties: true,
    //    },
    //})
    return {}
}
