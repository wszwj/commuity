<template>
<div id="follow">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="content">
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">游戏</a>
        <a href="#tab2" class="tab-link button">发声</a>
        <a href="#tab3" class="tab-link button">用户</a>
      </div>
       <div class="content-block">
        <div class="tabs">

          <!--   游戏  -->
          <div id="tab1" class="tab active">
            <div class="row">
              <div class="follow-game col-50" v-for="item in items">
                <div class="follow-game-img"><img src="../assets/img/bighead.png"></div>
                <div class="follow-game-desc">
                    <i class="iconfont icon-xinshixin"></i><span>{{item.num}}k</span><a href="">#{{item.type}}</a>
                    <p>{{item.name}}</p>
                </div>
              </div>
            </div>
          </div>

          <!--  发声   -->
          <div id="tab2" class="tab">
            <div class="content-block">
              <p>This is tab 2 content</p>
            </div>
          </div>

          <!--  用户  -->
          <div id="tab3" class="tab"> 
            <div class="row">
                <div class="follow-user" v-for="user in users">
                    <img src="../assets/img/head.png"><span>{{user.name}}</span>
                    <div class="follow-tag" >
                        <li class="{{user.color_1}}">{{user.context_1}}</li>
                        <li class="{{user.color_2}}">{{user.context_2}}</li>
                    </div>
                </div>
            </div>        
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的关注',
      path: '/about',
      icon: 'icon-shape32',
      items: [
        {
          id: 1,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 2,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 3,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 4,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 5,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 6,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 7,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 8,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 9,
          name: '收望先锋',
          type: '射击类',
          num: 12
        },
        {
          id: 10,
          name: '收望先锋',
          type: '射击类',
          num: 12
        }
      ],
      users: [
        {
          id: 1,
          name: '水水',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 2,
          name: '点点滴滴',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 3,
          name: '受到收到',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 4,
          name: '受到收到',
          color_2: 'blue',
          context_2: '发声者'
        },
        {
          id: 5,
          name: '是多少',
          color_2: 'blue',
          context_2: '发声者'
        },
        {
          id: 6,
          name: '水水'
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

#follow .buttons-tab{
    position: fixed;
    width: 100%;
    background-color: #eff3f9;
    color: #999;
}
#follow .buttons-tab .button.active{
    color: #34465c;
    font-weight: bold;
    border-color: #2c3d52;
}
.row .follow-game{
    border:1px solid #f4f4f4;
    margin-top: 1rem;
}
.follow-game-img img{
    padding: .4rem .2rem;
    width: 40%;
    float: left;
}

#follow .follow-game-desc i.iconfont{
    color: #333;
    margin:.2rem;
    font-size:16px;
    vertical-align: middle;
}
.follow-game-desc{
    margin:.4rem 0;
    font-size: 9pt;
}
.follow-game-desc span{
    padding: 0 .2rem;
    background-color: #d3d1d1;
    color: #fff;
}
.follow-game-desc a{
    padding-left: .2rem;
}
.follow-game-desc p{
    margin: .5rem;
    font-size: 13pt;
    float: right;
}
.follow-user{
    margin: 1rem 1rem 1rem 3rem; 
}
.follow-user img{
    width: 15%;
}
.follow-user span{
    margin:0 1rem;
    vertical-align: top;
}
.follow-tag {
    display: inline-flex;
    float: right;
    padding:.6rem 0;
}
.follow-tag li{
    width: 50px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
    font-size: .5rem;
}
</style>