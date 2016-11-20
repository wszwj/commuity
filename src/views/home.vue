<template>
<div id="home">
    <!-- 导航 -->
    <nav class="topnav bar bar-nav">
        <div class="logo"><img src="../assets/img/bigLogo.jpg"></div>
        <div class="head" v-link="{ path: '/about', replace: true}"><img :src="headimgurl"/><span>·</span></div>
        <div class="rightIcon" v-link="{ path: '/search', replace: true}"><i class="iconfont icon-sou"></i></div>
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">关注</a>
        <a href="#tab2" class="tab-link button">发现</a>
      </div>
    </nav>
  
  <div class="content">
    <div class="tabs">
    <!-- 关注页面 -->
      <div id="tab1" class="tab active">
            <div class="media-box" v-for="item in items">
                <h4 class="media-title"><img src="../assets/img/head.png">{{item.name}}<span>{{item.action}}</span><span>{{item.game}}</span></h4>
                <p class="media-title" v-if="item.title ? true :false">{{item.title}}</p>
                <!-- 展示图 -->
                <div class="media-show" v-if="item.imgs ? true :false">
                    <a v-for="img in item.imgs" @click="imgSkip(item.action)"><img :src="img.url" alt="{{img.alt}}"></a>
                </div>
                <v-content :content="item.content" :more="true" :url="url"></v-content>
                <div class="media-text">
                <ul class="media-info"  v-if="item.game">
                    <li><i class="iconfont icon-xinshixin"></i>{{item.good}}</li>
                    <li><span>声</span>{{item.comment}}</li>
                </ul>
                <ul class="media-info"  v-else>
                    <li><i class="iconfont icon-zan" v-if="item.good ? true :false"></i>{{item.good}}</li>
                    <li><i class="iconfont icon-like"></i></li>
                    <li><i class="iconfont icon-pinglun-copy other"></i>{{item.comment}}</li>
                    <li><i class="iconfont icon-tuijianzuiduo other"></i></li>
                </ul>
                </div>
            </div>           
        </div>
        <!-- 发现页面 -->
        <div id="tab2" class="tab">
        <!-- 轮播图 -->
            <slider :banner="banner"></slider>
            <!-- 分类选择 -->
            <div class="category"><i class="iconfont icon-yingyong"></i>按游戏分类查看</div>
            <div class="type">
                <select>
                    <option v-for="type in types">{{type}}</option>
                </select>
            </div>
            <!-- 内容列表 -->
            <div class="media-box" v-for="item in items">
                <h4 class="media-title"><a href=""><img src="../assets/img/head.png">{{item.name}}</a>
                <p class="media-title">{{item.title}}</p>
                <!-- 展示图 -->
                <div class="media-show" v-if="item.imgs ? true :false">
                  <a v-for="img in item.imgs" @click="imgSkip(item.action)"><img :src="img.url" alt="{{img.alt}}"></a>
                </div>
                <v-content :content="item.content"></v-content>
                <div class="media-text">
                <ul class="media-info">
                    <li><i class="iconfont icon-zan" v-if="item.good ? true :false"></i>{{item.good}}</li>
                    <li class="other"><i class="iconfont icon-like"></i>{{item.comment}}</li>
                    <li class="other"><i class="iconfont icon-tuijianzuiduo"></i></li>
                </ul>
                </div>
            </div>    
        </div>
        <!-- 操作 -->
        <div class="add" @click="popup()"><i class="iconfont icon-add"></i></div>

        <div class="popup popup-about">
          <div class="content-block">
            <div class="add-after close-popup"><i class="iconfont icon-shape16"></i></div>
            <div class="add-mode">
                <ul>
                    <li @click="skip()"  v-link="{ path: '/add#tab2', replace: true}">提问题</li>
                    <li @click="skip()"  v-link="{ path: '/add', replace: true}">写建议</li>
                </ul>
            </div>
          </div>
        </div>
    </div>
   </div>
</div>
</template>
<script>
import Slider from '../components/Slider'
import VContent from '../components/Content'
import $ from 'zepto'
export default {
  data () {
    return {
      headimgurl: '',
      title: '任务列表',
      types: ['热门分类', '每日分类', '最新分类'],
      isHide: false,
      url: '/details/answer',
      items: [
        {
          name: '时空酸奶',
          action: '关注了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          imgs: [
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'},
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'}
          ],
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了游戏',
          game: '守望先锋',
          imgs: [
            {url: 'static/img/index_show.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '赞同了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          imgs: [
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'},
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了游戏',
          game: '守望先锋',
          imgs: [
            {url: 'static/img/index_show.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '赞同了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          imgs: [
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'},
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'}
          ],
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了游戏',
          game: '守望先锋',
          imgs: [
            {url: 'static/img/index_show.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '赞同了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          imgs: [
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'},
            {url: 'static/img/show_1.jpg', alt: 'x'},
            {url: 'static/img/2.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '关注了游戏',
          game: '守望先锋',
          imgs: [
            {url: 'static/img/index_show.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          name: '时空酸奶',
          action: '赞同了问答',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        }
      ],
      banner: []
    }
  },
  ready: function() {
    // 多图组合
    this.$http.get('../../../static/data/access_token.json')
    .then((data) => {
      this.headimgurl = data.data.headimgurl
    })
    const list = $('.media-show')
    for (let i = 0; i <= list.length; i ++) {
      const imgUrl = list.eq(i).children('a').children('img')
      for (let j = 0; j <= imgUrl.length; j ++) {
        if (j <= 4) {
          imgUrl.css('width', 100 / imgUrl.length + '%')
        }
        else {
          imgUrl.css('width', '25%')
        }
      }
    }
    // 底下操作弹出
    // $(document).on('click', '.add', function () {
    //   $.popup('.popup-about')
    // })
  },
  methods: {
    skip: function() {
      $('.popup-overlay').hide()
      $('.popup').hide()
    },
    imgSkip: function(action) {
      if (action === '关注了游戏') {
        this.$router.go('/gamehome')
      }
    },
    popup: function() {
      $.popup('.popup-about')
      $('.popup-overlay').hide()
    }
  },
  components: {
    Slider, VContent
  }
}
</script>
<style>
@import '../assets/css/style.css';
#home{
    height: 100%;
    background-color: #eff3f9;
}

#home .content{
    top: 5.5rem;
    background-color:#eff3f9;
}
#home .head{
    float: right;
    margin: 0 .5rem 0 0;
}
.head img{
    margin-top: 1.2rem;
    height: 1.2rem;
    vertical-align: bottom;
    border-radius: 15%;
}
#home .leftIcon{
    float: left;
    padding: 10px 15px 0;
}
#home .rightIcon{
    float: right;
    padding: 1rem .5rem 0;
}

#home h4{
    margin: 0;
    padding-top: 1rem;
    font-weight: normal;
    color: #999;
}
#home h4 a{
    color: #999;
}
#home h4 span{
  margin-left: .5rem;
}
#home p.media-title{
    margin-bottom: 0;
    font-weight: bold;
}

#home .topnav{
    padding: 0;
    text-align: center;
    width: 100%;
    background-color: #34465c;
}
#home .topnav span{
    margin-left: -.3rem;
    color: red;
    font-size: 1.5rem;
    font-weight: bolder;
    line-height: 160%;
}
.topnav .logo img{
    float: left;
    height: 3rem;
}

#home .buttons-tab{
    padding: 0 20% 2%;
    width: 100%;
    height: 2.5rem;
    overflow: hidden;
}

#home .buttons-tab .button.active{
    font-weight: bolder;
    color:#34465c;
    border-color:#ec7e08;
}
#home .buttons-tab .button{
    margin: 0 10%;
    text-indent: .4rem;
    letter-spacing: .5rem;
    border-top: 8px solid rgba(0, 0, 0, 0);
    border-bottom: none;
}
#home .bar .button{
    top: -2px;
}
#home .bar:after{
    background-color: inherit;
}

ul.media-info{
    text-align: right;
    margin-bottom: 0;
    color: #999;
}
ul.media-info li{
    text-align: right;
    display: inline;
    font-size: 11pt;
}
ul.media-info li i{
    font-size:.75rem;
    margin: 0 .1rem 0 1rem;
}
ul.media-info li i.other{
    vertical-align: middle;
}
ul.media-info li span{
    margin-left: 1rem;
    padding: 0 2px;
    background-color: #999;
    color: #fff;
    font-weight: lighter;
}
#home .media-box{
    margin-top: 5px;
    padding: 0 1rem;
    background-color: #fff;
    border-bottom: 1px solid #eff3f9;
}
#home .media-box .media-title img{
    vertical-align: middle;
    padding-right: .2rem;
}

#home .media-show{
    padding: 1rem 0;
    height: 130px;
}
#home .media-show img{
    width: 100%;
    height: 100%;
}
#home .category{
    background-color: #fff;
    color: #999;
    font-size: 1rem;
    padding: .4rem 1rem .2rem;
}
#home .category i{
    margin-right: 1rem;
    vertical-align: middle;
}
#home .type{
    text-align: center;
    font-weight: bold;
}
#home .type a{
    color: #999;
}
#home .type select{
    background-color: inherit;
    border: hidden;
    margin: 0;
    padding: 2% 41%;
    appearance: none;
    -webkit-appearance: none;
}
#home .type select option{
    padding-bottom: 1rem;
    text-align: center;
    background-color: #eff3f9;
    border: 1px solid #eff3f9;
}
#home ul.type-info{
    margin: 0;
    padding: 0;
    display: -webkit-box;
}
#home ul.type-info li{
    margin-right: .5rem;
    line-height: 100%;
    font-size: 11pt;
}
#home ul.type-info i{
    float: left;
    width: 20px;
    height: 22px;
    color: #d4e7f2;
    font-size: 11pt;
}
#home .add{
    height: 2rem;
    width: 2rem;
    background-color: #ec7e08;
    text-align: center;
    position: fixed;
    z-index: 999;
    bottom: 2.5rem;
    left: 2rem;
    border-radius: 50%;
    color: #fff
}
#home .add i{
    font-size: 1rem;
    line-height: 2rem;
}
#home .hide{
    display: none;
}
#home .popup{
    position: fixed;
    background-color: rgba(0, 0, 0, 0);
}
#home .popup .add-after{
    height: 2rem;
    width: 2rem;
    background-color: #ec7e08;
    text-align: center;
    position: absolute;
    bottom: 2.5rem;
    left: 2rem;
    border-radius: 50%;
    color: #fff;
}
#home .popup .add-after i{
    font-size: .75rem;
    line-height: 2rem;
}
#home .add-mode{
    height: 2rem;
    position: absolute;
    bottom: 2.5rem;
    left: 4rem;
    margin-left: .5rem;
}
#home .add-mode ul{
    height: 100%;
    margin: 0;
    padding:2% 0;
}
#home .add-mode ul li{
    display: inline-block;
    height: 100%;
    line-height: 2;
    margin: 0 0.75rem 0 .2rem;
    padding: 0 .5rem;
    letter-spacing: 1px;
    color: #000;
    font-size: .75rem;
    border: 1px solid #999;
    background-color: #fff;
}


</style>