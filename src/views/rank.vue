<template>
<div class="rank">
  <v-nav :path="path" :title="title" :icon="icon"></v-nav>
  <div class="rank-show"><i class="iconfont icon-shape74"></i></div>
  <div class="row rank-msg">
    <div class="col-33"><a href="">头衔攻略</a></div>
    <div class="col-33">积分:1212</div>
    <div class="col-33"><a href="">管理</a></div>
  </div>
  <div class="rank-info">
    <div class="rank-title">
      <li class="red">MVP</li>
      <span>游戏驻守人</span><span>头领玩家</span>
    </div>
    <div class="rank-context">
      <h3>守望先锋</h3><h3>反恐精英</h3>
    </div>
  </div>
  <div class="rank-info rank-info-last">
    <div class="rank-title">
      <li class="blue">发声者</li>
      <span>游戏发声者</span><span>代表玩家</span>
    </div>
    <div class="rank-context">
      <h3>魔兽世界</h3>
    </div>
  </div>
</div>
</template> 


<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '排行榜',
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
.rank-show{
  margin-top: 2rem;
  height: 6rem;
  width: 100%;
  background-color: #362e2b;
  text-align: center;
}
.rank-show i.iconfont{
  font-size: 2rem;
  color: #afafaf;
  line-height: 3;
}
.rank-msg{
  background-color: #eff3f9;
  text-align: center;
  color: #999;
  font-size: 11pt;
}
.rank-msg a{
  color: #333;
}

.rank-info{
    margin: 1rem;
    border-bottom: 1px solid #ccc;
    padding: 0 2rem 4rem;
}
.rank-title{
  font-size: 11pt;
}
.rank-title li{
  width: 3rem;
  padding: 0 .2rem;
  float: left;
  margin-right: .3rem;
  text-align: center;
  color: #fff;
}

.rank-title span{
    text-align: left;
    margin-right: .5rem;
    color: #999;
}
.rank-context h3{
  float: left;
  margin-right: 1rem;
  font-weight: normal;
  color: #529ecc;
}
.rank-info-last{
  border-bottom: none;
}
</style>
