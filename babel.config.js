module.exports = api => {
    const env = api.env();
    const isTest = api.cache(() => env === 'test');

    const presets = [
        [
            '@babel/env',
            {
                targets: isTest ? { node: 'current' } : { browsers: 'defaults' },
                modules: isTest ? 'commonjs' : false,
            },
        ],
        '@babel/typescript',
        '@babel/react',
    ];

    const plugins = [
        ['babel-plugin-styled-components', { ssr: false }],
        'babel-plugin-lodash',
        'react-hot-loader/babel',
    ];

    return {
        presets,
        plugins,
    };
};
