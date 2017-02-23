var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  //context: __dirname,

  entry: {
    main: [
      "./assets/index",
    ],
  },

  output: {
    path: path.resolve("./edsi_portal/static/bundles/"),
    filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: "./webpack-stats.json"})
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],

  },

  resolve: {
    modulesDirectories: ["node_modules", "bower_components"],
    extensions: ["", ".js", ".jsx"]
  }
};
