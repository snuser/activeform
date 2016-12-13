'use strict'
var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, ''),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|jsx$/, loaders: ['babel'] }
    ]
  }
}
