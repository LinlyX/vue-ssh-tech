// 复杂的映射
import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [{
  path: '/',
  redirect: '/app'
}, {
  path: '/app', // 作为组件的属性id传进去
  // props: true,
  component: Todo, // 引入的是vue的页面
  name: 'app',
  meta: {
    title: 'this is app',
    description: 'asdasd'
  }
  // children: [{
  //   path: 'test',
  //   component: Login
  // }]
}, {
  path: '/login',
  component: Login
}]
