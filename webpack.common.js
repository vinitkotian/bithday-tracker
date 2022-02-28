const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "[name].birthday-tracker-bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true, //Clean up old bundles before next build.
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "birthday-tracker",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /(\.js)|(\.jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /(\.css$)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".jsx", ".js"],
  },
};
