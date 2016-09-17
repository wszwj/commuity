<template>
<div id="search">
  <nav class="bar bar-nav">
    <h1 class="title"><input v-model="input" @keyup.enter="search" type="text" placeholder="搜索问题、建议、游戏主题、用户"/></h1>
    <a class="button button-link button-nav pull-left"
      v-link="{path: path, replace: true}">
      <i class="iconfont" v-bind:class="icon"></i>
    </a>
  </nav>
<div class="content">
  <div class="content-block-title search-history" v-if="entry(input)"><i class="iconfont icon-lishi"></i>最近浏览</div>
  <div class="list-block">
    <ul v-for="history in historys | filterBy input">
      <li class="item-content search-list" @click="add(history.name)">{{history.name}}</li>
    </ul>
  </div>
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
  },
  methods: {
    add (name) {
      this.input = name
    },
    change (e) {
      if (e) {
        return false
      }
      return true
    },
    entry (e) {
      if (e) {
        return false
      }
      return true
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
</style>