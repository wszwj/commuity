<template>
<div id="follow">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="content-block">
        <div class="row">
            <div class="follow-user" v-for="user in users">
                <img src="../assets/img/bighead.png"><span>{{user.name}}</span>
                <div class="follow-tag" >
                    <li class="{{user.color_1}}">{{user.context_1}}</li>
                    <li class="{{user.color_2}}">{{user.context_2}}</li>
                </div>
            </div>
        </div>        
    </div>
</div>
</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '黑名单',
      path: '/setup',
      icon: 'icon-jinzhi',
      users: [
        {
          id: 1,
          name: '水水',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 2,
          name: '点点滴滴',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 3,
          name: '受到守到',
          color_1: 'red',
          context_1: 'MVP',
          color_2: 'blue',
          context_2: '发声者',
          type: true
        },
        {
          id: 4,
          name: '受到守到',
          color_2: 'blue',
          context_2: '发声者'
        },
        {
          id: 5,
          name: '是多少',
          color_2: 'blue',
          context_2: '发声者'
        },
        {
          id: 6,
          name: '水水'
        }
      ]
    }
  },
  components: {
    VNav
  }
}
</script>

<style>
@import '../assets/css/style.css';

.follow-user{
    margin: 1rem; 
}
.follow-user img{
    width: 13%;
    margin-left: 1rem;
}
.follow-user span{
    margin: 0 1rem;
    vertical-align: top;
    font-size: 12pt;
    color: initial;
}
.follow-tag {
    display: inline-flex;
    float: right;
    padding:.6rem 0;
}
.follow-tag li{
    width: 50px;
    padding: 0 .2rem;
    margin-right: .3rem;
    text-align: center;
    color: #fff;
    font-size: .5rem;
}
</style>