import cssNext from 'postcss-cssnext'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import postcssImport from 'postcss-import'
import postcssBrowserReporter from 'postcss-browser-reporter'
import postcssReporter from 'postcss-reporter'
import postcssUrl from 'postcss-url'
import webpack from 'webpack'

export default {
  devtool: 'source-map',
  entry: {
    vendor: [
      'webpack-dev-server/client?http://localhost:3000',
      'babel-polyfill',
      'react',
      'react-dom',
      'react-styleable'
    ],
    app: './lib/index.js'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader') },
      { test: /\.(jpg|png|gif)$/, loader: 'file-loader?limit=10000&name=/[name].[ext]' }
    ]
  },
  postcss: [
    postcssImport,
    postcssUrl({ url: url => url }),
    cssNext,
    postcssBrowserReporter,
    postcssReporter
  ],
  cssnext: {
    compress: false,
    url: false // cssnext ruins css url requires without this (e.g. url('./derp.jpg') => url('derp.jpg'))
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin(null, 'bundle.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  devServer: {
    port: 3000
  }
}