const path = require('path')


module.exports = {

    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                type: "javascript/auto",
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tex'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    }
}