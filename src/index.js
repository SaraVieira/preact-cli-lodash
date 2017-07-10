let LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
let babelPluginLodash = require('babel-plugin-lodash')
const preactCliLodash = (config, args = {}) => {
    if(!config) {
        throw Error('You need to pass the webpack config to preactCliLodash');
    }

    const loaders = config.module.loaders
    const plugins = config.plugins
    const babelLoader = loaders.filter(loader => loader.loader === 'babel-loader')[0]

    // Add babelPluginLodash;
    babelLoader.options.plugins.push(babelPluginLodash)

    // Add LodashModuleReplacementPlugin
    plugins.push(new LodashModuleReplacementPlugin(args))

    return config
}

module.exports = preactCliLodash
