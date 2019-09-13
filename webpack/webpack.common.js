const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',

    output: {
        filename: 'bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: ['url-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],

    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['node_modules', path.resolve(__dirname, '../node_modules')],
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    },
};

/* eslint @typescript-eslint/no-var-requires:0 */
/* eslint import/no-extraneous-dependencies:0 */
