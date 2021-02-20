const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ['.ts']
    }
};
