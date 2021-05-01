const plugins = require('./webpack.plugins');
const CopyWebpackPlugin = require("copy-webpack-plugin");


const testHandler = (path, obj) => {
    const found = path.search('native_modules');
};

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
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
    },
    plugins: plugins
}
