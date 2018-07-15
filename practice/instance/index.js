import Vue from 'vue'

const app = new Vue({
  el: '#root',
  data: {
    text: 0
  },
  template: '<div id="the" ref="this">{{text}}</div>'
})

// console.log(app.$data.text)
// console.log(app.text)
// console.log(app.$props)
console.log(app.$el) // 打印出了挂载到根节点的所有信息
console.log(app.$refs)
app.$on('col', () => {
  console.log('text emited')
})
app.$emit('col')
