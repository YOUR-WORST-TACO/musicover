// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/electron/index.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [{loader: 'ts-loader'}]
                }
            ]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'electron.js'
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
    },
    {
        mode: 'development',
        entry: './src/app/index.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [{loader: 'ts-loader'}]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    use: [{loader: 'url-loader'}]
                },
            ]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'react.js'
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];
