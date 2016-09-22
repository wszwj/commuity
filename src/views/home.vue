<template>
<div id="home">
    <nav class="topnav bar bar-nav">
        <div class="logo"><img src="../assets/img/bigLogo.jpg"></div>
        <a href=""></a>
        <div class="head"><a v-link="{ path: '/about', replace: true}"><img src="../assets/img/head.png"><span>·</span></a></div>
        <div class="rightIcon" v-link="{ path: '/search', replace: true}"><i class="iconfont icon-sou"></i></div>
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">关注</a>
        <a href="#tab2" class="tab-link button">发现</a>
      </div>
    </nav>

<div class="content">
  
  <div class="content">
    <div class="tabs">
      <div id="tab1" class="tab active">
            <div class="media-box" v-for="item in items">
                <h4 class="media-title"><img src="../assets/img/head.png">{{item.name}}<span>关注了问答</span></h4>
                <p class="media-title">{{item.title}}</p>
                <p class="media-info">{{item.content}}</p>
                <div class="media-text">
                <ul class="media-info">
                    <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                    <li class="other"><i class="iconfont icon-pinglun"></i>{{item.comment}}</li>
                    <li class="other"><i class="iconfont icon-tuijianzuiduo"></i></li>
                </ul>
                </div>
            </div>   
            <div class="add" v-link="{ path: '/add', replace: true}"><i class="iconfont icon-add"></i></div>        
        </div>
        <div id="tab2" class="tab">
            <slider :banner="banner"></slider>
            <div class="category" @cilck="active"><i class="iconfont icon-yingyong"></i>按游戏分类查看</div>
            <div class="type">
                <li>{{types}}</li>
            </div>
            <div class="media-box" v-for="item in items">
                <h4 class="media-title"><a href=""><img src="../assets/img/head.png">{{item.name}}</a>
                <span style="float: right;">
                <ul class="type-info">
                    <li class="other"><i class="iconfont icon-iconfontduihua"></i>{{item.comment}}</li>
                    <li><i class="iconfont icon-like1"></i>{{item.good}}</li>
                    
                </ul></span></h4>
                <p class="media-title">{{item.title}}</p>
                <p class="media-info">{{item.content}}</p>
            </div>
        </div>
    </div>
   </div>
</div>
</div>
</template>
<script>
import Slider from '../components/Slider'
export default {
  data () {
    return {
      title: '任务列表',
      types: '热门分类',

      items: [
        {
          id: 1,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          good: 23,
          comment: 123
        },
        {
          id: 2,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
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
      ],
      banner: []
    }
  },
  components: {
    Slider
  },
  methods: {
    active (e) {
      const buttons1 = [
        {
          text: '请选择',
          label: true
        },
        {
          text: '卖出',
          bold: true,
          color: 'danger'
        },
        {
          text: '买入'
        }
      ]
      const buttons2 = [
        {
          text: '取消',
          bg: 'danger'
        }
      ]
      const groups = [buttons1, buttons2]
      // $.actions(groups)
    }
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
    top: 3rem;
    background-color:#eff3f9;
}
#home .head{
    float: right;
    padding: 8px 10px 0 0;
}
.head img{
    width: 24px;
    vertical-align: bottom;
}
#home .leftIcon{
    float: left;
    padding: 10px 15px 0;
}
#home .rightIcon{
    float: right;
    padding: 1.3rem .5rem 0;
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
    margin-left: 1rem;
}
#home p.media-title{
    margin-bottom: 0;
    font-weight: bold;
}
#home p.media-info{
    color: #999;
    font-size:11pt;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
#home .topnav{
    padding: 0;
    text-align: center;
    width: 100%;
    background-color: #34465c;
}
#home .topnav span{
    color: red;
    font-size: 17pt;
    font-weight: bolder;
    margin-left: -5px;
    line-height: 2.3rem;
}
.topnav .logo img{
    float: left;
    height: 3rem;
}
#home .type ul{
    margin: 0;
    padding: 0;
    text-align: center;
}
#home .type ul li{
    padding: .2rem 0;
}
#home .type ul li:hover{
    background-color: #ccc;
}
#home .buttons-tab{
    padding: 0 20% 2%;
    width: 100%;
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
#home .add{
    height: 45px;
    width: 45px;
    background-color: #ec7e08;
    text-align: center;
    position: fixed;
    z-index: 999;
    bottom: 1rem;
    left: 1rem;
    border-radius: 50%;
    color: #fff
}
#home .add i{
    font-size: 1rem;
    line-height: 2rem;
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
#home .media-box{
    padding: 0 1rem;
    background-color: #fff;
    border-bottom: 1px solid #eff3f9;
}
#home .media-box .media-title img{
    vertical-align: middle;
    padding-right: .2rem;
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
    padding: .5rem 0;
    font-weight: bold;
}
#home .type a{
    color: #999;
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
</style>