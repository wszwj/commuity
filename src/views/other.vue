<template>
<div id="about">
  <v-nav :path="path" :title="title" :icon="icon"></v-nav>
  <div class="list-block">
    <ul>
      <li class="item-content item-link" v-link="{ path: '/rank', replace: true}">
        <div class="item-media"></div>
        <div class="message item-inner"> 
            <div class="cell-hd">
                <i class="iconfont icon-shape74"></i>
                <div class="cell-bd">
                    <p class="media-title">我的头衔</p>
                    <p class="media-desc">玩家、驻守人头衔等级</p>
                </div>
            </div>
            <div class="cell-ft">...</div>
        </div>
      </li>
    </ul>
  </div>
<div class="list-block">
    <ul>
      <li class="item-content item-link" v-link="{ path: '/follow', replace: true}">
        <div class="item-media"></div>
        <div class="message item-inner"> 
            <div class="cell-hd">
                <i class="iconfont icon-like"></i>
                <div class="cell-bd">
                    <p class="media-title">我的关注</p>
                    <p class="media-desc">游戏、发声、用户</p>
                </div>
            </div>
            <div class="cell-ft">...</div>
        </div>
      </li>
      <li class="item-content item-link" v-link="{ path: '/collect', replace: true}">
        <div class="item-media"></div>
        <div class="message item-inner"> 
            <div class="cell-hd">
                <i class="iconfont icon-tuijianzuiduo"></i>
                <div class="cell-bd">
                    <p class="media-title">我的收藏</p>
                    <p class="media-desc">建议、问题的回答收藏</p>
                </div>
            </div>
            <div class="cell-ft">...</div>
        </div>
      </li>
      <li class="item-content item-link" v-link="{ path: '/say', replace: true}">
        <div class="item-media"></div>
        <div class="message item-inner"> 
            <div class="cell-hd">
                <div class="icon-word">声</div>
                <div class="cell-bd">
                    <p class="media-title">我的发声</p>
                    <p class="media-desc">发布的问题、建议</p>
                </div>
            </div>
            <div class="cell-ft">...</div>
        </div>
      </li>
      <li class="item-content item-link" v-link="{ path: '/answer', replace: true}">
        <div class="item-media"></div>
        <div class="message item-inner"> 
            <div class="cell-hd">
                <div class="icon-word">答</div>
                <div class="cell-bd">
                    <p class="media-title">我的回答</p>
                    <p class="media-desc">对发声、互动的话题发布的答案</p>
                </div>
            </div>
            <div class="cell-ft">...</div>
        </div>
      </li>
      <li class="item-content item-link" v-link="{ path: '/active', replace: true}">
        <div class="item-media"></div>
        <div class="message item-inner"> 
            <div class="cell-hd">
                <i class="iconfont icon-radiowaves"></i>
                <div class="cell-bd">
                    <p class="media-title">我的动态</p>
                    <p class="media-desc">动态更新一览</p>
                </div>
            </div>
            <div class="cell-ft">...</div>
        </div>
      </li>
    </ul>
  </div>

</div>
</body>
<script src="js/vue.min.js"></script>
<script src="js/jweixin-1.0.0.js"></script>
<script src="js/sm.min.js"></script>
<script src="js/zepto.min.js"></script>
</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的回答',
      path: '/about',
      icon: 'icon-shape32'
    }
  },
  components: {
    VNav
  }
}
</script>

<style>
@import '../assets/css/style.css';
#about{
    background-color: #eff3f9;
}
#about .topnav{
    height: 35%;
}
#about .topnav .top{
    height: 25%;
}
#about .topnav .leftIcon{
    float: left;
    padding: 16px 15px 0;
}
#about .topnav .rightIcon{
    float: right;
    padding: 10px 15px 0;
}
.leftIcon i.small{
    font-size: 15px;
    margin-right: .5rem;
}
.rightIcon i.small{
    font-size: 16px;
    margin:0 .5rem 0 1rem;
}
.topnav .main{
    height: 70%;
    margin: 0 1.5rem;
    font-size: 11pt;
}
.topnav .main ul{
    padding: 0;
    display: -webkit-box;
    font-size: .5rem;
    color: #999;
}
.main li.red{
    width: 50px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
}
.main li.blue{
    width: 50px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
}
.media-desc{
    margin-bottom: .5rem;
}
.media-desc h4{
    float: left;
    margin: 0;
    font-weight: normal;
}
.media-desc .set{
    text-align: right;
}
.media-desc .set i{
    font-size: 15px;
    margin-right: 5px;
}
.main p{
    width: 70%;
    overflow: hidden;
    float: left;
    color: #999;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.main img{
    height: 48px;
    float: right;
    margin: .5rem 0 0 0;
}
.list-block .item-link .item-inner{
    background-image: none;
}
.list-block{
    margin: .4rem 0;
}
.icon-word{
    float: left;
    width: 18px;
    height: 22px;
    background-color: #999;
    color: #fff;
    text-align: center;
    margin: .3rem .5rem 0 .1rem;
    font-size: 11pt;
}
</style>