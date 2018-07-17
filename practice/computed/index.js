import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div>Name: {{firstName + ' ' + lastName}}</div>
      <div>Name: {{name}}</div>
      <div>Name: {{getName()}}</div>
      <p>{{firstName}}</p>
      <div>
        <input type="text" v-model="firstName">
      </div>
      <div>FullName: {{fullName}}</div>
      <p>{{obj.a}}</p>
      <div>
        <input type="text" v-model="obj.a">
      </div>
    </div>
  `,
  data: {
    firstName: 'Xiong',
    lastName: 'Lin',
    fullName: '',
    number: 0,
    obj: {
      a: 0
    }
  },
  computed: {
    name () {
      console.log('computed name')
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true,
      deep: true
    },
    'obj.a': {
      handler () {
        console.log('handler invoked')
      },
      immediate: true
    }
  },
  methods: {
    getName () {
      console.log('method invoked')
      return this.firstName + ' ' + this.lastName
    }
  }
})
