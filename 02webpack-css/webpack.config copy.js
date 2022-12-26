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
                test: /\.css$/,   // 正则表达式
                // 1.loader的其中一种写法(语法糖)
                // loader: "css-loader"

                // 2.loader 的完整写法
                // use: [
                //     {
                //         loader: "css-loader",
                //         options: {

                //         }
                //     }]


                // 3.如果loader里面没有其他参数
                use: ['style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer")
                                ]
                            }
                        }
                    }
                ]  // 执行顺序是从后往前
            },
            {
                test: /\.less$/i,    // i 忽略大小写
                use: ['style-loader', 'css-loader', 'less-loader',]
            }
        ]

    }

}