'use strict'

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    context: path.resolve('./www/scripts'),
    entry: './app',
    output: {
        filename: './bundle.js',
        path: './bin',
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            { test: /\.(png|woff|otf|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=200000&name=[name].[ext]' }
        ]
    },
    plugins: [
    ],
    postcss() {
        return [autoprefixer];
    },
}