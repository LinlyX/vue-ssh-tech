import createApp from './create-app'

// 返回promise,要让vue-server-renderer知道什么时候异步操作结束
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url) // 给路由推记录
    // 服务端渲染使用，路由推进去时，异步操作全部做完才能调用回调，比如异步加载完数据以后；一般用来处理数据
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents) {
        return reject(new Error('no componnet matched'))
      }
      resolve(app)
    })
  })
}
