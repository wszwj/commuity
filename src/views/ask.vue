<template>
<div id="ask">
  <v-nav :path="path" :title="title" :icon="icon" :subtitle="subtitle"></v-nav>
  <div class="content top">
    <p>恭喜</p>
    <p>您可以申请成为<a>守望先锋</a><span>MVP</span></p>
    <button class="open-tip" @click="open()">确认申请</button>
  </div>
  <div class="content main">
    <div class="rule"><a>申请规则</a></div>
    <ul>
      <li class="row">
        <div class="li-left">贡献值</div>
        <div class="li-right">21312</div>
      </li>
      <li class="row">
        <div class="li-left">贡献排位</div>
        <div class="li-right" style="color: #e86443">1</div>
      </li>
    </ul>
    <div  class="look"><a>查看排位榜</a></div>
  </div>


  <div class="del" v-link="{ path: '/gamehome', replace: true}"><i class="iconfont icon-shape16"></i></div>
  <div class="back" v-link="{ path: '/gamehome', replace: true}"><i class="iconfont icon-shape32"></i></div>
</div>
</template>
<script>
import VNav from '../components/Nav'
import $ from 'zepto'
export default {
  data () {
    return {
      title: '申请MVP',
      subtitle: '守望先锋',
      path: '/gamehome',
      icon: 'icon-shape74'
    }
  },
  components: {
    VNav
  },
  methods: {
    open: function() {
      // 弹窗提示
      $.modal({
        title: '<i class="iconfont icon-gou green"></i>已成功申请',
        text: '页面将跳转你的头衔页'
      })
      // 弹窗消失
      const self = this
      setTimeout(function() {
        $('.modal.modal-in').hide()
        $('.modal-overlay').css('visibility', 'hidden')
        self.$route.router.go('./rank')
      }, 2000)
    }

  }
}
</script>

<style>
@import '../assets/css/style.css';
#ask{
  height: 100%;
  background-color: #eff3f9;
}
#ask .title{
  box-shadow: none;
  color: #afafaf;
}
#ask .bar span{
  color: #afafaf;
}
#ask .top{
  margin-top: -1px;
  height: 240px;
  background: url('../assets/img/bg.jpg');
  text-align: center;
  background-color: #eee;
  color: #fff;
}
#ask .top p{
  letter-spacing: 1px;
}
#ask .top p a{
  padding:0 .5rem;
}
#ask .top p span{
    border: 1px solid #e86443;
    background-color: #e86443;
    font-size: .5rem;
    font-weight: lighter;
    padding: 0 .2rem;
}
#ask .top button{
    margin-top: 1rem;
    padding: 8px 30px;
    letter-spacing: 2px;
    background-color: #e86443;
    border: hidden;
}
#ask .main{
  margin-top: 240px;
  text-align: center;
}
#ask .main .rule{
  padding: .5rem 0;
  margin-bottom: 5px;
  background-color: #fff;
}
#ask .main a{
  text-align: center;
  clear: both;
}
#ask .main ul{
  margin: 0;
  padding:1rem 4rem 0;
  background-color: #fff;
}
#ask .main ul li{
padding: .5rem 0;
}
#ask .main .li-left{
  float: left;
}
#ask .main .li-right{
  float: right;
}
#ask .main .look{
  padding: .5rem 0;
  background-color: #fff;
}

/*弹窗样式*/

.modal-no-buttons .modal-inner{
  border-radius: initial;
  background-color: #fff;
  letter-spacing: 2px;
}
i.green{
  margin-right: 5px;
  color: #56bc8a;
  font-size:2rem;
  font-weight: bold;
  vertical-align: sub;
  
}
.modal-text{
  color: #ccc;
  font-size: .75rem;
}
/*左下角按钮*/
#ask .del{
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
#ask .back{
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
#ask .del i,#ask .back i{
    font-size: 18px;
    line-height: 2.2rem;
}
</style>