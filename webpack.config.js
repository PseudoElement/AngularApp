const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
