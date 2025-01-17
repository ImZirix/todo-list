const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');


const config = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module : {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
        open: true,
    },
    mode: 'development',
}

module.exports = config;