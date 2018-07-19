export default {
  updateCounterAsync (store, data) {
    setTimeout(() => {
      // 不能直接修改state中的数据，的通过mutation
      // state.count = data.num
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}
