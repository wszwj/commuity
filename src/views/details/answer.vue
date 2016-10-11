<template>
<div id="info">
    <v-nav :path="path" :title="title" :num="num" :subtitle="subtitle" :word="word" :add="add"></v-nav>
    <div class="content">
      <div class="content-top" v-for="head in head">
        <div class="head">
          <div class="head-left">
            <span>{{head.game}}</span>
            <a v-for="tag in head.tag">#{{tag}}</a>           
          </div>
          <div class="head-right">
            <i class="iconfont icon-shape73"></i>
            <i class="iconfont icon-duihua"></i>
            <span>{{head.review}}</span>
          </div>
        </div>
        <div class="media-box content-block">
            <p class="media-title">{{head.title}}</p>
            <p class="media-info"><span>{{head.content}}</span><a>[查看更多]</a></p>
      </div>
      </div>
      <div class="list-content" v-for="list in list">
        <div class="list-show">
        <ul>
          <li><img :src="list.avatar"></li>
          <li class="hot">+{{list.add}}</li>
          <li>{{list.num}}</li>
        </ul>
        </div>
        <div class="list-body">
          <div class="list-title"><h3>{{list.title}}</h3><span :class="list.color">{{list.rank}}</span></div>
          <div class="list-mark" v-if="list.recommend"><i class="iconfont icon-jinqi"></i>推荐答案</div>
          <p>{{list.content}}</p>
        </div>
        <div class="list-more">
          <i class="iconfont icon-duihua"></i>
          <span>{{list.review}}</span>
          <i class="iconfont icon-more"></i>
        </div>
      </div>
    

</div>
</template>
<script>
import VNav from '../../components/Nav'
import $ from 'zepto'
export default {
  data () {
    return {
      title: '问题',
      num: 25,
      subtitle: '个答案',
      path: '/home',
      word: '声',
      add: [
        {
          name: 'icon-duihua',
          path: '',
          num: 234
        },
        {
          name: 'icon-shape73',
          path: ''
        }
      ],
      head: [
        {
          game: '魔兽世界',
          tag: ['服务器', '英雄'],
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种',
          review: 93
        }
      ],
      list: [
        {
          title: '中心获悉',
          avatar: require('../../assets/img/head.png'),
          rank: 'MVP',
          color: 'red',
          content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少',
          recommend: true,
          review: 93,
          add: 1,
          num: '6k'
        },
        {
          title: '暴雪',
          avatar: require('../../assets/img/head.png'),
          rank: '开发商',
          color: 'deongaree',
          content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少',
          recommend: true,
          review: 93,
          add: 1,
          num: '6k'
        },
        {
          title: '速度',
          avatar: require('../../assets/img/head.png'),
          rank: '发声者',
          color: 'blue',
          content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少',
          review: 93,
          add: 1,
          num: '6k'
        },
        {
          title: '中心获悉',
          avatar: require('../../assets/img/head.png'),
          rank: '发声者',
          color: 'blue',
          content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少',
          review: 93,
          add: 1,
          num: '6k'
        }
      ]
    }
  },
  ready: function() {
    // 查看更多
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
@import '../../assets/css/style.css';
#info .title{
  color: #afafaf;
}
#info .bar>p.subtitle{
  margin-left: 4.5rem;
  color: #afafaf
}
#info a.button i.icon-duihua{
  font-size: 24px;
}


#info .head{
  padding:1rem;
  height: 2.5rem;
  border-bottom: 1px solid #eee;
}
#info .head-left{
  float: left;
  font-size: .5rem
}
#info .head-left span{
  padding:1px 4px;
  background-color: #f2992e;
  color: #fff;
  font-size: .5rem;
  letter-spacing: 1px;
}
#info .head-left a{
  font-size: .65rem;
  margin-left: .5rem;
}
#info .head-right{
  float: right;
  line-height: 100%;
}
#info .head-right i{
    color: #d4e7f2;
    margin-left: .5rem;
}
#info .head-right span{
  color: #ccc;
  vertical-align: top;
}
#info .media-box{
  margin: 0;
  color: initial;
  border-bottom: 5px solid #eff3f9;
}
#info .media-box p.media-title{
  margin: .5rem 0;
}
#info .list-content{
  padding: 1rem 1.5rem;
  height: 7.5rem;
  border-bottom: 1px solid #ccc;
}
#info .list-content .list-show{
  float: left;
  width: 10%;
}
#info .list-content .list-show ul{
    padding-left: 0;
    margin: 0;
    font-size: .6rem;
    letter-spacing: 2px;
    text-align: center;
}
#info .list-content .list-show ul li img{
  width: 100%;
}
#info .list-content .list-show ul li.hot{
  margin-top:5px;
  padding-bottom: 1px;
  background-color: #f2992e;
  border-radius: 4px;
  font-size: .5rem;
  color: #fff;
  font-weight: bold;
}
#info .list-content .list-body{
  margin-left: 5%;
  float: left;
  width: 85%;
}
#info .list-body .list-title{
  float: left;
}
#info .list-body .list-title h3{
    margin: 0;
    float: left;
    font-size: .85rem;
    font-weight: inherit;
    color: #000;
    line-height: 1.75;
}
#info .list-body .list-title span{
    width: 3rem;
    margin-left: 5px;
    font-weight: lighter;
    padding: 1px 2px;
    text-align: center;
    font-size: 9pt;
    color: #fff;
}
#info .list-body .list-mark{
  float: right;
  color: #e0e0e0;
  font-size: .75rem;
}
#info .list-body .list-mark i{
    padding-right: 5px;
    vertical-align: middle;
    font-size: .75rem;
    color: #f2992e;
}
#info .list-body p{
    margin: 2rem 0 .5rem;
    font-size: 12pt;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
#info .list-content .list-more{
    float: right;
    color: #999;
    font-size: 12pt;
}
#info .list-content .list-more span{
  vertical-align: text-bottom;
}
#info .list-content .list-more i{
  margin-left: .5rem;
  vertical-align: top;
  font-size: 18px;
}
</style>