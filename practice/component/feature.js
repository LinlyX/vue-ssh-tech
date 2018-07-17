import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <slot></slot>
      <slot name='header'></slot>
      <slot name='content'></slot>
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

    }
  },
  template: `
    <div>
      <comp-one>
        <p name='header'>This is header</p>
        <p name='content'>This is content</p>
      </comp-one>
    </div>
  `
})
