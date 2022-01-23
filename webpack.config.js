const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/pluginWebpack5').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devtool: false, // 'source-map', // eval-source-map
    // mode: 'development',
    devServer: {
        port: 9000,
        // server: 'https',
        host: '0.0.0.0',
        historyApiFallback: true,
        hot: true, // hot: 'only',
        // liveReload: false,
        // open: {
        //     target: 'http://127.0.0.1:9000'
        // },
        // static: [
        //     {
        //         directory: path.join(__dirname, 'src'),
        //     }
        // ],
        proxy: {

        },
        client: { // 允许在浏览器中设置日志级别
            reconnect: true, // 告诉 dev-server 它应该尝试重新连接客户端的次数
            logging: 'error',
        },
        compress: true, // 启用 gzip compression
        onListening (devServer) {
        },
    },
    target: 'browserslist',
    stats: {
        // assets: false,
        // warnings: true,
        // builtAt: false,
        // assetsSpace: 15,
        // modulesSpace: 15,
        // depth: false,
        // outputPath: false,
        // reasons: false,
        // chunkModules: false,
        // modules: false,
        // version: true,
        // chunkGroupAuxiliary: true,
        // preset: 'minimal', // 预设规则
        // moduleTrace: true,
        // errorDetails: true,
        // children: false,
        // chunks: false,
        // chunkGroups: false,
        // chunkOrigins: false,
        // context: path.resolve(__dirname, '.yarn/cache/__virtual__/'),
        modulesSpace: 0,
        // groupAssetsByEmitStatus: false,
        // groupAssetsByInfo: false,
        // groupAssetsByExtension: false,
        // groupAssetsByPath: false,
        // groupModulesByAttributes: false,
        // groupModulesByCacheStatus: false,
        // groupModulesByExtension: false,
        // groupModulesByPath: false,
        //
        // groupModulesByLayer: false,
        // groupModulesByType: false,
        // groupReasonsByOrigin: false,
        // chunkGroupAuxiliary: false,
        // chunkGroupChildren: false,
        // chunkGroupMaxAssets: 5,
        // cachedAssets: false,
        // nestedModules: false,
        // nestedModulesSpace: 2,
        // groupModulesByAttributes: false,
        // dependentModules: false,
        // groupModulesByType: false,
        // cachedAssets: false,
        // source: true,
        // relatedAssets: true,
        // reasons: false,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            // localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [
                        /\.vue$/
                    ]
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: [
            '.vue',
            '.ts',
            '.js',
            '.tsx',
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProgressPlugin(),
        // new CompressionPlugin({
        //     algorithm: "gzip",
        // }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            // templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
            filename: 'index.html',
        })
    ]
};

module.exports = function (environment) {
    // WEBPACK_SERVE WEBPACK_BUILD
    console.log(environment)
    return config
};