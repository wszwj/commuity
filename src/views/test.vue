<!-- <template>
<div id="answer">
  <v-comment></v-comment>
</div>
</template>
<script>
import VComment from '../components/Comment'
export default {
  components: {
    VComment
  }
}
</script>

<style>

</style> -->
<template>
  <div id="test">
	<h3>Incerment:</h3>
	<increment></increment>
	<h3>Counter:</h3>
	<counter></counter>
  </div>
</template>
<script>
import Counter from '../components/CounterDisplay'
import Increment from '../components/IncrementButton'
export default {
  components: {
    Counter, Increment
  }
  // events: {
  //   'button-pressed': function () {
  //     this.$broadcast('increment')
  //   }
  // }
}
</script>