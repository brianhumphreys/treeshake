// webpack.config.js
module.exports = {
    entry: [
      './src/index.js',
      './src/index.css'
    ],
    output: {
      path: __dirname + "/public",
      publicPath: '/',
      filename: 'bundle.js',
    },
    target: 'node',
    mode: "production",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true,
              }
            }
          ]
        }
      ]
    }
  };