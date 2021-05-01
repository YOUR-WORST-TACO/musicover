module.exports = {
    mode: 'development',
    entry: './src/main/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src/,
                use: [{loader: 'ts-loader'}]
            },
            {
                test: /\.node$/,
                use: 'node-loader',
            },
            {
                test: /\.(m?js|node)$/,
                parser: { amd: false },
                use: {
                    loader: '@vercel/webpack-asset-relocator-loader',
                    options: {
                        outputAssetBase: 'native_modules',
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
    }
}
