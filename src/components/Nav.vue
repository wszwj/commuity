<template>
  <nav class="bar bar-nav">
    <h1 class="title" v-text="title"></h1>
    <span v-text="subtitle"></span>
    <a class="button button-link button-nav pull-left"
      v-link="{path: path, replace: true}">
      <i class="iconfont" :class="icon"></i>
    </a>
    <a  class="button button-link button-nav pull-right" v-for="add in add"><i v-link="{path: add.path, replace: true}" class="iconfont" :class="add.name"></i></a>
  </nav>
</template>

<script>
export default {
  props: {
    title: '',
    subtitle: '',
    path: '',
    icon: '',
    add: [
      {
        name: '',
        path: ''
      }
    ]
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
  padding-left: 2.5rem;
  box-shadow: 0 3px 10px 0 #b3b3b3;
}
.bar>span{
    position: fixed;
    margin: .6rem 6rem 0;
    color: #fff;
    font-size: .7rem;
}
.bar h2{
  line-height: 2.8;
}
.attach{
  float: right;
}

</style>
