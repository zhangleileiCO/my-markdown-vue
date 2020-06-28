var path= require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'lib'),
        filename: 'markdown-vue.js',
        library: 'markdownVue',
        libraryTarget: 'umd'
    },
    module:{
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {loader: "babel-loader", options: {presets: ["@babel/preset-env"]}}
            },
            {
                test: /\.(vue)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.vue', '.js']
    }
}
