const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: [/\.css$/, /\.scss$/],
                use: [{
                    loader: "style-loader" // Creates style nodes from JS strings
                }, {
                    loader: "css-loader" // Translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // Compiles SASS to CSS
                }],
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        extractSass
    ]
};