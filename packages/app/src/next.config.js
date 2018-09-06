const withTranspile = require('next-plugin-transpile-modules')

module.exports = withTranspile({
  transpileModules: ["@vlek"],
  webpack: (config, {defaultLoaders}) => {
    defaultLoaders.babel.options.plugins = [["react-native-web", { commonjs: true }]]

    return config
  }
})
