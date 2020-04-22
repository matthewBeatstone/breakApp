var webpack = require('webpack')

module.exports = {
  entry  : './src/index.js',
  output : {
    filename: 'index.js',
    path    : `/home/matteo/breakApp/UserUI/public`
  },
  module : {
    rules: [
      {
        test   : /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions      : ['.js', '.jsx'],
    moduleExtensions: ['node_modules']
  }
}
