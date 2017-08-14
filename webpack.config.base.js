const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const deepAssign = require('deep-assign')
const coffeeScriptVersions = require('./coffeescript-versions')

const getCoffeeScriptAliases = () => {
  return coffeeScriptVersions.reduce((aliases, version) => {
    aliases[`coffeescript-${version}`] = path.resolve(__dirname, `vendor/coffeescript-${version}.min.js`)

    return aliases
  }, {})
}

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build', 'app')
  },
  resolve: {
    alias: deepAssign({}, {}, getCoffeeScriptAliases())
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src', 'app'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/app/index.html')
    })
  ]
}
