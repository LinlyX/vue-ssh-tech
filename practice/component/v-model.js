import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" v-model="value1" @input="handelInput">
    </div>
  `,
  methods: {
    // 要把双向绑定的参数放出去，这里是子向父传值
    handelInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `,
  watch: {
    value (newV, oldV) {
      console.log(newV)
    }
  }
})
