/*
* Path 模块
* */
const Path = require('path');
//编译文件存放目录
let path_dist = Path.join(__dirname,'dist');
//生产开发代码
let path_src = Path.join(__dirname,'src');
/*
* extract-text-webpack-plugin 模块
* 抽取css打包
* */
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 实例化 extract-text-webpack-plugin
let cssIndependent = new ExtractTextWebpackPlugin({
    filename:'css/[name].css'
});

/*
* postcss-loader 模块  + autoprefixer 模块
* css 前缀自动补全
* 额外配置文件 postcss.config.js （此配置文件无需手动require）
* */

/*
*  html-webpack-plugin 模块
*  输出新的 .html 文件
*  1、自动添加 link/script 引入打包的资源文件
*  2、处理html模板 ( 需要 ejs-compiled-loader 模块 )
* */
const HtmlWebpackPlugin = require('html-webpack-plugin');
//实例处理 src/index.html
let htmlIndex = new HtmlWebpackPlugin({
    template: Path.join(path_src,'index.html') //待处理的.html模板路径
    ,title:'html-webpack-plugin 新生成的html文件' //传递给.html的参数title，通过 <%= htmlWebpackPlugin.options.title %> 调用
    ,testData:[1,2,3,'haha'] //测试是否能传递自定义数据给.html模板 （证明是可以的）
    ,showErrors:true
});
module.exports = {
    entry: {
        index: './src/index.js'
    }
    , output: {
        path:path_dist,
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
                        'css-loader',
                        'postcss-loader'
                    ]
                })
            }
            ,{
                test:/\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    }
    ,plugins:[
        cssIndependent //css抽取打包
        ,htmlIndex //处理生成新的.html
    ]
}