const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')  // webpack内置插件，不需要单独安装
const { VueLoaderPlugin } = require('vue-loader/dist/index.js')

module.exports = {
    target: 'web', //打包环境
    entry: "./src/main.js",  // 配置入口文件，默认找src下面的index.js，如果不是src下面的index.js,则需要额外配置
    // 配置出口文件
    output: {
        // __dirname  获取当前文件所在的路径
        //  path.resolve(__dirname, "./build")路径拼接
        path: path.resolve(__dirname, "../build"), // 指定路径，要求是一个绝对路径
        filename: "js/bundle.js"  // 打包的文件名  默认是main.js

    },
    resolve: {
        extensions: ['.js', '.json', ".mjs", ".vue"],
        // 别名
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "js": path.resolve(__dirname, "..src/js")
        }

    },
    // 模块配置
    module: {
        rules: [
            {
                test: /\.(css|less)$/,   // 正则表达式 匹配css  或 less
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    "postcss-loader",
                ]  // 执行顺序是从后往前
            },
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
            {
                test: /\.eot|ttf|woff$/,  // 字体文件打包
                type: 'asset/resource',  // asset/resource 对应的是file-loader
                generator: {
                    filename: 'font/[name]_[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',   // 将es6语法转换为es5的语法

            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',

            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'title'  // 修改index.html里面的title
        }),  // 自定义index.htm模板
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new VueLoaderPlugin()
    ]

}