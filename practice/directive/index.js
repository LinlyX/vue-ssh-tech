import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div>{{text}}</div>
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
        <input type="checkbox" :value="4" v-model="arr">
      </div>
      <div>
        <input type="radio" value="some" v-model="picked">
        <input type="radio" value="any" v-model="picked">
      </div>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    arr: [1, 2, 3],
    picked: ''
  }
})
