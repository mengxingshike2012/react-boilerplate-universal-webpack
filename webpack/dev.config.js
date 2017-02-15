/* eslint-disable */
// Webpack config for development
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const assetsPath = path.resolve(__dirname, '../static/dist');
const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 3001;

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

const babelrc = fs.readFileSync('./src/client/.babelrc');
let babelrcObject = {};

try {
    babelrcObject = JSON.parse(babelrc);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}


const babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
let combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

const babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, { plugins: combinedPlugins });
delete babelLoaderQuery.env;

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        'main': [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?path=http://' + host + ':' + port + "/__webpack_hmr",
            './src/client/index.js',
        ],
    },
    output: {
        path: assetsPath,
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: 'http://' + host + ':' + port + '/dist/',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader?' + JSON.stringify(babelLoaderQuery)] },
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]','postcss-loader', 'less-loader?outputStyle=expanded&sourceMap']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]','postcss-loader', 'sass-loader?outputStyle=expanded&sourceMap']},
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
            { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
            'node_modules',
        ],
        extensions: ['.json', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, '..') + '/src/common/components',
            actions: path.resolve(__dirname, '..') + '/src/common/actions',
            api: path.resolve(__dirname, '..') + '/src/common/api',
            reducers: path.resolve(__dirname, '..') + '/src/common/reducers',
            utils: path.resolve(__dirname, '..') + '/src/common/utils',
            constants: path.resolve(__dirname, '..') + '/src/common/constants',
        },
    },
    plugins: [
        // hot reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.IgnorePlugin(/webpack-stats\.json$/),
        new webpack.DefinePlugin({
            IS_CLIENT: true,
            IS_SERVER: false,
            IS_DEVELOPMENT: true,
            ENABLE_DEVTOOLS: true,  // <-------- DISABLE redux-devtools HERE
        }),
        webpackIsomorphicToolsPlugin.development(),
    ],
};
/* eslint-enable */
