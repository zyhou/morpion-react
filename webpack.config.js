const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
    new HTMLWebpackPlugin({
        title: 'Morpion React',
        template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
    }),
];

if (process.env.NODE_ENV === 'analyse') {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    context: srcPath,
    target: 'web',
    entry: {
        client: `${srcPath}/index.js`,
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: distPath,
        filename: '[name].js',
        publicPath: '/assets/',
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { compact: false },
            },
        ],
    },
    plugins,
    devtool: 'source-map',
}
