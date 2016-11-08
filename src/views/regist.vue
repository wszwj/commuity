<template>
<div id="regist">
    <!-- 导航 -->
    <nav>
        <i v-link="{ path: '/login', replace: true}" class="iconfont icon-shape16"></i>
        <a v-link="{ path: '/login', replace: true}">已有账号？直接登陆</a>
    </nav>
    <div class="content-block">
        <h3>VIVA 玩家</h3>
        <!-- 注册表单 -->
        <form>
            <i class="iconfont icon-youxiang input-icon"></i>
            <input type="text" v-model="account" placeholder="输入电子邮箱">
            <i class="iconfont icon-mima input-icon"></i>
            <input type="password" v-model="pwd" placeholder="密码">
            <i class="iconfont icon-mima input-icon"></i>
            <input type="password" v-model="pwds" placeholder="再次输入密码">
            <input type="button" value="注册" class="send" @click="onSubmit()"></input>
        </form>
        <!-- 其他方式 -->
        <div class="divide">
            <span class="left"></span>或<span class="right"></span>
            <div class="mode">
                <p>其他注册方式</p>
                <div class="icon">
                    <i class="iconfont icon-shouji"></i>
                    <i class="iconfont icon-weixin"></i>
                </div>
            </div> 
        </div>     
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      account: '',
      pwd: '',
      pwds: ''
    }
  },
  methods: {
    onSubmit: function() {
      // return false
      if (this.account === '' || this.pwd === '' || this.pwd === '') {
        alert('用户名或密码不得为空！')
      }
      else {
        this.$route.router.go('/initial')
      }
    }
  }
}
</script>
<style>
@import '../assets/css/style.css';
#regist{
    background:url(../assets/img/loginBg.jpg);
    height: 100%;
}
#regist nav{
    padding: 1rem 2.75rem;
}
#regist nav i{
    color: #fff;
    font-size:18px;
}
#regist nav a{
    text-align: center;
    float: right;
    font-size:.8rem;
}
#regist .content-block{
    text-align: center;
    color: #fff;
}
#regist  h3{
    color: #fff;
    font-size:1.6rem;
    font-weight: normal;
}
#regist form{
    padding: 0 2rem
}
#regist input{
    display: block;
    float: center;
    width: 100%;
    margin: .8rem auto;
    padding: .5rem 1.75rem;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #44b9ff;
    color: #44b9ff;
    font-size: .6rem;
    clear: both;
}
#regist input::-webkit-input-placeholder{
    color: #4caae8;
}
#regist i.input-icon{
    position: absolute;
    padding: .5rem;
    left: 3rem;
    color: #44b9ff;
    font-size: .6rem;
}
#regist input.send{
    margin: 1rem 0;
    background-color: #44b9ff;
    color: #fff;
}
#regist .divide{
    padding: 1rem 2rem;
    color: #ccc;
}
#regist .divide span.left{
    height: .7rem;
    border-bottom: 1px #b5b5b5 solid;
    display: block;
    width: 40%;
    float: left;
}
#regist .divide span.right{
    height: .7rem;
    border-bottom: 1px #b5b5b5 solid;
    display: block;
    width: 40%;
    float: right;
}
#regist .mode p{
    float: left;
}
#regist .mode .icon{
    margin:.6rem .5rem;
    float: right;
}
#regist .mode .icon i.icon-shouji{
    color: #44b9ff;
    padding-right: .5rem;
}
#regist .mode .icon i.icon-weixin{
    color: #00ff00;
}
</style>