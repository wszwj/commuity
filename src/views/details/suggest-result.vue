<template>
<div id="info">
  <v-nav :path="path" :title="title" :num="num" :subtitle="subtitle" :word="word" :add="add"></v-nav>
  <div class="content" v-for="item in items">
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
      <img :src="item.img">
      <v-content :content="item.content"></v-content>
    </div>
  <div class="content-block vote-result">
    <div class="result">
      <i class="iconfont icon-vote"></i><a>投票结果</a>
    </div>
    <div class="column row">
      <div class="col-33" v-for="vote in item.vote">
        <p class="percent">{{vote.percent}}%</p>
        <div class="pillar" :class="vote.color"></div>
        <a class="green">{{vote.type}}</a>
        <p>{{vote.num}}人</p>
      </div>
    </div>
    <div class="look-result">
      <a v-link="{ path: './comment', replace: true}">查看投票评论</a>共{{item.voted}}人
    </div>
  </div>
  </div>
  <div class="del" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape16"></i></div>
  <div class="back" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape32"></i></div>
</div>
</template>
<script>
import VNav from '../../components/Nav'
import VContent from '../../components/Content'
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
          voted: 234,
          account: '手机电视',
          avatar: require('../../assets/img/bighead.png'),
          rank: 'MVP',
          rankClass: 'red',
          introduction: '睡大觉是，萨蒂哦地',
          img: require('../../assets/img/content.jpg'),
          content: '飒飒的撒大苏打三大框架解放东街疯狂的机房监控的积分的jfk劳动纠纷将大幅扩大解放极度恐惧空间',
          vote: [
            {
              type: '支持',
              color: 'green',
              num: 168,
              percent: 70
            },
            {
              type: '观望',
              color: 'deongaree',
              num: 13,
              percent: 5
            },
            {
              type: '反对',
              color: 'red',
              num: 60,
              percent: 25
            }
          ]
        }
      ]
    }
  },
  ready: function() {
    const self = this
    // 柱形图方法
    function setWith (type, num) {
      $('.column .' + type).css('height', self.items[0].vote[num].percent + 'px')
      $('.column .' + type).siblings('p.percent').css('marginTop', 100 - self.items[0].vote[num].percent)
    }
    // 柱形图设置参数
    setWith('green', 0)
    setWith('deongaree', 1)
    setWith('red', 2)
  },
  components: {
    VNav,
    VContent
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

#info .vote-result{
  padding: 0;
  margin-bottom: 0;
}
#info .result{
  padding: .5rem;
  text-align: center;
  border-top: 5px solid #eff3f9;
  box-shadow: 0 3px 10px 0 #b3b3b3;
}
#info .result i{
  color: #0894ec;
}
#info .column{
  padding: 10% 20%;
  text-align: center;
}
#info .column p{
  margin: 0;
}
#info .column .pillar{
    height: 100px;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    display: -webkit-flex; /* Safari */
    display: flex;
}
#info .column a{
  background-color: initial;
}
a.red{
  color: #e86443;
}
a.green{
  color: #56bc8a;
}
a.deongaree{
    color: #2c3d52;
}

#info .look-result{
    padding: 1rem;
    text-align: center;
    font-size: .65rem;
    background-color: #eff3f9;
}
#info .look-result a{
  margin-right: .5rem;
  font-size: .75rem;
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