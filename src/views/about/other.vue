<template>
<div id="about-other">
    <v-nav :path="path" :title="title" :icon="icon"  :add="add" :button="button"></v-nav>
    <div class="more-click"  @click="more()"></div>
    <div class="more"  :class="{'show':isShow}">
      <ul>
        <li><i class="iconfont icon-jinzhi"></i>加入黑名单</li>
        <li><i class="iconfont icon-xinxi"></i>发送消息</li>
        <li><i class="iconfont icon-shape73"></i>分享</li>
      </ul>
    </div>
    <div class="content-block main" style="margin-top: 2.2rem;">
        <img src="../../assets/img/bighead.png">
        <ul>
            <li class="default rank">普通玩家</li>
            <li><h3>阿萨</h3></li>
            <li><p>TA和你一样啊飒飒达到速度的速度速度速度速度速度都是游戏爱好者。</p></li>
        </ul>
    </div>
    <div class="del" v-link="{ path: '../about', replace: true}"><i class="iconfont icon-shape16"></i></div>
    <div class="back" v-link="{ path: '../about', replace: true}"><i class="iconfont icon-shape32"></i></div>

    <div class="list-block">
        <ul>
          <li class="item-content item-link" v-link="{ path: '../rank', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <i class="iconfont icon-shape74"></i>
                    <div class="cell-bd">
                        <p class="media-title">TA的头衔</p>
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
          <li class="item-content item-link" v-link="{ path: '../collect', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <i class="iconfont icon-tuijianzuiduo"></i>
                    <div class="cell-bd">
                        <p class="media-title">TA的收藏</p>
                        <p class="media-desc">建议、问题的回答收藏</p>
                    </div>
                </div>
                <div class="cell-ft">...</div>
            </div>
          </li>        
          <li class="item-content item-link" v-link="{ path: '../follow', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <i class="iconfont icon-like"></i>
                    <div class="cell-bd">
                        <p class="media-title">TA的关注</p>
                        <p class="media-desc">游戏、发声、用户</p>
                    </div>
                </div>
                <div class="cell-ft">...</div>
            </div>
          </li>

          <li class="item-content item-link" v-link="{ path: '../say', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <div class="icon-word">声</div>
                    <div class="cell-bd">
                        <p class="media-title">TA的发声</p>
                        <p class="media-desc">发布的问题、建议</p>
                    </div>
                </div>
                <div class="cell-ft">...</div>
            </div>
          </li>
          <li class="item-content item-link" v-link="{ path: '../answer', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <div class="icon-word">答</div>
                    <div class="cell-bd">
                        <p class="media-title">TA的回答</p>
                        <p class="media-desc">对发声、互动的话题发布的答案</p>
                    </div>
                </div>
                <div class="cell-ft">...</div>
            </div>
          </li>
          <li class="item-content item-link" v-link="{ path: '../active', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <i class="iconfont icon-radiowaves"></i>
                    <div class="cell-bd">
                        <p class="media-title">TA的动态</p>
                        <p class="media-desc">动态更新一览</p>
                    </div>
                </div>
                <div class="cell-ft">...</div>
            </div>
          </li>
        </ul>
    </div>
</div>
</template>
<script>
import VNav from '../../components/Nav'
export default {
  data () {
    return {
      title: 'TA的主页',
      path: '../gamehome',
      icon: 'icon-shape30',
      button: '关注',
      isShow: false,
      add: [
        {
          name: 'icon-more-copy'
        }
      ]
    }
  },
  components: {
    VNav
  },
  methods: {
    more: function() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
@import '../../assets/css/style.css';
#about-other{
    background-color: #eff3f9;
}
/*more*/
.more-click{
    position: fixed;
    width: 2rem;
    height: 2.5rem;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 999;
}
.more{
    position: fixed;
    right: 2rem;
    top: .5rem;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 999;
    display: none;
}
.more ul{
  padding:0 .5rem;
}
.more ul li{
  padding: 5px;
  font-size:.75rem;
}
.more ul li i{
  margin-right: .5rem;
  font-size:18px;
}
.show{
    display: block;
}

#about-other .main{
    background-color: #fff;
    height: 8rem;
    margin-bottom: 5px;
}
#about-other .main img{
    margin: 5% 0 0 5%;
    width: 25%;
}
#about-other .main ul{
    margin-top: 5%;
    padding-left: 0;
    float: right;
    width: 60%;
    font-size: .5rem;
}
#about-other .main ul h3{
    font-size: .8rem;
}
#about-other .main ul p{
    font-size: .6rem;
    color: #ccc;
}

/*****************rank*******************/
#about-other .main li.rank{
    width: 60px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
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
#about-other .list-block .item-inner:after{
    background-color: inherit;
}

</style>