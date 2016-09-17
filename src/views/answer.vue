<template>
<div id="answer">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="message content">
        <div class="  media-box" v-for="item in items">
            <p class="media-title">{{item.title}}</p>
            <div class="media-show" v-if="isImg(item.img)"><img :src="item.img"></div>
            <p class="media-info">{{item.content}}<a href="">[查看更多]</a></p>
            <div class="media-text">
            <ul class="media-info">
                <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                <li class="other"><i class="iconfont icon-pinglun"></i>{{item.comment}}</li>
            </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的回答',
      path: '/about',
      icon: 'icon-shape32',
      items: [
        {
          id: 1,
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        },
        {
          id: 2,
          title: '由各种物质组，成的巨型球状天体。叫做星球,啊旧时的就是看看',
          img: require('assets/img/show_1.jpg/'),
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        },
        {
          id: 3,
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        }
      ]
    }
  },
  components: {
    VNav
  },
  methods: {
    isImg (e) {
      if (e) {
        return true
      }
      return false
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';

</style>