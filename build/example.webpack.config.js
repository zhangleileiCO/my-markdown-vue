const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        port: 8088,
        publicPath: "/"
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
    plugins: [new VueLoaderPlugin()],
    resolve: {
        extensions: ['.vue', '.js', 'css']
    }
}
