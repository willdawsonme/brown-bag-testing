const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    devtool: 'eval-cheap-module-source-map',

    plugins: [new webpack.HotModuleReplacementPlugin()],

    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    devServer: {
        port: 8080,
        overlay: {
            errors: true,
            warnings: true,
        },
        hot: true,
        historyApiFallback: true,
        stats: 'minimal',
    },
});

/* eslint @typescript-eslint/no-var-requires:0 */
/* eslint import/no-extraneous-dependencies:0 */
