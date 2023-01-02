const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.comm.config')
module.exports = merge(commonConfig, {
    mode: "development",  // 开发环境打包不压缩代码
    devtool: 'source-map', // 设置开发时的一些工具
    devServer: {
        hot: true, // 模块的热替换
        port: 8000,
        open: true,  // 是否打开浏览器  也可在pack.json里设置webpack serve --open
        compress: true,// 开启gzip压缩
        proxy: {
            "/api": {
                target: "http://localhost:8888",
                pathRewrite: {
                    "^/api": ''
                },
                secure: false,
                changeOrigin: true
            }
        }

    },
})