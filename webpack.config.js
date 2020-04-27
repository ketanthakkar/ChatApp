const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env) => {
    const isProduction = env ? env.prod : false;
    
    return {
        entry: './src/index.tsx',
        devtool: isProduction ? "none" : "source-map",
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                components: path.resolve(__dirname, './src/components/')
            }
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'build.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts|tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        // disable type checker - we will use it in fork plugin
                        transpileOnly: true
                    },
                    exclude: /dist/,
                },
                {
                    test: /\.scss$/,
                    use: [ { loader: 'style-loader' }, { loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'sass-loader' } ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new webpack.DefinePlugin({
                'process.env.development': !!(env && !env.production),}),
            new MiniCssExtractPlugin(),
        ],
        devServer: {
            port: 8000,
            disableHostCheck: true
        }
    }
};