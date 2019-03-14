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
      devtool: "source-map",
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
          {
            test: /\.scss$/,
            use: [{
              loader: "style-loader"
            }, {
              loader: "css-loader", options: {
                sourceMap: true
              }
            }, {
              loader: "sass-loader", options: {
                sourceMap: true
              }
            }]
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
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
