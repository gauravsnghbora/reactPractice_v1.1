// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules)/,
//         loader: "babel-loader",
//         options: {
//           present: ["@babel/env"],
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   resolve: { extension: ["*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/dist/",
//     filename: "bundle.js",
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "public/"),
//     port: 3000,
//     publicPath: "http://localhost:3000/dist/",
//     hotOnly: true,
//   },
//   Plugins: [new webpack.HotModuleReplacementPlugin()],
// };

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: [".*", ".js", ".jsx", ".d.ts"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    // contentBase: path.join(__dirname, "public/"),
    // port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    // hotOnly: true,
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3000,
    // publicPath
    devMiddleware: {
      publicPath: "https://localhost:3000/dist/",
    },
    // hotOnly
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
