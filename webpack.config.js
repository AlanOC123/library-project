const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { 
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: ''
          }
        }, 'css-loader']
      },
      {
        test: /\.(woff|woff2|otf|eof|ttf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(svg|png|jpeg|jpg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HTMLWebpackPlugin({
      title: 'Library Project'
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  mode: 'development'
}