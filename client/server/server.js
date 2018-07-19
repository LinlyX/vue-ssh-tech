const Koa = require('koa')

const app = new Koa() // 新建koa中间件对象

const isDev = process.env.NODE_ENV === 'development' // 为什么这个变量可以全局用；服务端渲染有环境区别

// 写Koa中间件；记录服务端的请求以及抓取错误，了解服务端的错误
// koa使用async和await，在最外层，使后面的中间件都能捕捉到错误
app.use(async (ctx, next) => {
  try {
    console.log(`requeat with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err) // 打印错误
    ctx.status = 500 // 返回页面端看到内容
    if (isDev) {
      ctx.body = err.message // 直接在页面上看到信息
    } else {
      ctx.body = 'please try again later'
    }
  }
})
