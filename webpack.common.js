const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index_head: 'bootstrap/dist/css/bootstrap.min.css',
    script: './src/js/script.js'
  },
  output: {
    filename: 'script.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
 optimization: {
   splitChunks: {
     chunks: 'all',
   },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['index_head', 'script']
    }),
    new HtmlWebpackInjector(),
    // new ESLintPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  ],
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpg|gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          }
        ]
      }
    ]
  }
}