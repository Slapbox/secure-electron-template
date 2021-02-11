const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

module.exports = merge(base, {
  devtool: 'inline-source-map',
  entry: path.join(process.cwd(), 'app', 'electron', 'preload.js'),
  target: 'electron-preload',
  output: {
    path: path.join(process.cwd(), 'app', 'dist'),
    filename: 'preload.build.js',
  },
  node: {
    __dirname: false,
    __filename: false,
  }
})