const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

let config = merge(common, {
  mode: 'production',
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
    new webpack.EnvironmentPlugin({
      production: true
    })
  ]
});

module.exports = config;
