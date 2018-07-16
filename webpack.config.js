const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "frontend/src/index.js"),
  output: {
    path: path.join(__dirname, 'frontend/static/frontend/'),
    filename: 'main.js',
  },
  devtool: 'source-maps',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
};
