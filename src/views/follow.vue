<template>
<div id="follow">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="content">
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">游戏</a>
        <a href="#tab2" class="tab-link button"  v-link="{ path: '/add', replace: true}">发声</a>
        <a href="#tab3" class="tab-link button">用户</a>
      </div>
       <div class="content-block">
        <div class="tabs">

          <!--   游戏  -->
          <div id="tab1" class="tab active">
            <div class="row">
              <div class="follow-game col-100" v-for="item in items">
                <div class="follow-game-img"><img src="../assets/img/bighead.png"></div>
                <div class="follow-game-title">
                    <p>{{item.name}}</p><p>{{item.englishName}}</p>
                </div>
                <div class="follow-game-desc">
                    <p>#{{item.type}}</p><i class="iconfont icon-xinshixin"></i><span>{{item.num}}k</span>
                </div>
              </div>
            </div>
          </div>

          <!--  用户  -->
          <div id="tab3" class="tab"> 
            <div class="row">
                <div class="follow-user" v-for="user in users">
                    <img src="../assets/img/bighead.png"><span>{{user.name}}</span>
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
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 2,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 3,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 4,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 5,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 6,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 7,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 8,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 9,
          name: '守望先锋',
          englishName: 'Overwatch',
          type: '射击类',
          num: 12
        },
        {
          id: 10,
          name: '守望先锋',
          englishName: 'Overwatch',
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
          name: '受到守到',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 4,
          name: '受到守到',
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
#follow .content{
  background-color: #edf1f7;
}
#follow .content-block{
    margin: 2.2rem 0;
    padding: 0 0.75rem;
    color: #6d6d72;
    background-color: #fff;
}
#follow .buttons-tab{
    position: fixed;
    width: 100%;
    color: #999;
}
#follow .buttons-tab .button.active{
    color: #34465c;
    font-weight: bold;
    border-color: #2c3d52;
}
.row .follow-game{
    margin-top: 1rem;
}
.follow-game-img img{
    padding: .4rem .2rem;
    width: 20%;
    float: left;
}
.follow-game-title{
    margin-left: 1rem;
    float: left;
}
.follow-game-title p{
    margin: .5rem;
    color: initial;
    text-align: center;
    font-size: 13pt;
}
#follow .follow-game-desc i.iconfont{
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

.follow-user{
    margin: 1rem; 
}
.follow-user img{
    width: 13%;
    margin-left: 1rem;
}
.follow-user span{
    margin: 0 1rem;
    vertical-align: top;
    font-size: 12pt;
    color: initial;
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