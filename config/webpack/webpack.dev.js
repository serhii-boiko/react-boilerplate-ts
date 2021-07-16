const { resolve, publicUrlOrPath} = require('./utils')
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  cache: true,
  devtool: 'eval',
  watchOptions: {
    poll: true,
  },
  devServer: {
    contentBase: [resolve('./dist/'), resolve('./src/')],
    publicPath: publicUrlOrPath(),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
  },
  context: resolve('./src'),
  entry: [
    'webpack/hot/only-dev-server',
    resolve('./src/index.tsx'),
  ],
  output: {
    path: resolve('./dist/assets'),
    filename: 'app.js',
    publicPath: './assets/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('.babelrc'),
            cacheDirectory: true,
          },
        },
      },
      {
        test: /^.((?!cssmodule).)*\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /^.((?!cssmodule).)*\.(sass|scss)$/,
        rules: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /^.((?!cssmodule).)*\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
