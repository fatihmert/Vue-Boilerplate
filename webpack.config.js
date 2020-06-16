const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');

const path = require('path');

module.exports = {
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: [
        nodeExternals()
    ]
};
