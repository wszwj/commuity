<template>
<div id="gamehome">
    <div class="topnav">
        <div class="top">
            <div class="leftIcon">
                <i v-link="{ path: '/home', replace: true}" class="small iconfont icon-shape66"></i>游戏主页
            </div>
            <div class="rightIcon">
                <i v-link="{ path: '/message', replace: true}" class="iconfont icon-xinshixin"></i>
                <span>12k</span><button>已关注</button>
            </div>
        </div>
        <div class="main">
            <p>Overwactch</p>
            <p>守望先锋</p>
            <p class="info">为了未来而战。<img src="../assets/img/bighead.png"></p>
        </div>
    </div>
    <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">资料</a>
        <a href="#tab2" class="tab-link button">动态</a>
        <a href="#tab3" class="tab-link button">相关推荐</a>
    </div>
    
    <div class="content-block">
    <div class="tabs">
      <div id="tab1" class="tab active">
        <div class="content-block">
          <p>This is tab 1 content</p>
        </div>
      </div>
      <div id="tab2" class="tab">
        <div class="content-block">
          <p>This is tab 2 content</p>
        </div>
      </div>
      <div id="tab3" class="tab">
        <div class="content-block">
          <p>This is tab 3 content</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>

<style>
@import '../assets/css/style.css';
#gamehome{
    background-color: #eff3f9;
}
#gamehome .topnav{
    height: 200px;
    box-shadow: none;
}
#gamehome .topnav .top{
    height: 25%;
    font-size:.8rem;
}
#gamehome .topnav .leftIcon{
    float: left;
    padding: 16px 15px 0;
}
#gamehome .topnav .rightIcon{
    float: right;
    padding: 10px 15px 0;
}
#gamehome .leftIcon i.small{
    font-size: 15px;
    margin-right: .5rem;
}
#gamehome .rightIcon i{
    font-size: 14px;
}
#gamehome .rightIcon span{
    margin-right: .5rem;
    padding: 0 4px;
    font-size: .1rem;
    border: 1px solid #898989;
    background-color: #898989;
}
#gamehome .rightIcon button{
    padding: .1rem .2rem;
    background-color: inherit;
    font-size: .7rem;
    color: #999;
    border: 1px solid #999;
}

#gamehome .main{
    margin-top: .5rem;
}
#gamehome .main p{
    margin:0 2rem;
    font-size:.8rem;
}
#gamehome .main p.info{
    margin: 1.5rem 2rem;
    font-size: .6rem;
}
#gamehome .main img{
    height: 60px;
    float: right;
    position: absolute;
    top: 140px;
    right: .5rem;
}
#gamehome .buttons-tab{
    margin-top: 200px;
}
#gamehome .buttons-tab{
    padding: 0 10% 2%;
    width: 100%;
    overflow: hidden;
}

#gamehome .buttons-tab .button.active{
    font-weight: bolder;
    color:#34465c;
    border-color:#ec7e08;
}
#gamehome .buttons-tab .button{
    text-indent: .4rem;
    border-top: 8px solid rgba(0, 0, 0, 0);
    border-bottom: none;
    letter-spacing: .2rem;
}
</style>