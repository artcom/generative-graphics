var path = require("path")
var webpack = require("webpack")

var publicPath = path.join(__dirname, "public")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: publicPath,
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.json$/, exclude: /node_modules/, loader: "json-loader" },
      { test: /\.glsl$/, exclude: /node_modules/, loader: "raw-loader" }
    ]
  },
  devServer: {
    contentBase: publicPath,
    port: 5000,
    host: "0.0.0.0"
  }
}
