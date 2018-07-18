// vue-router的相关配置
import Router from 'vue-router'
import routes from './routes.js'

// 每次生成的是新router,与服务端渲染的关系
export default () => {
  return new Router({
    routes,
    mode: 'history',
    fallback: true,
    scrollBehavior (to, from, savedposition) {
      if (savedposition) {
        return savedposition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}
