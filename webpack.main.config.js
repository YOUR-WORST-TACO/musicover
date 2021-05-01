module.exports = {
    mode: 'development',
    entry: './src/main/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src/,
                use: [{loader: 'ts-loader'}]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
}
