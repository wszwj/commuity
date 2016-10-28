<template>
<div id="search">
  <nav class="bar bar-nav">
    <h1 class="title"><input v-model="input" type="text" placeholder="搜索问题、建议、游戏主题、用户"/></h1>
    <a class="button button-link button-nav pull-left"
      v-link="{path: path, replace: true}">
      <i class="iconfont" v-bind:class="icon"></i>
    </a>
  </nav>
<div class="content">
  <div class="buttons-tab">
    <a href="#tab1" class="tab-link active button">问题</a>
    <a href="#tab2" class="tab-link button">建议</a>
    <a href="#tab2" class="tab-link button">游戏主题</a>
    <a href="#tab2" class="tab-link button">用户</a>
  </div>
  <p class="media-title">由各种物质组，成的巨型球状天体。叫做星球</p>
</div>
</template>
<script>

export default {
  data () {
    return {
      path: '/home',
      icon: 'icon-shape32',
      input: '',
      type: true,
      historys: [
        {
          name: '魔兽世界'
        },
        {
          name: '守望先锋'
        }
      ]
    }
  }
}
</script>
<style>
@import '../assets/css/style.css';
body{
  background-color:#fff;
  overflow: initial;
}
.bar{
  position: fixed;
  background-color: initial;
}
.bar:after{
  display: none;
}
.bar a.button .iconfont {
  width: 2rem;
  color: #fff;
  font-size: 16px;
  margin: 0 .5rem;
}
.title{
  position: fixed;
  background-color: #34465c;
  color: #fff;
  text-align: left;
  padding-left: 2rem;
}

.title input{
    background-color: inherit;
    border: hidden;
    width: 100%;
    font-size: .7rem;
}
.bar h2{
  line-height: 2.8;
}
#search .search-history{
    color: #afafaf;
    font-weight: lighter;
    font-size: 14pt;
    padding-left: 2rem;
    margin: 1rem 0 .5rem;
}
#search .search-history + .list-block{
  margin:0;
  border-top: 1px solid #ccc;
}
#search li.search-list{
  padding-left: 2rem;
  color: #afafaf;
}
#search .list-block ul:before,#search .list-block ul:after{
  background-color: inherit;
}
#search .buttons-tab{
    padding: 0 15% 2%;
    width: 100%;
    height: 2.5rem;
    overflow: hidden;
}

#search .buttons-tab .button.active{
    font-weight: bolder;
    color:#34465c;
    border-color:#ec7e08;
}
#search .buttons-tab .button{
/*    margin: 0 10%;
    text-indent: .4rem;
    letter-spacing: .5rem;*/
    border-top: 8px solid rgba(0, 0, 0, 0);
    border-bottom: none;
}
</style>