// 代码能在node端跑起来即可

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require('./webpack.config.base.js')

let config

config = merge(baseConfig, {
  target: 'node',
  devtool: 'source-map',
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2', // node的模块化
    filename: 'server-entry.js',
    path: path.join(__dirname, '../derver-build')
  },
  // webpack打包时，所有依赖的js打包到同一个文件中，一次性加载到浏览器端，无法通过require去加载单独的文件；
  // 然而在node端，若依赖vue，只需要在导出的文件中去requiere vue;就可以引用node_module中的文件
  externals: Object.keys(require('../package.json').dependencies), // 不要打包这部分的文件
  module: {
    // style-loader通过js代码将css文件插入到DOM中，涉及DOM节点的操作，node端没有DOM环境；故不要使用vue-style-loader
    rules: [{
      test: /\.styl(us)?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.[contentHash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin() // 会使输出的是json文件；可直接通过这个包做服务端渲染
  ]
})

module.exports = config
