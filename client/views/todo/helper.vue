<template>
  <div class="helper">
    <span class="left">{{allUnCompletedCounts}} items left</span>
    <span class="tabs">
    <span v-for="state in states"
          :key="state"
          :class="[state, filter === state ? 'actived' : '']"
          @click="toggleFilter(state)">
        {{state}}
    </span>
    </span>
    <span class="clear" @click="clearAllCompleted()">
      Clear Completed
    </span>
  </div>
</template>

<script>
    export default{
      data () {
        return {
          states: ['all', 'active', 'completed']
        }
      },
      props: {
        filter: {
          type: String,
          required: true
        },
        todos: {
          type: Array,
          required: true
        }
      },
      computed: {
        // 过滤得到没有完成的所有事件
        allUnCompletedCounts () {
          return this.todos.filter(item => item.completed === false).length
        }
      },
      methods: {
        toggleFilter (state) {
          this.$emit('toggle', state)
        },
        clearAllCompleted () {
          this.$emit('clearAllCompleted', 'active')
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .helper {
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    line-height: 30px;
    background-color: #ffffff;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  
  .left, .clear, .tabs {
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  .left, .clear {
    width: 150px;
  }
  
  .left {
    text-align: left;
  }
  
  .clear {
    text-align: right;
    cursor: pointer;
  }
  
  .tabs {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
  
  .tabs * {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid #e2b8b82e;
  }
  
  .actived {
    border: 1px solid #820e0e9e
    border-radius: 5px;
  }
</style>