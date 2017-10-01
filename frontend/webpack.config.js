'use strict'
const webpack = require('webpack');
const ExtractorTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/app.jsx',
    output: {
        path: __dirname + '/../static/',
        filename: 'bundle.js',
        publicPath: './static'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "components"),
            path.resolve(__dirname, "node_modules"),
        ]

    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new ExtractorTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
        })
    ]
}
