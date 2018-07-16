const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "frontend/src/index.js"),
  output: {
    path: path.join(__dirname, 'frontend/static/frontend/'),
    filename: 'main.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.scss$/,
      loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
