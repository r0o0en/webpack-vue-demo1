module.exports = {
    entry: {
        index: './src/index.js'
    }
    , output: {
        filename: './dist/[name].js'
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
            , {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}