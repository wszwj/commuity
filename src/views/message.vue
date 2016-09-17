<template>
<div id="message">
    <v-nav :path="path" :title="title" :icon="icon" :add="add"></v-nav>
</div>
</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的收藏',
      path: '/about',
      icon: 'icon-xinxi',
      add: [
        {
          name: 'icon-loudou',
          path: '/about'
        }
      ]
    }
  },
  components: {
    VNav
  }
}
</script>

<style>
@import '../assets/css/style.css';
#message .bar a.button .iconfont{
  font-size: 21px;
}
</style>