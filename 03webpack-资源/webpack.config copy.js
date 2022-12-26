const path = require('path')

module.exports = {
    entry: "./src/main.js",  // 配置入口文件，默认找src下面的index.js，如果不是src下面的index.js,则需要额外配置
    // 配置出口文件
    output: {
        // __dirname  获取当前文件所在的路径
        //  path.resolve(__dirname, "./build")路径拼接
        path: path.resolve(__dirname, "./build"), // 指定路径，要求是一个绝对路径
        filename: "bundle.js"  // 打包的文件名  默认是main.js

    },
    // 模块配置
    module: {
        rules: [
            {
                test: /\.(css|less)$/,   // 正则表达式 匹配css  或 less
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        //在webpack5中，如果使用了file-loader， css-loader 识别到 background 的 url 背景图片地址后，会返回一个 require(图片地址)，但是，这个 require 图片默认返回的是一个 esMoudle ,
                        // 所以css-loader需要加个配置参数：
                        options: {
                            esModule: false
                        }
                    },
                    "postcss-loader",
                ]  // 执行顺序是从后往前
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // outputPath: 'img', //配置图片打包输出路径
                        // name: "[name].png"  // 输出文件名  保留原文件名  不加这个配置，打包的文件名是用hash表示的
                        // name: "[name]_[hash:6].[ext]" // 输 出文件名，原文件名拼接hash 6表示hash值的6位 [ext]使用原文件的扩展名
                        name: "img/[name]_[hash:6].[ext]"  // 如果不想用outputPath，可以直接在name前面拼接
                    }
                }
            }
        ]

    }

}