<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <p>{{fullName}} {{count}}</p> -->
    <!-- <router-link to='/app'>app</router-link>
    <router-link to='/login'>login</router-link> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <button @click="notify">测试全局notify函数</button>
    <Footer></Footer>
    <!-- <notification content="这是我的Notification"></notification> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Header, Footer, Todo
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', {num: i++})
    // }, 1000)
    this.$store.dispatch('updateCounterAsync', {time: 2000, num: 5})
  },
  computed: {
    ...mapState({
      count: 'count'
    }),
    ...mapGetters({
      fullName: 'fullName'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    notifyClick () {
      alert ("弹窗内容") //eslint-disable-line
    },
    notify () {
      this.$notify({
        content: 'test notify',
        btn: 'close'
      })
    }
  }
}
</script>

<style type="text/stylus">
  #app{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  #cover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5a8c8bc2;
    opacity: .9;
    z-index: -2;
  }
</style>
