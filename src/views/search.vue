<template>
<div id="search">
  <nav class="bar bar-nav">
    <h1 class="title"><input @keyup.enter="search(input)" @change="change(input)" v-model="input" type="text" placeholder="搜索问题、建议、游戏主题、用户"/></h1>
    <a class="button button-link button-nav pull-left"
      v-link="{path: path, replace: true}">
      <i class="iconfont" v-bind:class="icon"></i>
    </a>
  </nav>

<div v-if="type" class="content">
  <div class="content-block-title search-history"><i class="iconfont icon-lishi"></i>最近浏览</div>
  <div class="list-block">
    <ul v-for="history in historys | filterBy input">
      <li @click="add(history.name)" class="item-content search-list" >{{history.name}}</li>
    </ul>
  </div>
</div>

<div v-else="type" class="content">
  <div class="buttons-tab">
    <a href="#tab1" class="tab-link active button">问题</a>
    <a href="#tab2" class="tab-link button">建议</a>
    <a href="#tab3" class="tab-link button">游戏主题</a>
    <a href="#tab4" class="tab-link button">用户</a>
  </div>
  <div class="tabs">
    <!-- 问题页面 -->
    <div id="tab1" class="tab active">
      <div class="message">
          <div class="media-box" v-for="item in items">
              <p class="media-title">{{item.title}}</p>
              <v-content :content="item.content" :more="true" :url="url"></v-content>
              <div class="media-text">
              <ul class="media-info">
                  <li><i class="iconfont icon-xinshixin"></i>{{item.like}}</li>
                  <li><i class="icon-word">答</i>{{item.answer}}</li>
                  <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                  <li><i class="iconfont icon-duihua"></i>{{item.comment}}</li>
              </ul>
              </div>
          </div>
      </div> 
    </div>
    <!-- 建议页面 -->
    <div id="tab2" class="tab">
      <div class="message">
          <div class="media-box" v-for="item in items">
              <p class="media-title">{{item.title}}</p>
              <v-content :content="item.content" :more="true" :url="url"></v-content>
              <div class="media-text">
              <ul class="media-info">
                  <li><i class="iconfont icon-xinshixin"></i>{{item.like}}</li>
                  <li><i class="icon-word">答</i>{{item.answer}}</li>
                  <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                  <li><i class="iconfont icon-duihua"></i>{{item.comment}}</li>
              </ul>
              </div>
          </div>
      </div> 
    </div>
    <!-- 游戏主题页面 -->
    <div id="tab3" class="tab">
      <div class="message">
          <div class="media-box" v-for="item in items">
              <p class="media-title">{{item.title}}</p>
              <v-content :content="item.content" :more="true" :url="url"></v-content>
              <div class="media-text">
              <ul class="media-info">
                  <li><i class="iconfont icon-xinshixin"></i>{{item.like}}</li>
                  <li><i class="icon-word">答</i>{{item.answer}}</li>
                  <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                  <li><i class="iconfont icon-duihua"></i>{{item.comment}}</li>
              </ul>
              </div>
          </div>
      </div> 
    </div>
    <!-- 用户页面 -->
    <div id="tab4" class="tab">
      <div class="message">
          <div class="media-box" v-for="item in items">
              <p class="media-title">{{item.title}}</p>
              <v-content :content="item.content" :more="true" :url="url"></v-content>
              <div class="media-text">
              <ul class="media-info">
                  <li><i class="iconfont icon-xinshixin"></i>{{item.like}}</li>
                  <li><i class="icon-word">答</i>{{item.answer}}</li>
                  <li><i class="iconfont icon-zan"></i>{{item.good}}</li>
                  <li><i class="iconfont icon-duihua"></i>{{item.comment}}</li>
              </ul>
              </div>
          </div>
      </div> 
    </div>
  </div>
</div>

</template>
<script>
// import $ from 'zepto'
import VContent from '../components/Content'
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
      ],
      items: [
        {
          id: 1,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质',
          like: '999k',
          answer: 99,
          good: 23,
          comment: 123
        },
        {
          id: 2,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球,啊旧时的就是看看',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          like: '999k',
          answer: 99,
          good: 23,
          comment: 123
        },
        {
          id: 3,
          name: '时空酸奶',
          title: '由各种物质组，成的巨型球状天体。叫做星球',
          content: '由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球由各种物质组，成的巨型球状天体。叫做星球。',
          like: '999k',
          answer: 99,
          good: 23,
          comment: 123
        }
      ]
    }
  },
  components: {
    VContent
  },
  methods: {
    search: function(event) {
      if (event) {
        this.type = false
      }
      else {
        this.type = true
      }
    },
    change: function(event) {
      console.log(event)
    },
    add: function(event) {
      this.input = event
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
    position: fixed;
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
#search .message{
  margin-top: 3rem;
}
#search  .message ul.media-info li i.icon-word{
    padding: 0 2px;
    margin-right: 2px;
    background-color: #999;
    color: #fff;
    font-size:.5rem;
}
</style>