const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // Copy the assets folder to the output directory
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ],
    output: {
        filename: 'bundle-1.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            https: require.resolve('https-browserify'),
            url: require.resolve('url'),
            stream: require.resolve('stream-browserify'),
            http: require.resolve('stream-http'),
            os: require.resolve('os-browserify/browser'),
        },
    },
};
