<template>
<div id="login">
    <nav>
        <i class="iconfont icon-shape16"></i>
        <a v-link="{ path: '/regist', replace: true}">没有账号？这里注册</a>
    </nav>
    <div class="content-block">
        <h3>VIVA 玩家</h3>
        <form>
            <i class="iconfont icon-shape14 input-icon"></i>
            <input type="text" v-model="account" placeholder="电子邮箱/手机">
            <i class="iconfont icon-mima input-icon"></i>
            <input type="password" v-model="pwd" placeholder="密码">
            <input type="button" value="登录" class="send" @click="onSubmit()"></input>
            <p>或者   用<span @click="login()"> 微信<i class="iconfont icon-weixin"></i> </span>登陆</p>
        </form>
        
    </div>
</div>
</template>
<script>
// import $ from 'zepto'
export default {
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
  methods: {
    onSubmit: function() {
      const re = /^[1][3-8]+\d{9}$/
      const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
      if (this.account === '' || this.pwd === '') {
        alert('用户名或密码不得为空！')
      }
      else {
        if (re.test(this.account) || reg.test(this.account)) {
          this.$route.router.go('/home')
        }
        else {
          alert('请输入正确的邮箱或手机！')
        }
      }
    },
    login: function() {
      console.log(111)
    }
  }
}
</script>
<style>
@import '../assets/css/style.css';
#login{
    background:url(../assets/img/loginBg.jpg);
    height: 100%;
}
#login nav{
    padding: 1rem 2.75rem;
}
#login nav i{
    color: #fff;
    font-size:.75rem;
}
#login nav a{
    text-align: center;
    float: right;
    font-size:.8rem;
}
#login .content-block{
    text-align: center;
    color: #fff;
}
#login  h3{
    color: #fff;
    font-size:1.6rem;
    font-weight: normal;
}
#login form{
    padding: 0 2rem
}
#login input{
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
#login input::-webkit-input-placeholder{
    color: #4caae8;
}
#login i.input-icon{
    position: absolute;
    padding: .5rem;
    left: 3rem;
    color: #44b9ff;
    font-size: .6rem;
}
#login input.send{
    margin: 1rem 0;
    background-color: #44b9ff;
    color: #fff;
}
#login p{
    text-align: right;
}
#login p span{
    color: #10df1b;
    font-size: .8rem;
    letter-spacing: 2px;
    cursor: pointer;
}
#login p span i.iconfont{
    vertical-align: middle;  
}
</style>