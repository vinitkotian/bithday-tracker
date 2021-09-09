const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "birthday-tracker.bundle.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?js$|\.?jsx$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  devtool: "source-map",
};
