const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname,
    port: 4002
  }
});