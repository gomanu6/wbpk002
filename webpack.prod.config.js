const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const config = {

mode: 'production',
devtool: false,


output: {
    filename: "assets/js/[name].[contenthash].js"
},

plugins: [
    new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash].css'
    })
]

}

module.exports = merge(common, config);

