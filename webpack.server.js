const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.argv[4] === '--prod';

const config = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  entry: {
    server: ['./src/server/server.js']
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/public',
    filename: '[name].js'
  },
  module: common.module,
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      client: path.resolve(__dirname, 'src/client'),
      server: path.resolve(__dirname, 'src/server')
    },
    extensions: ['.js']
  }
};

module.exports = config;
