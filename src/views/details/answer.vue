<template>
<div id="info">
    <v-nav :path="path" :title="title" :num="num" :subtitle="subtitle" :word="word" :add="add"></v-nav>
    <div class="content">
      <div class="content-top">
        <div class="head">
          <div class="head-left">
            <span>魔兽世界</span>
            <a>#服务器</a>
            <a>#英雄</a>
          </div>
          <div class="head-right">
            <i class="iconfont icon-shape73"></i>
            <i class="iconfont icon-duihua"></i>
            <span>84</span>
          </div>
        </div>
        <div class="media-box content-block">
            <p class="media-title">由各种物质组，成的巨型球状天体。叫做星球</p>
            <p class="media-info"><span>由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种...</span><a>[查看更多]</a></p>
      </div>
      <div class="list-content">
        <div class="list-show">
        <ul>
          <li><img src="../../assets/img/head.png"></li>
          <li class="hot">+1</li>
          <li>6k</li>
        </ul>
        </div>
        <div class="list-body">
          <div class="list-title"><h3>住宅市场</h3><span>MVP</span></div>
          <div class="list-mark"><i class="iconfont icon-jinqi1"></i>推荐答案</div>
          <p>的发动机发动机发家里的发生纠纷了就打算离开房间楼上的房间监实打实大苏打盛大的</p>
        </div>
        <div class="list-more">
          <i class="iconfont icon-duihua"></i>
          <span>83</span>
          <i class="iconfont icon-more"></i>
        </div>
      </div>
    </div>

</div>
</template>
<script>
import VNav from '../../components/Nav'
// import $ from 'zepto'
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
      ]
    }
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
#info .head-right i{
    color: #d4e7f2;
    margin-left: .5rem;
}
#info .head-right span{
  color: #ccc;
}
#info .media-box{
  margin-bottom: 0;
  color: initial;
  border-bottom: 5px solid #eff3f9;
}
#info .list-content{
  padding: .5rem 1.5rem;
  height: 7rem;
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
}
#info .list-body .list-title span{
    width: 3rem;
    margin-left: 5px;
    padding: .1rem .3rem;
    text-align: center;
    font-size: .5rem;
    color: #fff;
    background-color: red;
}
#info .list-body .list-mark{
  float: right;
  color: #e0e0e0;
  font-size: .75rem;
}
#info .list-body .list-mark i{
    vertical-align: middle;
    color: #f2992e;
}
#info .list-body p{
    margin: 2rem 0 .5rem;
    font-size: .75rem;
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
    font-size: .75rem;
}
#info .list-content .list-more span{
  vertical-align: text-bottom;
}
#info .list-content .list-more i{
  margin-left: .5rem;
  vertical-align: top;
}
</style>