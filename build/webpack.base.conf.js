const path = require('path'); //node.js自带的路径参数
const APP_PATH = path.resolve(__dirname, '../src'); //源文件目录
const DIST_PATH = path.resolve(__dirname, '../dist'); //生产目录

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'js/[name].[hash].js', //使用hash进行标记
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                // 重新生成的 css 类名
                                localIdentName: '[name]__[local]-[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    }
};
