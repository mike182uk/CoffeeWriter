
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'sourcemaps',
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    pathinfo: true,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'coffee-script': path.resolve(__dirname, 'src/vendor/coffee-script-1.10.0.min.js')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src', 'app'),
        loader: 'babel',
        query: require('./babel.dev')
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
