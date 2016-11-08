<template>
<div id="info" v-for="item in items">
  <v-nav :path="path" :title="title" :num="num" :subtitle="subtitle" :word="word" :add="add"></v-nav>
  <div class="content">
    <div class="content-top">
      <div class="head">
        <div class="head-left">
          <span>{{item.game}}</span>
          <a v-for="tag in item.tag">#{{tag}}</a>           
        </div>
        <div class="head-right">
          <p>已有{{item.voted}}人投票</p>
        </div>
      </div>
      <div class="tip" v-if="item.tip ? true :false" v-for="tip in item.tip">
        被<a>{{tip.who}}</a>标记为<a>{{tip.assess}}</a><i class="iconfont icon-jinqi"></i>
      </div>
    <p class="media-title">{{item.title}}</p>
    </div>
    <div class="media-box content-block">
        <div class="info-user">
          <img :src="item.avatar"/>
          <div class="user-desc">
            <h3>{{item.account}}<span :class="rankClass">{{item.rank}}</span></h3>
            <p>{{item.introduction}}</p>
          </div>
          <div class="bth">
            <button>关注</button>
          </div>
        </div>
      </div>  
    <div class="content-block article">
      {{{item.content}}}
      <span>{{item.date}}</span>
    </div>
    <div class="vote">
      <i class="iconfont icon-vote" @click="vote()"></i><p class="vote">投票</p>
      <p>已有{{item.voted}}人投票，查看<a v-link="{ path: './suggest-result', replace: true}">投票结果</a></p>
    </div>
  </div>
  <div class="del" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape16"></i></div>
  <div class="back" onclick="window.history.go(-1)"><i class="iconfont icon-shape32"></i></div>
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
          voted: 93,
          tip: [
            {
              who: '暴雪娱乐',
              assess: '优秀评论'
            }
          ],
          account: '手机电视',
          avatar: require('../../assets/img/bighead.png'),
          rank: 'MVP',
          rankClass: 'red',
          introduction: '睡大觉是，萨蒂哦地',
          content: '<img src="../static/img/content.jpg"><p>设计大赛大厦受到收到撒谎的时间说的话</p><p>设计大赛，大厦受到收到撒谎的时间说的话撒的就是大家时代。开始的机会，山东黄金</p><p>设计大赛大速度是是，是多少，速度，厦受到收到撒谎的时间说的话</p><p>设计大赛大厦受到收到撒谎的时间说的受到收到受到收到是多少速度话</p><p>设计大赛大厦受到收到撒谎的撒点就是了看到是的旧时的旧时的旧时的圣诞节圣诞节使得数据圣诞节圣诞节速度和实践活动速度还是还是觉得还是觉得和金士顿金士顿时间说的几句话就速度速度上的话教授孙东东教授及时到货时间是你你都说开了房间的数量东风破覅哦答复都放到ufud负担复旦哦iu东方时间说的话</p><p>设计大赛大厦受到收到撒谎的时间说的话</p><img src="../static/img/content.jpg"><p>设计大赛大厦受到收到撒谎的时间说随风倒十分有地方gif度过i孤鬼ui哦都放到iu但是幅度和的话</p>',
          date: '2016年10月1日'

        }
      ]
    }
  },
  ready: function() {
    const self = this
    // 发布成功
    $(document).on('click', '.send-right', function () {
      $.closeModal()
      // 弹窗提示
      $.modal({
        title: '<i class="iconfont icon-gou green"></i>投票已提交',
        text: '页面将跳转你的投票结果'
      })
      // 弹窗消失
      setTimeout(function() {
        $('.modal.modal-in').hide()
        $('.modal-overlay').css('visibility', 'hidden')
        self.$route.router.go('./suggest-result')
      }, 2000)
    })
  },
  components: {
    VNav
  },
  methods: {
    vote: function() {
      $.modal({
        afterText: '<div class="vote-dialog"><h3>投票</h3><ul><li><input type="radio" checked="checked" name="vote"/>支持</li><li><input type="radio" name="vote"/>反对</li><li><input type="radio" name="vote"/>观望</li></ul><div class="textarea" contenteditable="true"></div><div class="send"><div class="send-left"><i class="iconfont icon-shape1"></div><div class="send-right"></i><i class="iconfont icon-fabu"></i><a>发布</a></div></div></div>'
      })
    }
  },
  send: function() {
    console.log('111')
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
.vote-dialog .send-left{
    margin: 1rem;
    float: left;
    color: #999;
}
.vote-dialog .send a{
    margin-top: 1rem;
    line-height: 2;
    float: right;;
}
.vote-dialog .send-right{
    float: right;
    color: #3ca7eb;
}
.vote-dialog .send-right i{
  margin: 1rem 1rem 1rem .5rem;
  float: right;
}

i.green{
    margin-right: 5px;
    color: #56bc8a;
    font-size: 2rem;
    font-weight: bold;
    vertical-align: sub;
    background-color: initial;
}
.modal-text {
    color: #ccc;
    font-size: .75rem;
}
</style>