const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');

var outputDir = path.join(__dirname, './public/');

module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    index: './src/index.js'
  },
  output: {
    path: outputDir,
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./public']
            }
          }
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin(),
    new WebpackDeleteAfterEmit({
      globs: ['index.js', 'style.css']
    })
  ]
};
