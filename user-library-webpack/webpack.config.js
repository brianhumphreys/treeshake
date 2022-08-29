const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js", 
    a: "./src/a.js", 
    b: "./src/b.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true,
    minimize: false,
  },
  devtool: false,
};