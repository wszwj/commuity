<template>
  <nav class="bar bar-nav">
    <!-- 页面标题 -->
    <h1 class="title">{{title}}</h1>
    <!-- 副标题 -->
    <p class="subtitle"><span>{{num}}</span>{{subtitle}}</p>
    <a class="icon-word" v-if="word ? true :false">{{word}}</a>
    <a class="button button-link button-nav pull-left" v-link="{path: path, replace: true}">
      <i class="iconfont" :class="icon"></i>
    </a>
    <!-- 按钮 -->
    <button class="interest" v-if="button ? true :false">{{button}}</button>
    <a class="button button-link button-nav pull-right" v-for="add in add">
      <i v-link="{path: add.path, replace: true}" class="iconfont" :class="add.name"></i>
      <span>{{add.num}}</span>
    </a>
    <div class="more">
      <ul v-for="more in more">
        <li><i class="iconfont" :class="more.icon"></i>{{more.text}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: '',
    subtitle: '',
    num: '',
    button: '',
    path: '',
    icon: '',
    word: '',
    add: [
      {
        name: '',
        path: '',
        num: ''
      }
    ]
  }
  //   more: [
  //     {
  //       icon: '',
  //       text: ''
  //     }
  //   ],
  //   isShow: false
  // },
  // methods: {
  //   more: function() {
  //     this.isShow = !this.isShow
  //   }
  // }
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
/*标题*/
.title{
  position: fixed;
  background-color: #34465c;
  color: #fff;
  text-align: left;
  padding-left: 2.5rem;
  box-shadow: 0 3px 10px 0 #b3b3b3;
}
/*副标题*/
.bar>p.subtitle{
    position: fixed;
    margin: .6rem 6rem 0;
    color: #fff;
    font-size: .7rem;
}
/*按钮*/
.bar button.interest{
    position: fixed;
    padding: 1px 10px;
    top: .7rem;
    right: 2rem;
    color: #fff;
    font-size: .5rem;
    background-color: inherit;
    border: 1px solid #fff;
    letter-spacing: 2px;
}
.bar a.button span{
    margin: 0 .5rem 0 -.6rem;
    vertical-align: top;
    color: #fff;
    font-size: .7rem;
}
.bar h2{
  line-height: 2.8;
}
.attach{
  float: right;
}

.bar a.icon-word {
    position: fixed;
    top: .6rem;
    left: 1rem;
    width: 1rem;
    height: 22px;
    background-color: #fff;
    color: inherit;
    text-align: center;
    font-size: 11pt;
    border-radius: 4px;
}

/*选择更多样式*/
/*.bar .more{
    margin-right: -3rem;
    position: relative;
    float: right;
    top: .5rem;
    background-color: #fff;
    border: 1px solid #ccc;
    display: none;
}
.bar .more ul{
  padding:0 .5rem;
}
.bar .more ul li{
  padding: 5px;
  font-size:.75rem;
}
.bar .more ul li i{
  margin-right: .5rem;
  font-size:18px;
}
.bar .show{
    display: block;
}*/
</style>
