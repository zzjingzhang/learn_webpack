const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')  // webpack内置插件，不需要单独安装
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // 设置模式
    // development  开发阶段设置
    // production  打包上线的时候设置
    mode: "development",  // 开发环境打包不压缩代码
    // 设置source-map，建立js映射文件，方便调试代码和错误
    devtool: 'source-map', // 设置开发时的一些工具
    entry: "./src/main.js",  // 配置入口文件，默认找src下面的index.js，如果不是src下面的index.js,则需要额外配置
    // 配置出口文件
    output: {
        // __dirname  获取当前文件所在的路径
        //  path.resolve(__dirname, "./build")路径拼接
        path: path.resolve(__dirname, "./build"), // 指定路径，要求是一个绝对路径
        filename: "js/bundle.js"  // 打包的文件名  默认是main.js

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
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     use: {
            //         loader: 'url-loader',  // 可以将图片转为base64
            //         options: {
            //             // outputPath: 'img', //配置图片打包输出路径
            //             // name: "[name].png"  // 输出文件名  保留原文件名  不加这个配置，打包的文件名是用hash表示的
            //             // name: "[name]_[hash:6].[ext]" // 输 出文件名，原文件名拼接hash 6表示hash值的6位 [ext]使用原文件的扩展名
            //             name: "img/[name]_[hash:6].[ext]", // 如果不想用outputPath，可以直接在name前面拼接
            //             limit: 100 * 1024 // 单位是byte   100 * 1024小于100kb的图片才转换为base64编码
            //         }
            //     }
            // }
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset',  // 可以替代url-loader 和 file-loader(webpack5之后)  不需要安装
                generator: {
                    filename: "img/[name]_[hash:6][ext]",// 拿到的扩展名已经包含了'.' ,所以前面不需要再拼接'.'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024  // 文件打包转换为base64大小限制 100 * 1024小于100kb的图片才转换为base64编码
                    }
                }
            },
            // {
            //     test: /\.eot|ttf|woff$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: 'font/[name]_[hash:6].[ext]'
            //         }
            //     }
            // },
            {
                test: /\.eot|ttf|woff$/,  // 字体文件打包
                type: 'asset/resource',  // asset/resource 对应的是file-loader
                generator: {
                    filename: 'font/[name]_[hash:6][ext]'
                }
            }
        ]

    },
    plugins: [

        // 一个个的插件对象
        new CleanWebpackPlugin(),  // 重新打包会删除之前旧的打包文件
        // new HtmlWebpackPlugin()  // 打包生成index.html文件
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'title'  // 修改index.html里面的title
        }),  // 自定义index.htm模板

        new DefinePlugin({
            BASE_URL: "'./'"
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'public',  //复制的文件
                // to: "./",  // 复制到哪个文件夹下面  一般省略
                globOptions: {
                    ignore: ['**/index.html']  //复制的时候需要忽略的文件
                }
            }] // patterns  匹配
        })
    ]

}