
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

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
      'coffee-script': path.resolve(__dirname, 'vendor/coffee-script-1.10.0.min.js')
    }
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
