const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
const staticPath = path.resolve(__dirname, 'static');
const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(srcPath, 'app.ts'),
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                exclude: /static/
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // cacheGroupKey here is `vendors` as the key of the cacheGroup
                    name: 'vendor',
                    chunks: 'all'
                },
                chunks: 'all'
            },
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Angular Legacy App',
            filename: 'index.html',
            template: path.resolve(staticPath, 'index.html'),
            scriptLoading: 'defer'
        })
    ]
};