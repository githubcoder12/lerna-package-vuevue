const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../packages/lpackage/index.ts"),
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "lpackage",
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: "vue-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [new VueLoaderPlugin()],
};
