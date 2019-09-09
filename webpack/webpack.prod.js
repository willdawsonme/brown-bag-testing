const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});

/* eslint @typescript-eslint/no-var-requires:0 */
/* eslint import/no-extraneous-dependencies:0 */
