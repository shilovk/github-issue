const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const PluginAnalizer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Github issue"
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[hash].css"
    }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|ts?)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
          failOnError: false,
        },
      },
      {
        test: /\.ts?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ]
  },
};
