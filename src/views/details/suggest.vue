<template>
<div id="info">
  <v-nav :path="path" :title="title" :num="num" :subtitle="subtitle" :word="word" :add="add"></v-nav>
  <div class="content">
    <div class="content-top" v-for="item in items">
      <div class="head">
        <div class="head-left">
          <span>{{item.game}}</span>
          <a v-for="tag in item.tag">#{{tag}}</a>           
        </div>
        <div class="head-right">
          <p>已有{{item.voted}}人投票</p>
        </div>
      </div>
      <div class="tip">
        被<a>暴雪娱乐</a>标记为<a>优秀评论</a><i class="iconfont icon-jinqi"></i>
      </div>
    <p class="media-title">{{item.title}}</p>
    </div>
    <div class="media-box content-block">
        <div class="info-user">
          <img src="../../assets/img/bighead.png"/>
          <div class="user-desc">
            <h3>手机电视<span>MVP</span></h3>
            <p>睡大觉是，萨蒂哦地</p>
          </div>
          <div class="bth">
            <button>关注</button>
          </div>
        </div>
      </div>  
    <div class="content-block article">
      <img src="../../assets/img/content.jpg">
      <p>设计大赛大厦受到收到撒谎的时间说的话</p>
      <p>设计大赛，大厦受到收到撒谎的时间说的话撒的就是大家时代。开始的机会，山东黄金</p>
      <p>设计大赛大速度是是，是多少，速度，厦受到收到撒谎的时间说的话</p>
      <p>设计大赛大厦受到收到撒谎的时间说的受到收到受到收到是多少速度话</p>
      <p>设计大赛大厦受到收到撒谎的撒点就是了看到是的旧时的旧时的旧时的圣诞节圣诞节使得数据圣诞节圣诞节速度和实践活动速度还是还是觉得还是觉得和金士顿金士顿时间说的几句话就速度速度上的话教授孙东东教授及时到货时间是你你都说开了房间的数量东风破覅哦答复都放到ufud负担复旦哦iu东方时间说的话</p>
      <p>设计大赛大厦受到收到撒谎的时间说的话</p>
            <img src="../../assets/img/content.jpg">
      <p>设计大赛大厦受到收到撒谎的时间说随风倒十分有地方gif度过i孤鬼ui哦都放到iu但是幅度和的话</p>
      <span>2016年10月1日</span>
    </div>
    <div class="vote">
      <i class="iconfont icon-vote" @click="vote()"></i><p class="vote">投票</p>
      <p>已有234人投票，查看<a>投票结果</a></p>
    </div>
  </div>
  <div class="del" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape16"></i></div>
  <div class="back" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape32"></i></div>
</div>
</template>
<script>
import VNav from '../../components/Nav'
import $ from 'zepto'
export default {
  data () {
    return {
      title: '建议详情',
      path: '/home',
      word: '声',
      add: [
        {
          name: 'icon-like',
          path: ''
        },
        {
          name: 'icon-shape73',
          path: ''
        },
        {
          name: 'icon-vote',
          path: ''
        }
      ],
      items: [
        {
          game: '魔兽世界',
          tag: ['服务器', '英雄'],
          title: '各种啊实打实的速度由各种物质组，成的巨型球状天体。叫做星球',
          voted: 93
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
  },
  methods: {
    vote: function() {
      $.modal({
        afterText: '<div class="vote-dialog"><h3>投票</h3><ul><li><input type="radio"/>支持</li><li><input type="radio"/>反对</li><li><input type="radio"/>观望</li></ul><div class="textarea" contenteditable="true"></div><div class="send"><i class="iconfont icon-shape1 left"></i><i class="iconfont icon-fabu right"></i><a>发布</a></div></div>'
      })
    }
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
  font-size: 25px;
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
#info .head-right p{
  margin: 0;
  font-size: .6rem;
  color: #ccc;
}
#info .media-box{
  margin: 1rem 0;
  height: 3rem;
  border-bottom: 5px solid #eff3f9;
}
#info .tip{
    margin: .5rem 1rem 0;
    padding: 5px 0;
    text-align: center;
    font-size: .6rem;
    background-color: #eee;
    color: #999;
    letter-spacing: 1px;
}
#info .tip a{
  margin: 0 2px;
}
#info .tip i{
    margin-left: 5px;
    font-size: .5rem;
    color: #e86443;
}
#info  p.media-title{
  margin: .5rem 1rem 1rem;
  color: #000;
}
#info .info-user{
  float: left;
  width: 100%;
}
#info .info-user img{
    float: left;
    margin: .2rem;
    width: 40px;
}
#info .user-desc{
  float: left;
  margin: 0 .5rem;
}
#info .user-desc h3{
    float: left;
    margin: 0;
    font-size: .85rem;
    font-weight: inherit;
    color: #000;
    line-height: 1.75;
}
#info .user-desc span{
    width: 3rem;
    margin-left: 5px;
    font-weight: lighter;
    padding: 1px 2px;
    text-align: center;
    font-size: 9pt;
    color: #fff;
    vertical-align: middle;
    background-color: red;
}
#info .user-desc p{
    clear: both;
    font-size: .7rem;
    color: #ccc;
}
#info .bth{
  float: right;
}
#info .bth button{
    padding: .1rem .4rem;
    background-color: inherit;
    font-size: .5rem;
    color: #34465c;
    letter-spacing: 2px;
    border: 1px solid #34465c;
    vertical-align: sub;
}

#info .article{
  margin-top: 1rem;
}
#info .content-block>img{
  padding: .5rem;
  width: 100%;
}

#info .content-block>p{
  margin:.0 1rem;
  line-height: 2;
  font-size: .75rem;
  text-indent: 1rem;
  color: #333;
}
#info .content-block>span{
  float: right;
  font-size: .7rem;
  color:#999;
}
#info .content .vote{
  text-align: center;
}
#info .content .vote i{
  font-size: 2rem;
  color: #0894ec;

}
#info .content .vote p{
  font-size: .7rem;
  color: #999;
}

#info .content .vote p.vote{
  margin-top: -.5rem;
  color: #0894ec;
}
#info .content .vote a{
  margin-left: .5rem;
}


/*投票弹窗*/
.modal-no-buttons .modal-inner{
  border-radius: initial;
}
.vote-dialog{
  color: #34465c;
}
.vote-dialog h3{
    margin: .5rem;
    font-weight: normal;
}
.vote-dialog ul{
    margin: 0 2rem;
    padding: 0;
    text-align: left;
}
.vote-dialog ul li{
  padding: .5rem 0;
}
.vote-dialog ul li input{
  margin: .5rem
}

.vote-dialog .textarea{
    width: 90%; 
    margin-left: 5%; 
    outline: 0; 
    border-bottom: 1px solid #a0b3d6; 
    line-height: 150%;
    text-align: left;
}
.vote-dialog .send{
  height: 3rem
}
.vote-dialog .send i.left{
    margin: 1rem;
    float: left;
    color: #999;
}
.vote-dialog .send a{
    margin-top: 1rem;
    line-height: 2;
    float: right;;
}
.vote-dialog .send i.right{
    float: right;
    margin: 1rem 1rem 1rem .5rem;
    color: #3ca7eb;
}
</style>