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
*  2、处理html模板 ( 需要 ejs-compiled-loader模块 或者ejs-html-loader/ejs-render-loder/ejs-loader )
* */
const HtmlWebpackPlugin = require('html-webpack-plugin');
//实例处理 src/index.html
let htmlIndex = new HtmlWebpackPlugin({
    template:'ejs-compiled-loader!'+Path.join(path_src,'index.html') //待处理的.html模板路径
    ,title:'html-webpack-plugin 新生成的html文件' //传递给.html的参数title，通过 <%= htmlWebpackPlugin.options.title %> 调用
    ,testData:['html-webapck-plugin模块','可以处理html模板','最基础就是用来编译时自动引入.css/.js文件','也能做一些传参处理模板的功能'] //测试是否能传递自定义数据给.html模板 （证明是可以的）
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
            ,{
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    extractCSS:true
                }
            }
        ]
    }
    ,plugins:[
        cssIndependent //css抽取打包
        ,htmlIndex //处理生成新的.html
    ]
    ,devServer: {//热更新
        contentBase: './src'
    }
    ,resolve: {//vue template 报错 npm默认导出的是运行时构建版本，不含 template 编辑器（template包含在独立构建/完整版本中）
        /*
        * https://segmentfault.com/q/1010000007071229?_ea=1231525 (2楼)
        * https://vuefe.cn/v2/guide/installation.html （搜索：如果你仍然希望使用完整版本，则需要在捆绑程序中配置别名：）
        * */
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};