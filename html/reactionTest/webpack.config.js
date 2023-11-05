// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 8080,
    hot: true,
    devMiddleware: {publicPath: "/dist"},
    static: {directory: path.resolve(__dirname)}
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  entry: {
    app: path.join(__dirname, "main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
};
