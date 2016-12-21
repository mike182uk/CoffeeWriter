const baseConfig = require('./webpack.config.base')
const deepAssign = require('deep-assign')

module.exports = deepAssign({}, baseConfig, {
  devtool: 'sourcemaps'
})
