const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html' // 返回的内容

  const context = { url: ctx.path } // 给vue-serve-renderer传入的值；渲染完成后，会在context上插入一堆属性
  try {
    const appString = await renderer.renderToString(context) // 返回promise,由server-entry.js传入

    const html = ejs.render(template, {
      appString: appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })
    ctx.body = html // 返回给客户端的html内容
  } catch (err) {
    console.log('render err', err)
    throw err
  }
}
