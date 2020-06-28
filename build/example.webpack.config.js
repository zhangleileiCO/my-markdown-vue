const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: "./example/index.js"
    },
    output: {
        path: path.resolve(process.cwd(), "./example/dist"),
        filename: "[name][hash:7].js"
    },
    devServer: {
        contentBase: path.join(process.cwd(), './example/dist'),
        port: 8080,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|build)/,
                use: {loader: "babel-loader", options: {presets: ['@babel/preset-env']}}
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./example/index.html"
        }),
        new VueLoaderPlugin()],
    resolve: {
        extensions: ['.vue', '.js', 'css']
    }
}
