var debug        = process.env.NODE_ENV !== "production";
var webpack      = require('webpack');
var path         = require('path');
var variables    = require('postcss-simple-vars')
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var minmax       = require('postcss-media-minmax');
var nested       = require('postcss-nested');
var $            = require('jquery');

// Output to build folder
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
      "webpack/hot/only-dev-server",
      "./app/config/Root.js"
  ],
  module: {
    loaders: [
      {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  postcss: function () {
    return [
      precss,
      minmax,
      nested,
      autoprefixer
    ];
  },
  output: {
    path: __dirname + "/build",
    filename: "output_bundle.js"
  },
  plugins: [HtmlWebpackPluginConfig]
};
