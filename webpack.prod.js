// const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanOptions = {
  verbose: true,
  dry: false
};

let config = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle-[hash:6].js'
  },
  optimization: {
    runtimeChunk: 'single', // enable 'runtime' chunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin('./dist', cleanOptions),
    // new webpack.EnvironmentPlugin({
    //   production: true
    // })
  ]
});

module.exports = config;
