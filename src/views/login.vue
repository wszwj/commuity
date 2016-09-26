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
            <input type="text" placeholder="电子邮箱/手机">
            <i class="iconfont icon-mima input-icon"></i>
            <input type="password" placeholder="密码">
            <input type="submit" value="登录" class="send"></input>
            <p>或者   用<span> 微信<i class="iconfont icon-weixin"></i> </span>登陆</p>
        </form>
        
    </div>
</div>
</template>
<script>
</script>
<style>
@import '../assets/css/style.css';
#login{
    background:url(../assets/img/loginBg.jpg);
    height: 100%;
}
#login nav{
    padding: 1rem 2rem;
}
#login nav i{
    color: #fff;
    font-size:18px;
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
    padding: .5rem 1rem;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #44b9ff;
    color: #44b9ff;
    font-size: .6rem;
    clear: both;
}
#login input::-webkit-input-placeholder{
    color: #4caae8;
    padding-left: 1rem;
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
}
#login p span i.iconfont{
    vertical-align: middle;  
}
</style>