<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header, Footer, Todo
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
