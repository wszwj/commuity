<template>
<div id="about">
    <div class="topnav">
        <div class="top">
           <div class="leftIcon"><i v-link="{ path: '/home', replace: true}" class="small iconfont icon-shape16"></i>我的主页</div>
            <div class="rightIcon"><i v-link="{ path: '/message', replace: true}" class="iconfont icon-xinxi"></i><i class="small iconfont icon-iconfold-copy"></i>登出</div> 
        </div>
        
        <div class="main">
            <ul>
                <li class="red">MVP</li>
                <li class="blue">发声者</li>
                <li>积分：12121</li>
            </ul>
            <div class="media-desc">
                <h4>实打实大苏打速度</h4>
                <div class="set" v-link="{ path: '/setup', replace: true}"><i class="iconfont icon-xt8"></i>设置</div>
            </div>

                <p>是是打发打发士大夫打发打发士大夫打发打发士大夫是是打发打发士大夫打发打发士大夫打发打发士大夫</p>
                <img src="../assets/img/bighead.png">
        </div>
    </div>
         <div class="del" v-link="{ path: '/home', replace: true}"><i class="iconfont icon-shape16"></i></div>
        <div class="list-block" style="margin-top: 200px;">
        <ul>
          <li class="item-content item-link" v-link="{ path: '/rank', replace: true}">
            <div class="item-media"></div>
            <div class="message item-inner"> 
                <div class="cell-hd">
                    <i class="iconfont icon-shape74"></i>
                    <div class="cell-bd">
                        <p class="media-title">我的头衔</p>
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
              <li class="item-content item-link" v-link="{ path: '/follow', replace: true}">
                <div class="item-media"></div>
                <div class="message item-inner"> 
                    <div class="cell-hd">
                        <i class="iconfont icon-like"></i>
                        <div class="cell-bd">
                            <p class="media-title">我的关注</p>
                            <p class="media-desc">游戏、发声、用户</p>
                        </div>
                    </div>
                    <div class="cell-ft">...</div>
                </div>
              </li>
              <li class="item-content item-link" v-link="{ path: '/collect', replace: true}">
                <div class="item-media"></div>
                <div class="message item-inner"> 
                    <div class="cell-hd">
                        <i class="iconfont icon-tuijianzuiduo"></i>
                        <div class="cell-bd">
                            <p class="media-title">我的收藏</p>
                            <p class="media-desc">建议、问题的回答收藏</p>
                        </div>
                    </div>
                    <div class="cell-ft">...</div>
                </div>
              </li>
              <li class="item-content item-link" v-link="{ path: '/say', replace: true}">
                <div class="item-media"></div>
                <div class="message item-inner"> 
                    <div class="cell-hd">
                        <div class="icon-word">声</div>
                        <div class="cell-bd">
                            <p class="media-title">我的发声</p>
                            <p class="media-desc">发布的问题、建议</p>
                        </div>
                    </div>
                    <div class="cell-ft">...</div>
                </div>
              </li>
              <li class="item-content item-link" v-link="{ path: '/answer', replace: true}">
                <div class="item-media"></div>
                <div class="message item-inner"> 
                    <div class="cell-hd">
                        <div class="icon-word">答</div>
                        <div class="cell-bd">
                            <p class="media-title">我的回答</p>
                            <p class="media-desc">对发声、互动的话题发布的答案</p>
                        </div>
                    </div>
                    <div class="cell-ft">...</div>
                </div>
              </li>
              <li class="item-content item-link" v-link="{ path: '/active', replace: true}">
                <div class="item-media"></div>
                <div class="message item-inner"> 
                    <div class="cell-hd">
                        <i class="iconfont icon-radiowaves"></i>
                        <div class="cell-bd">
                            <p class="media-title">我的动态</p>
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
export default {

}
</script>

<style>
@import '../assets/css/style.css';
#about{
    background-color: #eff3f9;
}
#about .topnav{
    height: 200px;
    box-shadow: none;
    margin-bottom: 10px;
}
#about .topnav .top{
    height: 25%;
}
#about .topnav .leftIcon{
    float: left;
    padding: 16px 15px 0;
}
#about .topnav .rightIcon{
    float: right;
    padding: 10px 15px 0;
}
.leftIcon i.small{
    font-size: 15px;
    margin-right: .5rem;
}
.rightIcon i.small{
    font-size: 16px;
    margin:0 .5rem 0 1rem;
}
.topnav .main{
    height: 70%;
    margin: 0 1.5rem;
    font-size: 11pt;
}
.topnav .main ul{
    padding: 0;
    display: -webkit-box;
    font-size: .5rem;
    color: #999;
}
.main li.red{
    width: 50px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
}
.main li.blue{
    width: 50px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
}
.media-desc{
    margin-bottom: .5rem;
}
.media-desc h4{
    float: left;
    margin: 0;
    font-weight: normal;
}
.media-desc .set{
    width: 60px;
    text-align: right;
    float: right;
}
.media-desc .set i{
    font-size: 15px;
    margin-right: 5px;
}
.main p{
    width: 70%;
    overflow: hidden;
    float: left;
    color: #999;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.main img{
    height: 60px;
    float: right;
    position: absolute;
    top: 140px;
    right: 1rem;
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
#about .list-block .item-inner:after{
    background-color: inherit;
}

#about .del{
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
#about .del i{
    font-size: 18px;
    line-height: 2.5;
}
</style>