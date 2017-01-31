var debug        = process.env.NODE_ENV !== "production";
var webpack      = require('webpack');
var path         = require('path');

// Output to build folder
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
      "./app/config/Root.js"
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass" ,"autoprefixer?browsers=last 4 versions"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/app/icons/[name].[ext]"
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
  output: {
    path: __dirname + "/build",
    filename: "output_bundle.js"
  },
  plugins: [HtmlWebpackPluginConfig]
};
