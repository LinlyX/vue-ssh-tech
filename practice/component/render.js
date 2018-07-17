import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <slot></slot>
      <slot name='header'></slot>
    </div>
  `,
  data () {
    return {
      style: {
        border: '1px solid red',
        color: 'linghtgrey',
        height: '400px',
        width: '400px'
      }
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
    <comp-one>
      <p name='header'>This is header</p>
    </comp-one>
  </div>
  `
})
