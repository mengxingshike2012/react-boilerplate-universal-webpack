/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const strip = require('strip-loader');

const projectRootPath = path.resolve(__dirname, '../');
const assetsPath = path.resolve(projectRootPath, './static/dist');
const config = require('../config')
const pkg = require('../package.json')

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      './src/client/index.js',
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `${config.cdn.host}${config.cdn.path}/${pkg.version}/`,
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: [strip.loader('debug'), 'babel-loader'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use:['css-loader', 'postcss-loader']})},
      { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?modules&importLoaders=2&sourceMap', 'postcss-loader', 'less-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'] }) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?modules&importLoaders=2&sourceMap', 'postcss-loader', 'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'] }) },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
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
      components: `${path.resolve(__dirname, '..')}/src/common/components`,
      actions: `${path.resolve(__dirname, '..')}/src/common/actions`,
      apis: `${path.resolve(__dirname, '..')}/src/common/apis`,
      reducers: `${path.resolve(__dirname, '..')}/src/common/reducers`,
      utils: `${path.resolve(__dirname, '..')}/src/common/utils`,
      constants: `${path.resolve(__dirname, '..')}/src/common/constants`,
    },
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath }),

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin({filename: '[name]-[chunkhash].css', allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },

      IS_CLIENT: true,
      IS_SERVER: false,
      IS_DEVELOPMENT: false,
      ENABLE_DEVTOOLS: false,
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // optimizations
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),

    webpackIsomorphicToolsPlugin,
  ],
};
/* eslint-enable */
