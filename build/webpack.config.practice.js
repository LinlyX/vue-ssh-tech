/**
 * 依赖webpack.config.bese.js进行后续的配置
 */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base.js')

let config

const defaultPlugins = [
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
]

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}

config = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  devServer: devServer,
  entry: {
    main: path.join(__dirname, '../practice/index.js')
  },
  module: {
    rules: [{
      test: /\.styl(us)?$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }]
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]),
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  }
})

module.exports = config
