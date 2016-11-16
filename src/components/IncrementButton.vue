<template>
  <button @click.prevent="activate">+1</button>
  <button @click.prevent="reset">reset</button>
</template>
<script>
import store from '../vuex/store'
export default {
  methods: {
    activate () {
      console.log('+1 Pressed')
      // this.$dispatch('button-pressed')
      store.commit('INCREMENT')
    },
    reset () {
      store.commit('RESET')
    }
  }
}
</script>