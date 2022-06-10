const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
    //   app: './assets/js/script.js',
    //   events: './assets/js/events.js',
    //   schedule: './assets/js/schedule.js',
    //   tickets: './assets/js/tickets.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: `${__dirname}/dist`
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                name(file) {
                  return '[path][name].[ext]';
                },
                publicPath(url) {
                  return url.replace('../', '/assets/');
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: 'static'
    //   }),
      new WebpackPwaManifest({
        name: "Budget_Tracking",
        short_name: "Budget",
        description: "An app that allows you to track your income and expenses.",
        start_url: "./public/index.html",
        background_color: "#01579b",
        theme_color: "#ffffff",
        fingerprints: false,
        inject: false,
        icons: [{
          src: path.resolve("./public/icons/icon-512x512.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          destination: path.join("assets", "icons")
        }]
      })
    ],
    mode: 'development'
  };
  
  module.exports = config;
