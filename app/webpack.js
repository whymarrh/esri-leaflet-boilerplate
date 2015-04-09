"use strict";

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

/**
 * Returns a relative path from the current directory
 * @param {...string} segments - Path segments to join
 */
var relative = function relative(/* ...segments */) {
    return "." + path.sep + Array.prototype.join.call(arguments, path.sep);
};

module.exports = {
    entry: {
        app: relative("js", "index.js")
    },
    output: {
        path: path.join(__dirname, "assets"),
        filename: "[name].min.js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.jpe?g$|\.png$|\.svg$/,
            loader: "file-loader",
            query: {
                name: "[name].[ext]"
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].min.css")
    ]
};
