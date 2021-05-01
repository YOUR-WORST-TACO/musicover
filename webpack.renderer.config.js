const plugins = require('./webpack.plugins');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
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
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
    },
    plugins: plugins
}
