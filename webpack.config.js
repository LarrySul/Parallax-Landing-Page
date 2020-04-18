const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /(node_modules|bower_components)/,

                use:
                {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,

                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,

                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        // New plugin
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copys the content of the existing index.html to the new /build index.html
            template: path.resolve('./index.html'),
        }),
    ]
}