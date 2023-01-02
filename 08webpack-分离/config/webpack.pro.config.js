const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.comm.config')


module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: './public',  //复制的文件
                globOptions: {
                    ignore: ['**/index.html']  //复制的时候需要忽略的文件
                }
            }] // patterns  匹配
        }),
    ]
})