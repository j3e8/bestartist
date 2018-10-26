var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'src');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
  entry: APP_DIR + '/js/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use : ['babel-loader']
      }/*,
      {
        test: /\.scss$/,
        include: APP_DIR,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }*/
    ]
  }/*,
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "bundle.css"
    })
  ]*/
};

module.exports = config;
