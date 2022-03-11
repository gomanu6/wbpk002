const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
    mode: "development",
    devtool: 'source-map',

    output: {
        filename: "assets/js/[name].js"
    },

    optimization: {
        minimize: true,
    },

    plugins: [
        
    ]

}

module.exports = merge(common, config);

