const path = require('path')
const findCacheDir = require('find-cache-dir')

module.exports = {
  babelrc: false,
  cacheDirectory: findCacheDir({ name: 'app/react' }),
  presets: [
    'babel-preset-latest',
    'babel-preset-react'
  ]
}
