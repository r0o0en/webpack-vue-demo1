//css 单独抽取插件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 实例化 extract-text-webpack-plugin
let cssIndependent = new ExtractTextWebpackPlugin({
    filename:'./dist/css/[name].css'
});
module.exports = {
    entry: {
        index: './src/index.js'
    }
    , output: {
        filename: './dist/js/[name].js'
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