const path         = require('path');
const autoprefixer = require('autoprefixer');
const env          = require('./lib/env');
const HtmlPlugin   = require('html-webpack-plugin');

let config = {
    entry  : './src/client/index.js',
    output : {
        path     : path.resolve(__dirname, 'dist/client'),
        filename : 'bundle.js'
    },
    devTool   : '#cheap-inline-source-map',
    devServer : {
        outputPath : path.join(__dirname, 'dist/client'),
        port       : process.env.DEV_PORT || 9080
    },
    module : {
        loaders : [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                loader  : 'babel-loader',
                query   : {
                    presets : ['es2015', 'react']
                }
            },
            {
                test    : /\.scss$/,
                loaders : ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test   : /\.gif$/,
                loader : 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test   : /\.jpg$/,
                loader : 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test   : /\.png$/,
                loader : 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test   : /\assets\/.*.svg$/,
                loader : 'url-loader?limit=0&mimetype=image/svg+xml'
            },
            {
                test   : /\.otf$/,
                loader : 'url-loader?limit=100000&mimetype=application/font-otf'
            },
            {
                test   : /\.woff2?$/,
                loader : 'url-loader?limit=100000&mimetype=application/font-woff'
            },
            {
                test   : /\.ttf$/,
                loader : "url?limit=100000&mimetype=application/octet-stream"
            },
            {
                test   : /\.eot$/,
                loader : 'url-loader?limit=100000&mimetype=application/font-svg'
            }
        ]
    },
    sassLoader : {
        includePaths : [
            path.resolve(__dirname, "src/client/styles")
        ]
    },
    postcss : [
        autoprefixer({
            browsers : ['last 2 versions']
        })
    ],
    plugins : [
        new HtmlPlugin({
            title    : env.shared.appTitle,
            template : path.resolve(__dirname, 'src/client') + '/index.ejs',
            // favicon  : path.resolve(__dirname, 'assets/img') + '/favicon.ico',
            inject   : 'body'
        })
    ]
};

module.exports = config;
