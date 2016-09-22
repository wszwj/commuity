<template>
<div id="say">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="content">
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">问题</a>
        <a href="#tab2" class="tab-link button">建议</a>
      </div>
      <div class="content-block">
        <div class="tabs">
          <div id="tab1" class="tab active">
            <div class="message">
                <div class="  media-box" v-for="item in items">
                    <h4 class="media-title"><img src="../assets/img/head.png">{{item.name}}<span>关注了问答</span></h4>
                    <p class="media-title">{{item.title}}</p>
                    <div class="media-show" v-if="isImg(item.img)"><img :src="item.img"></div>
                    <p class="media-info">{{item.content}}<span>[查看更多]</span></p>
                    <div class="media-text">
                    <ul class="media-info">
                        <li><i class="iconfont icon-xinshixin"></i>{{item.like}}</li>
                        <li><i class="icon-word">答</i>{{item.answer}}</li>
                        <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                        <li class="other"><i class="iconfont icon-pinglun"></i>{{item.comment}}</li>
                    </ul>
                    </div>
                </div>
            </div> 
          </div>
          <div id="tab2" class="tab">
            <div class="message">
                <div class="  media-box" v-for="item in items">
                    <h4 class="media-title"><img src="../assets/img/head.png">{{item.name}}<span>关注了问答</span></h4>
                    <p class="media-title">{{item.title}}</p>
                    <div class="media-show" v-if="isImg(item.img)"><img :src="item.img"></div>
                    <p class="media-info">{{item.content}}</p>
                    <div class="media-text">
                    <ul class="media-info">
                        <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                        <li class="other"><i class="iconfont icon-pinglun"></i>{{item.comment}}</li>
                        <li class="other"><i class="iconfont icon-tuijianzuiduo"></i></li>
                    </ul>
                    </div>
                </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
</div>
</template>   


</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的发声',
      path: '/about',
      icon: 'icon-shape32',
      items: [
        {
          id: 1,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质',
          like: '999k',
          answer: 99,
          good: 23,
          comment: 123
        },
        {
          id: 2,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球,啊旧时的就是看看',
          img: require('assets/img/show_1.jpg/'),
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          like: '999k',
          answer: 99,
          good: 23,
          comment: 123
        },
        {
          id: 3,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          like: '999k',
          answer: 99,
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
#say .buttons-tab{
    position: fixed;
    width: 100%;
    background-color: #eff3f9;
    color: #999;
}
#say .buttons-tab .button.active{
    color: #34465c;
    font-weight: bold;
    border-color: #2c3d52;
}
#say .message i.icon-word{
    float: inherit;
    font-style: normal;
    background-color: #999;
    color: #fff;
    font-size: 9pt;
    padding: 0 2px;
    margin-right: 2px;
}
</style>