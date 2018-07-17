import Vue from 'vue'

// 定义组件
const component = {
  template: `
    <div>
      <p>{{text}}</p>
      <div>
        <input type="text" v-model="text">
        <span @click="handlerChange">{{propOne}}</span>
        <span v-show="active">See me if active is true.</span>
      </div>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  props: {
    active: Boolean,
    propOne: {
      type: String,
      require: true
    }
  },
  methods: {
    handlerChange () {
      this.$emit('change')
    }
  }
}

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    this.$parent.text = '12345568' // 修改引用该组件的父组件中的data的值
    console.log(this.$parent.$options.name)
  }
}

new Vue({
  name: 'Root',
  components: {
    ComExt: component2
  },
  el: '#root',
  template: `
    <div>
      <span>{{text}}</span>
      <com-ext></com-ext>
    </div>
  `,
  data: {
    text: 33333
  }
})
// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'text'
//   },
//   data: {
//     text: 123
//   }
// })
