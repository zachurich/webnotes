var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

// Output to build folder
var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

var DefinePlugin = new webpack.DefinePlugin({
  FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY)
});

module.exports = {
  entry: ["./app/config/Root.js"],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/app/icons/[name].[ext]"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/react", "@babel/preset-env"],
          plugins: ["react-html-attrs", "transform-class-properties"]
        }
      }
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "output_bundle.js"
  },
  plugins: [HtmlWebpackPluginConfig, DefinePlugin]
};
