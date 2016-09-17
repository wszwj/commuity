<template>
<div id="answer">
  <v-comment :path="path" :title="title" :icon="icon"></v-comment>

</div>
</template>
<script>
import VComment from '../components/Comment'
export default {
  data () {
    return {
      title: '排行榜',
      path: '/about',
      icon: 'icon-shape32'
    }
  },
  components: {
    VComment
  }
}
</script>

<style>
@import '../assets/css/style.css';

</style>