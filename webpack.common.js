const path = require('path');
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const { config } = require('process');


const config = {

    devServer: {
        hot: true,
        port: 3030,
        static: path.resolve(__dirname, 'dist')
    },

    entry: {
        main: './src/assets/js/main.js',
                
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Main page",
            filename: "index.html",
            template: "./src/templates/main.html",
            chunks: ['main'],
            minify: false,
        }),

        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[id].[contenthash].css',
        }),

        
    ],

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                        'postcss-loader' ]
            },

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.(png|svg|gif|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/images',
                        esModule: false,
                    }
                }
            },

        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizerPlugin,
            new TerserPlugin

        ]
    },
}

module.exports = config
