const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/app/index.tsx", // Dẫn tới file index.js ta đã tạo
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  resolve: {
    extensions: ['*', '.ts', '.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s[x]$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.[sc][as]ss$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Demo config webpack"
    }),
    new Dotenv()
  ]
};
