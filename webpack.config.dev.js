const commonConfig = require('./webpack.config.common')
const deepAssign = require('deep-assign')

module.exports = deepAssign({}, commonConfig, {
  devtool: 'sourcemaps'
})
