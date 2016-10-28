<template>
<div id="setup">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <!-- 头像 -->
    <div class="avatar">
      <img src="../assets/img/bighead.png">
      <p>点击头像修改</p>
    </div>
    <div class="content">
    <!-- 列表 -->
  <div class="list-block">
    <ul>
      <li>
        <div class="item-content">
            <div class="item-title label"><i class="iconfont icon-shape14"></i>用户名</div>
            <div class="item-input username">
              上课考试
            </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-title label"><i class="iconfont icon-edit"></i>个人签名</div>
            <div class="item-input others-info">
              上课考试傻得可爱是的撒后开机动画设计好的就是
            </div>
        </div>
      </li>
      <li>
        <div class="item-content">
            <div class="item-title label"><i class="iconfont icon-edit"></i>账号密码</div>
            <div class="item-input others-info">
              kjskjsk4545
            </div>
        </div>
      </li>
      <li>
        <div class="item-content" v-link="{ path: '/blacklist', replace: true}">
            <div class="item-title label"><i class="iconfont icon-mangluzhong"></i>黑名单</div>
            <div class="cell-ft">...</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="list-block">
    <div class="item-content">
      <div class="relation">
        <i class="iconfont icon-certificates"></i>账号密码
      </div>
      <div class="link">
        <ul class="show">
          <li><i class="iconfont icon-shouji"></i></li>
          <li>手机号</li>
        </ul>
        <ul class="show">
          <li><i class="iconfont icon-weixin" style="color: #4cd964;"></i></li>
          <li>微信</li>
        </ul>
        <ul class="show">
          <li><i class="iconfont icon-xinxi" style="color: #78b3d7;"></i></li>
          <li>邮箱</li>
        </ul>
      </div>
      
        
      </div>
      </div>
      <div class="word-desc">
        关于GAMER
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
      title: '设置',
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
#setup{
    background-color:#eff3f9;
    height: 100%;
}
.avatar{
  margin: 18% 0 0;
  padding:5% 0;
  text-align: center; 
  background-color: #fff;
}
.avatar img{
  width: 26%;

}
.avatar p{
    margin: 0 37%;
    background-color: #565656;
    color: #fff;
    font-size: .1rem;
}
#setup>.content{
  position: inherit;
}
#setup .list-block{
  margin: 0 0 1.75rem;
  font-size: .7rem;
}
#setup .list-block ul:before,.list-block ul:after{
  background-color: inherit;
}
#setup li{
    margin: 0 1rem;
}

#setup .item-content i.iconfont{
  margin-right: 1rem;
  font-size: 18px;
  color: #999;
}
#setup .username{
  color: #999;
}
#setup .others-info{
  font-size: .6rem;
  color: #c8c8c8;
}
#setup .cell-ft{
    float: right;
    color: #ccc;
    font-weight: bold;
    letter-spacing: 2px;
}

#setup .relation{
    padding: 1rem 0 1.5rem 1rem;
}
#setup .item-content{
    background-color: #fff;
}
#setup .link{
    display: inherit;
    margin-right: 1rem;
}
#setup ul.show i.iconfont{
    font-size: 25px;
    margin:0;
    -webkit-text-stroke-width:inherit;
}
#setup ul.show li{
  text-align: center;
  font-size:11pt;
}

#setup .word-desc{
  text-align: center;
  color: #529ecc;
}
</style>