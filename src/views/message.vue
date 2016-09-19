<template>
<div id="message">
    <v-nav :path="path" :title="title" :icon="icon" :add="add"></v-nav>
    <div class="list-block">
        <ul>
          <li v-for="new in news" class="item-content">
            <div class="cell-hd" :class="new.first"> 
            {{new.tip}}
                <div class="cell-bd"> {{new.content}}</div>
            {{new.info}}
            </div> 
            <div class="cell-ft">{{new.time}}</div>
          </li>
<!--           <li class="item-content">
            <div class="cell-hd"> 
            您的发声
                <div class="cell-bd"> 星际争霸众筹已多水水</div>
            收到1条评论
            </div> 
            <div class="cell-ft">1分钟前</div>
          </li> -->
        </ul>
    </div>
     <div class="del" v-link="{ path: '/home', replace: true}"><i class="iconfont icon-shape16"></i></div>
     <div class="back" v-link="{ path: '/home', replace: true}"><i class="iconfont icon-shape32"></i></div>
</div>
</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的信息',
      path: '/about',
      icon: 'icon-xinxi',
      add: [
        {
          name: 'icon-loudou',
          path: '/about'
        }
      ],
      news: [
        {
          tip: 'BRAVO!您的发声',
          content: '星际争霸众筹已多水水',
          info: '被评为优秀建议',
          time: '1小时前',
          first: 'item-first'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
        },
        {
          tip: '您的发声',
          content: '星际争霸众筹已多水水',
          info: '收到1条评论',
          time: '1分钟前'
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
@import '../assets/css/style.css';
#message .bar a.button .iconfont{
  font-size: 21px;
}
#message .list-block{
  margin-top: 3rem;
}

#message .list-block ul:before,#message .list-block ul:after{
  background-color: inherit;
}
#message .list-block ul{
  background-color: initial;
}
#message ul li{
    padding: .8rem .75rem;
    border-bottom: 1px solid #e5e5e5;
    color: #8b8b8b;
}
#message .item-first{
  color: initial;
}
#message .cell-hd{
  width: 80%;
  font-size: .8rem;
}
#message .cell-bd{
    display: inline-block;
    color: #34465c;
    width: 40%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #eee;
    line-height: 100%;
}

#message .cell-ft {
    float: right;
    color: #999;
    font-weight: normal;
    font-size: 11pt;
}

#message .del{
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
#message .del i,#message .back i{
    font-size: 18px;
    line-height: 2.2rem;
}

#message .back{
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

</style>