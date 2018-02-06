/*
* Path 模块
* */
const Path = require('path');
//编译文件存放目录
let dist = Path.join(__dirname,'dist');
/*
* extract-text-webpack-plugin 模块
* 抽取css打包
* */
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 实例化 extract-text-webpack-plugin
let cssIndependent = new ExtractTextWebpackPlugin({
    filename:'css/[name].css'
});

module.exports = {
    entry: {
        index: './src/index.js'
    }
    , output: {
        path:dist,
        filename: 'js/[name].js'
    }
    , module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
            ,{
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader'
                    ]
                })
            }
            ,{
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    }
    ,plugins:[
        cssIndependent
    ]
}