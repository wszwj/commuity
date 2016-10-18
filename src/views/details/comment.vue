<template>
<div id="info-comment">
<!-- 导航 -->
    <v-nav :path="path" :title="title" :icon="icon" :add="add"></v-nav>
    <div class="content">
      <!-- 评论列表 -->
      <div class="list-content" v-for="list in list">
        <div class="list-main">
        <div class="list-show">
          <!-- 头像 -->
          <img :src="list.avatar">
        </div>
        <!-- 内容 -->
        <div class="list-body">
          <h3>{{list.title}}</h3>
          <p>{{list.content}}</p>
        </div>
        <!-- 更多 -->
        <div class="list-more">
          <i class="iconfont icon-dianzan"><span>{{list.good}}</span></i>
          <div class="click-more">
            <i class="iconfont icon-duihua"><span>{{list.review}}</span></i>
            <a>收起评论</a>
          </div>
          
          <!-- <a>收起评论</a> -->
        </div>
        </div>
        <!-- 打开回复 -->
        <div class="reply" v-if="list.reply ? true :false">
          <div class="reply-item" v-for="reply in list.reply">
            <div class="reply-user">
              <!-- 头像 -->
              <img :src="reply.avatar"><h3>{{reply.person}}</h3>
            </div>
            <!-- 内容 -->
            <div class="reply-body">
              <p>@<a>{{reply.from}}</a>{{reply.content}}</p>
            </div>
            <!-- 更多 -->
            <div class="reply-more">
              <i class="iconfont icon-zan1"></i>
              <a class="action">回复此评论</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <nav class="bar bar-tab">
        <p>评论：<span></span> <input type="text"/><i class="iconfont icon-daohang-copy"></i></p>
      </nav>
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
      title: '评论列表',
      path: '/home',
      icon: 'icon-duihua',
      add: [
        {
          name: 'icon-edit'
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
          good: 236,
          review: 93,
          add: 1,
          num: '6k',
          reply: [
            {
              person: '里出乎',
              avatar: require('../../assets/img/head.png'),
              from: '评论列表',
              content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少'
            },
            {
              person: '里出乎',
              avatar: require('../../assets/img/head.png'),
              from: '评论列表',
              content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少'
            }
          ]
        },
        {
          title: '暴雪',
          avatar: require('../../assets/img/head.png'),
          rank: '开发商',
          color: 'deongaree',
          content: '撒大苏打实打实受到收到实打实打算第三代撒大苏打撒实打实打算实打实打算受到收到是多少',
          recommend: true,
          review: 93
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
    // 评论回复首行去掉border
    const firstReply = $('.list-content .reply')
    firstReply.each(function() {
      $(this).children('.reply-item').eq(0)
        .css('border', 'hidden')
    })
    // const html = $(this).html()
    $(document).on('click', '.click-more', function () {
      const a = $(this).children('a')
      const i = $(this).children('i')
      const reply = $(this).parents('.list-main').siblings('.reply')
      const display = $(this).children('a').css('display')
      if (reply[0]) {
        if (display === 'none') {
          a.show()
          i.hide()
          reply.show()
        }
        else {
          a.hide()
          i.show()
          reply.hide()
        }
      }
    })
    // 回复
    const footer = $('.footer .bar')
    const span = $('.footer .bar span')
    $(document).on('click', '.content', function () {
      $('i.icon-edit').show()
      footer.hide()
    })
    $(document).on('click', 'a.action', function () {
      const person = $(this).parents('.reply-item').find('h3')
      footer.show()
      span.html('@' + person.html())
    })
    $(document).on('click', 'i.icon-edit', function () {
      const person = $('.list-content').find('h3')
      $(this).hide()
      footer.show()
      span.html('@' + person.html())
    })

    // 查看更多
    // const p = $('p.media-info')
    // const span = $('p.media-info span')
    // const pWidth = p.width()
    // const num = Math.ceil(pWidth * 2 / 15 - 8)
    // const spanContent = span.html()
    // span.html(spanContent.substr(0, num) + '...')
  },
  components: {
    VNav
  }
  // methods: {
  //   reply: function() {
  //     alert('ss')
  //   }
  // }
}
</script>

<style>
@import '../../assets/css/style.css';
#info-comment .title{
  color: #afafaf;
}
#info-comment .bar>p.subtitle{
  margin-left: 4.5rem;
  color: #afafaf
}
#info-comment a.button i.icon-duihua{
  font-size: 24px;
}

#info-comment .media-box{
  margin: 0;
  color: initial;
  border-bottom: 5px solid #eff3f9;
}
#info-comment .media-box p.media-title{
  margin: .5rem 0;
}
#info-comment .list-content{
  box-shadow: 0 -3px 10px 0 #eff3f9;
}
#info-comment .list-main{
  display: inline-block;
  padding: 1rem 1rem .5rem;
  box-shadow: 0 3px 10px 0 #eff3f9;
}




#info-comment .list-show{
  float: left;
}
#info-comment .list-show img{
    float: left;
    padding: 0 5%;
    width: 100%;
}
#info-comment .list-show{
  width: 10%;
}
#info-comment .list-content .list-body{
    float: left;
    width: 87%;
    margin-left: 3%;
}
#info-comment .list-body  h3{
    margin: 0;
    float: left;
    font-size: .75rem;
    font-weight: normal;
    color: #999;
    line-height: 100%;
}
#info-comment .list-body .list-title,#info-comment .reply-body .reply-title{
  float: left;
}
#info-comment .list-body p{
  margin: .5rem 0 0;
  float: left;
  font-size: .75rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
#info-comment .list-more,#info-comment .reply-more{
    float: right;
    color: #999;
    font-size: .75rem;
}
#info-comment .list-more a{
  margin-left: .5rem;
}
#info-comment .list-more i,#info-comment .reply-more i{
  margin-left: 1rem;
  vertical-align: top;
  font-size: 18px;
}
#info-comment .list-more span{
    margin-left: 2px;
    font-size: .7rem;
    font-family: Microsoft Yahei;
}
#info-comment .click-more{
  display: initial;
}
#info-comment .click-more a{
  font-size: .7rem;
  display: none;
}



#info-comment .reply{
  display: none;
}
#info-comment .reply-item{
    display: inline-block;
    padding: .5rem 1rem;
    border-top: 1px solid #ccc;
}
#info-comment .reply-user{
  float: left;
  margin-left: 13%;
}
#info-comment .reply-user h3{
    margin: 0 .5rem;
    float: left;
    font-size: .75rem;
    font-weight: normal;
    color: #999;
}
#info-comment .reply-user img{
  float: left;
  width: 28%;
}
#info-comment .reply-body{
  margin-left: 13%;
  float: left;
}
#info-comment .reply-body p{
  margin-bottom: 0;
  float: left;
  font-size: .7rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}

#info-comment .reply-more a{
    float: right;
    margin-left: .7rem;
    font-size: .7rem;
    line-height: 2;
}

#info-comment .footer .bar{
    background-color: #34465c;
    box-shadow: 0 -3px 10px 0 #b3b3b3;
    display: none;
}
#info-comment .footer .bar p{
    margin: .7rem 1rem;
    color: #fff;
}
#info-comment .footer .bar p span{
    font-size: .7rem;
    font-weight: lighter;
}
#info-comment .footer .bar p input{
    background-color: inherit;
    font-size: .7rem;
    border: hidden;
}
#info-comment .footer .bar p i{
  float: right;
}
</style>