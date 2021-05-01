const plugins = require('./webpack.plugins');

module.exports = {
    mode: 'development',
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
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    externals: {
        'better-sqlite3': 'commonjs better-sqlite3',
    },
    plugins: plugins
}
