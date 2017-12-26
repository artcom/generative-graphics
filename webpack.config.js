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
    rules: [
      {
        oneOf: [
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {}
              }
            ],
            exclude: /node_modules/
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.json$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "json-loader"
              }
            ]
          },
          {
            test: /\.glsl$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "raw-loader"
              }
            ]
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: publicPath,
    port: 5000,
    host: "0.0.0.0"
  }
}
