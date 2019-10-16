/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  name: 'client',
  modei: 'none',
  entry: ['./src/client/index.ts'],
  output: {
    path: path.resolve(__dirname, 'build/static'),
    filename: 'app.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TSConfigPathsPlugin(),
    ],
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
          },
        },
      ],
    }],
  },
  optimization: {
    minimize: false,
    noEmitOnErrors: true,
    nodeEnv: 'production',
    occurrenceOrder: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    splitChunks: {
      chunks: 'all',
      name: true,
      minSize: 1,
      minChunks: 1,
      cacheGroups: {
        assets: {
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
          reuseExistingChunk: true,
          filename: '[name][hash].js',
        },
      },
    },
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
