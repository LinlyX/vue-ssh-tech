<template>
  <div class="notification">
    <span class="content">{{content}}</span>
    <a class="btn" @click.stop="handleBtn">{{title}}</a>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      require: true
    },
    title: {
      type: String,
      default: '关闭'
    }
  },
  methods: {
    handleBtn () {
      this.$emit('clickBtn')
    }
  }
}
</script>

<style lang="stylus" scoped>
.notification{
  width 200px
  padding 20px
  background-color #333333
  position relative
}
.btn{
  position absolute
  top 5px
  right 10px
  color #bb0101
  font-size 12px
  cursor pointer
}
.content{
  color white
  font-size 14px
}
</style>

