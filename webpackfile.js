/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  name: 'styleguide',
  mode: 'development',
  entry: ['./src/index.ts'],
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
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|woff2?)$/i,
        use: ['file-loader'],
      },
      {
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
      },
    ],
  },
};
