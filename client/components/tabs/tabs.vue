<script>
import TabContainer from './tab-container.vue'
export default {
  name: 'tabs',
  components: {
    TabContainer
  },
  props: {
    // 通过value控制显示哪个tab
    value: {
      type: [String, Number],
      required: true
    }
  },
  // beforeMount () {
  //   console.log('============Tabs befortemounted==============')
  // },
  // mounted () {
  //   console.log('============Tabs mounted==============')
  // },
  // created () {
  //   console.log('============Tabs created==============')
  // },
  data () {
    return {
      panes: []
    }
  },
  // 配置好了，可以用jsx
  render () {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <tab-container panes={this.panes}></tab-container>
      </div>
    )
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>
