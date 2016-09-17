<template>
  <nav class="bar bar-nav">
    <h1 class="title"><input type="text" placeholder="搜索问题、建议、游戏主题、用户"/></h1>
    <a class="button button-link button-nav pull-left"
      v-link="{path: path, replace: true}">
      <i class="iconfont" v-bind:class="icon"></i>
    </a>

  </nav>
</template>

<script>
export default {
  props: {
    path: '',
    icon: '',
  }
}
</script>

<style>
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
</style>
