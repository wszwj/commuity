<template>
	count is {{counter}}
</template>
<script>
import store from '../vuex/store'
export default{
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  // events: {
  //   increment () {
  //     this.count ++
  //   }
  // }
  computed: {
    counter () {
      return store.state.counter
    }
  }
}
</script>