const Router = require('koa-router') // 服务端路由
const axios = require('axios') // 用于客户端和服务端发送请求
const path = require('path')
const fs = require('fs')
const MemoryFS = require('memory-fs') // 与fs的区别是，不会将文件写入磁盘，直接写入内存；会更快
const webpack = require('webpack') // 直接在nodejs中打包webpack，webpack提供了node API
const VueServerRenderer = require('vue-server-renderer') // vue2.0在node服务端的呈现

const serverRender = require('./server-render')
const serverConfig = require('../../../build/webpck.config.server')

const serverComplier = webpack(serverConfig) // run watch调用后可以生成服务端渲染时的bundle
const mfs = new MemoryFS()
serverComplier.outputFileSystem = mfs // 指定webpack的输出目录

let bundle // 记录webpack每次打包生成的新的文件
serverComplier.watch({}, (err, stats) => {
  if (err) throw err // 打包出现的错误抛出
  stats = stats.toJson() // 非打包的错误
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.log(warn))

  // 读取生成的bundle文件，先看bundle文件会输出到哪里，拿到路径
  // VueServerPlugin打包输出的默认的文件名,使用的是json
  // 每次文件变化，webpack重新打包后，都会去读取文件更新渲染
  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

// koa中间件，处理服务端渲染返回的东西
// 通过vue-server-renderer输出的内容只是html中body部分的代码
const handleSSR = async (ctx) => {
  // 服务刚起的时候可能拿不到bundle，还没打包好
  if (!bundle) {
    ctx.body = '稍等一会...'
    // return
  }
  // 获取客户端的地址webpcak dev server打包出来js所建的地址，拼接html的时候将客户端的地址写进去，浏览器将html渲染出来可以引用客户端的js；
  // 无法开启两个进程，采用发请求拿到客户端的js文件
  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data
  console.log('===========' + clientManifest + '====================')

  // 拿到template
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )
  // 创建renderer实例,帮助生成可以直接调用render的function
  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })

  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
