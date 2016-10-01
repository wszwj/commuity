<template>
<div id="answer">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="message content">
        <div class="  media-box" v-for="item in items">
            <p class="media-title">{{item.title}}</p>
            <div class="media-show" v-if="item.img ? true :false"><img :src="item.img"></div>
            <p class="media-info"><span>{{item.content}}</span><a>[查看更多]</a></p>
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
import $ from 'zepto'
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
  ready: function() {
    const p = $('p.media-info')
    const span = $('p.media-info span')
    const pWidth = p.width()
    const num = Math.ceil(pWidth * 2 / 15 - 8)
    const spanContent = span.html()
    span.html(spanContent.substr(0, num) + '...')
  },
  components: {
    VNav
  }
}
</script>

<style>
@import '../assets/css/style.css';

</style>