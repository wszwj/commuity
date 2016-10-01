<template>
<div id="rank">
  <div class="top">
    <nav class="bar bar-nav">
      <h1 class="title">我的头衔</h1>
      <a class="button button-link button-nav pull-left" href="/about">
        <i class="iconfont icon-shape74"></i>
      </a>
    </nav>
    <div class="rank-content">
      <div class="rank-info">
        <div class="rank-title">
          <li class="red">MVP</li>
        </div>
        <div class="rank-context">
          <a>反恐精英</a>>
        </div>
      </div>
      <div class="rank-info rank-info-last">
        <div class="rank-title">
          <li class="blue">发声者</li>
        </div>
        <div class="rank-context">
          <a>魔兽世界</a><a>守望先锋<span>new</span></a>
        </div>
      </div>      
    </div>

   <div class="del" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape16"></i></div>
   <div class="back" v-link="{ path: '/about', replace: true}"><i class="iconfont icon-shape32"></i></div>
  </div>
  <div class="rank-method">
    <a>头衔攻略</a>
  </div>
  
</div>
</template> 


<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '我的头衔',
      path: '/about',
      icon: 'icon-shape74'
    }
  },
  components: {
    VNav
  }
}
</script>

<style>
@import '../assets/css/style.css';
#rank .top{
  background-color: #34465c;
}
#rank .title{
  position: absolute;
  box-shadow: none;
  background-color: initial;
}

#rank .rank-content{
    padding: 4rem 0 2rem;
}
.rank-show i.iconfont{
  font-size: 2rem;
  color: #afafaf;
  line-height: 3;
}

.rank-context{
    padding: .5rem 0 2rem;
}
.rank-info{
    padding: 0 2rem;
}
.rank-title{
  font-size: 11pt;
}
.rank-title li{
    width: 3rem;
    padding: 0 .2rem;
    text-align: center;
    letter-spacing: 1px;
    font-size: 9pt;
    color: #fff;
}

.rank-title span{
    text-align: left;
    margin-right: .5rem;
    color: #999;
}
.rank-context a{
  text-align: left;
  margin-right: 1rem;
  font-weight: normal;
  font-size:13pt;
  vertical-align: sub;
  color: #529ecc;
}
.rank-context a span{
    color: #e86443;
    font-size: .1rem;
    vertical-align: top;
}
.rank-info-last{
  border-bottom: none;
}
#rank .del{
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
#rank .back{
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
#rank .del i,#rank .back i{
    font-size: 18px;
    line-height: 2.2rem;
}


#rank .rank-method{
    text-align: center;
    padding: 1rem;
}
</style>
