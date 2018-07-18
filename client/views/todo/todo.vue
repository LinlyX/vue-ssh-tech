<template>
    <div class="real-app">
        <input
           type="text"
           class="add-input"
           placeholder="接下来要做的事情"
           autofocus="autofocus"
           @keyup.enter="addTodo">
        <item v-for="todo in filterTodos"
              :key="todo.id"
              :todo="todo"
              @del="deleteThis"/>
        <tabs
            :todos="todos"
            :filter="filter"
            @toggle="toggleFilter"
            @clearAllCompleted="clearAllCompleted(active)"/>
        <!-- <router-view /> -->
    </div>
</template>

<script>
import item from './item.vue'
import tabs from './tabs.vue'
export default {
  data () {
    return {
      todos: [],
      allCounts: 0,
      filter: 'all',
      id: 0
    }
  },
  components: {
    item, tabs
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') { return this.todos }
      const completed = this.filter === 'completed'
      return this.todos.filter(item => item.completed === completed)
    }
  },
  methods: {
    addTodo (e) {
      if (e.target.value !== '') {
        this.todos.unshift({
          id: this.id++,
          content: e.target.value.trim(),
          completed: false
        })
      }
      e.target.value = ''
      this.allCounts = this.todos.length
    },
    deleteThis (id) {
      this.todos.splice(this.todos.findIndex(obj => { return obj.id === id }), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted (active) {
      this.todos.filter(item => item.completed === true)
    }
  }
}
</script>

<style lang="stylus" scope>
.real-app {
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;
}
.add-input{
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family "微软雅黑"
    font-weight normal
    line-height 1.4em
    outline none
    color inherit
    box-sizing border-box
    -webkit-font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
}
</style>
