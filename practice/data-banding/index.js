import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div :class="{choose:!active, some:!active}" :style="styles" @click="handleClick">
        {{arr.join(' ')}}
      </div>
      <div v-html="html"></div>
    </div>
  `,
  data: {
    active: false,
    html: '<span>1234</span>',
    arr: [1, 2, 3],
    styles: {
      color: 'red'
    }
  },
  methods: {
    handleClick () {
            alert('this is active') //eslint-disable-line
    }
  }
})
