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
    propOne: String
  },
  methods: {
    handlerChange () {
      this.$emit('change')
    }
  }
}

// 注册全局组件
// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: `
    <div>
      <comp-one :active="true" :prop-one="one" @change="changeProp"></comp-one>
      <comp-one :active="false" :prop-one="one"></comp-one>
    </div>
  `,
  data: {
    one: 'text'
  },
  methods: {
    changeProp () {
      this.one = this.one + '1'
    }
  }
})
