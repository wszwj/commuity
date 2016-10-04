<template>
<div id="game">
    <nav class="topnav">
        <!-- 导航 -->
        <div class="top">
            <div class="leftIcon">
                <i v-link="{ path: '/home', replace: true}" class="small iconfont icon-shape66"></i>游戏主页
            </div>
            <div class="rightIcon">
                <i v-link="{ path: '/message', replace: true}" class="iconfont icon-xinshixin"></i>
                <span>12k</span><button>已关注</button>
            </div>
        </div>
        <div class="main">
            <p>Overwactch</p>
            <p>守望先锋</p>
            <p class="info">为了未来而战。<img src="../assets/img/bighead.png"></p>
        </div>
        <div class="buttons-tab">
            <a href="#tab1" class="tab-link active button">资料</a>
            <a href="#tab2" class="tab-link button">动态</a>
            <a href="#tab3" class="tab-link button">相关推荐</a>
        </div>
    </nav>
    <div class="content">
    <div class="tabs">
      <!-- 资料页面 -->
      <div id="tab1" class="tab active">
         <!-- 游戏分类栏目 -->
         <div class="game-list">
              <i class="small iconfont icon-yingyong"> {{page}}</i>
              <a>#{{category}}</a>
              <div class="media-box">
                  <p class="media-info"><span>{{info}}</span><a>[查看更多]</a></p>
              </div>
         </div>
         <!-- 栏目 -->
         <div class="row" v-for="item in items_1">
            <div class="col-50 col-left"><i class="iconfont icon-shape14"></i>{{item.title}}</div>
            <div class="col-50 col-right" v-for="state in item.states" @click="ask(state.isClass)" :class="{'col-after':state.isClass}"><a>{{state.name}}</a></div>
            <div class="col-33" v-for="list in item.lists">
                <ul>
                    <li><img :src=list.img alt="{{list.name}}"></li>
                    <li>{{list.name}}</li>
                    <li class="badge" v-if="list.badgeClass ? true :false" :class="list.badgeClass">{{list.badge}}</li>
                </ul>
            </div>
         </div>
         <div class="game-more">
            <a>查看更多</a>
         </div>
         
      </div>
      <!-- 动态页面 -->
      <div id="tab2" class="tab">
          <div class="media-box infinite-scroll"  data-distance="100" v-for="item in items_2">
              <h4 class="media-title"><img src="../assets/img/head.png">{{item.name}}<span>关注了问答</span></h4>
              <p class="media-title">{{item.title}}</p>
              <!-- 展示图 -->
              <div class="media-show" v-if="item.imgs ? true :false">
                  <img v-for="img in item.imgs" :src="img.url" alt="{{img.alt}}">
              </div>
              <p class="media-info" v-if="item.content ? true :false"><span>{{item.content}}</span><a>[查看更多]</a></p>
              <div class="media-text">
              <ul class="media-info">
                  <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                  <li class="other"><i class="iconfont icon-pinglun"></i>{{item.comment}}</li>
                  <li class="other"><i class="iconfont icon-tuijianzuiduo"></i></li>
              </ul>
              </div>
          </div>
      </div>
      <!-- 相关推荐页面 -->
      <div id="tab3" class="tab">
        <div class="row">
          <div class="follow-game col-100" v-for="item in items_3">
            <div class="follow-game-img"><img src="../assets/img/game.png"></div>
            <div class="follow-game-title">
                <p style="letter-spacing: 2px;">{{item.name}}</p><p>{{item.nameEN}}</p>
            </div>
            <div class="follow-game-desc">
                <p>#{{item.type}}</p><i class="iconfont icon-xinshixin"></i><span>{{item.num}}k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="del" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape16"></i></div>
  <div class="back" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape32"></i></div>
</div>
</template>
<script>
import $ from 'zepto'
export default {
  data () {
    return {
      page: '游戏分类',
      category: '射击类',
      info: '沙河街睡觉多喝水多喝水客户端手机号多少呢的模拟隧道你速度看沙河街睡觉多喝水多喝水客户端手机号多少呢的模拟隧道你速度看',
      items_1: [
        {
          title: '驻守人',
          states: [
            {name: '申请', isClass: false}
          ],
          lists: [
            {
              img: require('../assets/img/bighead.png'),
              name: '暴雪',
              badge: '开发商',
              badgeClass: 'blue'
            },
            {
              img: require('../assets/img/bighead.png'),
              name: '暴雪',
              badge: '开发商',
              badgeClass: 'green'
            },
            {
              img: require('../assets/img/bighead.png'),
              name: '暴雪',
              badge: '开发商',
              badgeClass: 'red'
            }
          ]
        },
        {
          title: '发声者',
          states: [
            {name: '已获准', isClass: true}
          ],
          lists: [
            {
              img: require('../assets/img/bighead.png'),
              name: '暴雪水水'
            },
            {
              img: require('../assets/img/bighead.png'),
              name: '暴雪得到'
            },
            {
              img: require('../assets/img/bighead.png'),
              name: '暴雪得到'
            }
          ]
        }
      ],
      items_2: [
        {
          id: 1,
          name: '时空酸奶',
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
          id: 2,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          imgs: [
            {url: 'static/img/index_show.jpg', alt: 'x'}
          ],
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
        },
        {
          id: 4,
          name: '时空酸奶',
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
          id: 5,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          imgs: [
            {url: 'static/img/index_show.jpg', alt: 'x'}
          ],
          good: 23,
          comment: 123
        },
        {
          id: 6,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          good: 23,
          comment: 123
        }
      ],
      items_3: [
        {
          id: 1,
          name: '守望先锋',
          nameEN: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 2,
          name: '守望先锋',
          nameEN: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 3,
          name: '守望先锋',
          nameEN: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 4,
          name: '守望先锋',
          nameEN: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 5,
          name: '守望先锋',
          nameEN: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 6,
          name: '守望先锋',
          nameEN: 'Overwatch',
          type: '射击类',
          num: 12
        }
      ]
    }
  },
  ready: function() {
    // 打勾选择 不同分辨率适应
    const list = $('.media-show')
    for (let i = 0; i <= list.length; i ++) {
      const imgUrl = list.eq(i).children('img')
      for (let j = 0; j <= imgUrl.length; j ++) {
        if (j <= 4) {
          imgUrl.css('width', 100 / imgUrl.length + '%')
        }
        else {
          imgUrl.css('width', '25%')
        }
      }
    }
    // 查看更多
    const p = $('p.media-info')
    const span = $('p.media-info span')
    const pWidth = p.width()
    const num = Math.ceil(pWidth * 2 / 15 - 9)
    const spanContent = span.html()
    span.html(spanContent.substr(0, num) + '...')
  },
  methods: {
    ask: function(event) {
      if (!event) {
        this.$route.router.go('./ask')
      }
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
#game{
    background-color: #eff3f9;
}
#game .topnav{
    height: 200px;
    box-shadow: none;
}
#game .topnav .top{
    height: 25%;
    font-size:.8rem;
}
#game .topnav .leftIcon{
    float: left;
    padding: 16px 15px 0;
}
#game .topnav .rightIcon{
    float: right;
    padding: 10px 15px 0;
}
#game .leftIcon i.small{
    font-size: 15px;
    margin-right: .5rem;
}
#game .rightIcon i{
    font-size: 14px;
}
#game .rightIcon span{
    margin-right: .5rem;
    padding: 0 4px;
    font-size: .1rem;
    border: 1px solid #898989;
    background-color: #898989;
}
#game .rightIcon button{
    padding: .1rem .2rem;
    background-color: inherit;
    font-size: .7rem;
    color: #999;
    border: 1px solid #999;
}

#game .main{
    margin-top: .5rem;
}
#game .main p{
    margin:0 2rem;
    font-size:.8rem;
}
#game .main p.info{
    margin: 1.5rem 2rem;
    font-size: .6rem;
}
#game .main img{
    height: 60px;
    float: right;
    position: absolute;
    top: 140px;
    right: .5rem;
}
#game .buttons-tab{
    top: 200px;
    position: absolute;
    width: 100%;
    height: 60px;
    overflow: hidden;
    padding: 0 20%;
}

#game .buttons-tab .button.active{
    font-weight: bolder;
    color:#34465c;
    border-color:#ec7e08;
}
#game .buttons-tab .button{
    text-indent: .4rem;
    border-top: 8px solid rgba(0, 0, 0, 0);
    border-bottom: none;
    letter-spacing: .2rem;
}
#game>.content{
    margin-top: 265px;
    padding: 0;
    padding-bottom: 2px;
    background-color: #fff;
}
#game .game-list{
    padding: 1rem 1.75rem;
}
#game .game-list i.iconfont{
    font-size: 1rem;
    color: #ccc;
    -webkit-text-stroke-width: inherit;
}
#game .game-list>a{
    font-size: .75rem;
    margin-left: .5rem; 
}
#game .game-list p.media-info{
    padding-left: .5rem;
}
#game .row{
    padding: 1rem 1.75rem 0;
}
#game #tab1 .row{
    border-top: 5px solid #eff3f9; 
}
#game .col-left{
    color: #ccc;
}
#game .col-left i{
    padding-right: .5rem;
    font-size: 21px;
}
#game .col-right{
    line-height: 2;
    text-align: right;
}

#game .col-right a{
    padding: 0 10px;
    font-size: 11pt;
    letter-spacing: 2px;
    border: 1px solid #0894ec;
}
#game .col-after a{
    color: #6d6d72;
    border: 1px solid #6d6d72;
}
#game .col-33 ul{
    padding-left: 30px;
    text-align: center;
}
#game .col-33 ul li{
    text-align: center;
    font-size: .7rem;
    letter-spacing: 1px;
}
#game .col-33 ul li.badge{
    border-radius: 0;
    font-size: .5rem;
}
#game .col-33 ul li.blue{
    background-color: #2c3d52;
    border-color: #2c3d52;
    color: #fff;
}
#game .col-33 ul li.green{
    background-color: #56bc8a;
    border-color: #56bc8a;
    color: #fff;
}
#game .col-33 ul li.red{
    background-color: #e86443;
    border-color: #e86443;
    color: #fff;
}
#game .col-33 ul li img{
    width: 100%;
}
#game .game-more{
  padding-bottom:1rem;
  text-align: center;
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
    font-size:15px;
    margin-left: 1rem;
}
ul.media-info li.other i{
    font-size: 21px;
    vertical-align: middle;
}
#game .media-box{
    margin-top: 5px;
    padding: 0 1rem;
    background-color: #fff;
    border-bottom: 1px solid #eff3f9;
}
#game .media-box .media-title img{
    vertical-align: middle;
    padding-right: .2rem;
}

#game .media-show{
    padding: 1rem 0;
    height: 130px;
}
#game .media-show img{
    width: 100%;
    height: 100%;
}


.row .follow-game{
    margin-top: 1rem;
}
.follow-game-img img{
    width: 20%;
    float: left;
}
.follow-game-title{
    margin-left: 1rem;
    float: left;
}
.follow-game-title p{
    margin: 0 .5rem;
    color: initial;
    text-align: center;
    font-size: 13pt;
}
.follow-game-desc i.iconfont{
    color: #333;
    margin:.2rem;
    font-size:16px;
}
.follow-game-desc{
    margin:.4rem 1rem;
    float: right;
    font-size: 9pt;
}
.follow-game-desc span{
    padding: 0 .2rem;
    background-color: #d3d1d1;
    color: #fff;
}
.follow-game-desc p{
    color: #0894ec;
    text-align: right;
}





#game .del{
    height: 45px;
    width: 45px;
    background-color: rgba(116, 126, 140, 0.89);
    text-align: center;
    position: fixed;
    z-index: 999;
    bottom: 5rem;
    left: 1rem;
    border-radius: 50%;
    color: #fff;
}
#game .back{
    height: 45px;
    width: 45px;
    background-color: rgba(116, 126, 140, 0.89);
    text-align: center;
    position: fixed;
    z-index: 999;
    bottom: 2rem;
    left: 1rem;
    border-radius: 50%;
    color: #fff;
}
#game .del i,#game .back i{
    font-size: 18px;
    line-height: 2.2rem;
}
</style>