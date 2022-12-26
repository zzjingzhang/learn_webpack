const path = require('path')

module.exports = {
    entry: "./src/main.js",  // 配置入口文件，默认找src下面的index.js，如果不是src下面的index.js,则需要额外配置
    output: {
        // __dirname  获取当前文件所在的路径
        //  path.resolve(__dirname, "./build")路径拼接
        path: path.resolve(__dirname, "./build"), // 指定路径，要求是一个绝对路径
        filename: "bundle.js"  // 打包的文件名  默认是main.js

    }  // 配置出口文件

}