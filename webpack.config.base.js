const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build', 'app')
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
