const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

const entries = glob.sync(path.resolve(__dirname, 'src/assets/images/*.{png,gif,jpg,jpeg,svg}'))

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, '_site') }],
    }),
    new webpack.HashedModuleIdsPlugin(),
    new FixStyleOnlyEntriesPlugin({
      extensions: ['less', 'scss', 'css', 'styl', 'sass', 'png', 'gif', 'jpg', 'jpeg'], // Empty js should also not be generated with image
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'webpack.html'),
      filename: path.resolve(__dirname, 'src/_includes/layouts/webpack.ejs'),
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: true,
              },
            },
          },
        ],
      },
    ],
  },
}
