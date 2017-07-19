const webpack = require('webpack');
const path = require("path");
const BundleTracker = require('webpack-bundle-tracker')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require('node-bourbon');

const package_name = 'project';
const src_path = package_name + '/' + package_name + '/static/src/';
const dist_path = package_name + '/' + package_name + '/static/dist/';

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, src_path + "script/site.js")
  ],

  output: {
    path: path.resolve(__dirname, dist_path),
    filename: "bundle-[hash].js",
    publicPath: 'http://localhost:3000/static/dist/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dist_path,
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    new webpack.NamedModulesPlugin(), // more readable module names
    new ExtractTextPlugin('site.css'),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: false,
              sourceMap: true
            }
          },
          {
            loader : 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [bourbon.includePaths, './node_modules/normalize-scss/sass']
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        use: {
          loader: 'file'
        }
      }
    ]
  }
};

