<template>
<div id="collect">
    <!-- 导航 -->
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <!-- 内容列表 -->
    <div class="message content">
        <div class="media-box" v-for="item in items">
            <h4 class="media-title"><img src="../assets/img/head.png">{{item.name}}<span>关注了问答</span></h4>
            <p class="media-title">{{item.title}}</p>
            <div class="media-show"  v-if="item.img ? true :false"><img :src="item.img"></div>  
            <p class="media-info"><span>{{item.content}}</span><a>[查看更多]</a></p>
            <div class="media-text">
            <!-- 点赞评论 -->
            <ul class="media-info">
                <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                <li class="other"><i class="iconfont icon-pinglun"></i>{{item.comment}}</li>
                <li class="other"><i class="iconfont icon-tuijianzuiduo"></i></li>
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
      title: '我的收藏',
      path: '/about',
      icon: 'icon-shape32',
      items: [
        {
          id: 1,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球',
          good: 23,
          comment: 123
        },
        {
          id: 2,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球,啊旧时的就是看看',
          img: require('assets/img/show_1.jpg/'),
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        },
        {
          id: 3,
          name: '时空酸奶',
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