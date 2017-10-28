'use strict'
const webpack = require('webpack');
const ExtractorTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/app.js',
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
                    presets: ['react', 'es2015', 'stage-2']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
                },
                {
                    loader: 'style-loader!css-loader',
                    test: /\.css$/
                },
            { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
        ]
    },
    plugins: [
        new ExtractorTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
        }),
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      })
    ]
}
