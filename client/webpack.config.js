const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  return webpackMerge({
      mode,
      output: {
        filename: './bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "src/index.html",
          filename: "./index.html"
        }),
        new Dotenv(),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  )
};
