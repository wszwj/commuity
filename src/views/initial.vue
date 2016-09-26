<template>
<div id="initial">
    <!-- 导航 -->
    <nav>
        <a>直接跳过</a>
    </nav>
    <div class="content-block">
        <h3>关注你喜欢的游戏</h3>
        <div class="next"><i class="iconfont icon-iconxiangyouxuanzhuan"></i> 下一组</div>
        <!-- 选项 -->
        <form>
            <div class="content-block">
                <div class="row">
                  <!-- 选项列表 -->
                  <div class="col-33" v-for="item in items">
                  <div class="select" @click="onSelect($index)" :class="{'selected':item.isS}">
                      <img src="../assets/img/gou.png" alt="">
                  </div>
                    <img @click="onSelect($index)" :src="item.img" alt="{{item.name}}">
                    <p>{{item.name}}</p>
                  </div>
            </div>
            <!-- 确定按钮 -->
            <input type="submit" value="选好了" class="send"></input>
        </form>
        
    </div>
</div>
</template>
<script>
import $ from 'zepto'
export default{
  data () {
    return {
      items: [
        {
          img: 'static/img/game.png',
          name: '守望先锋',
          isS: false
        },
        {
          img: 'static/img/game.png',
          name: '守望先锋',
          isS: false
        },
        {
          img: 'static/img/game.png',
          name: '守望先锋',
          isS: false
        },
        {
          img: 'static/img/game.png',
          name: '守望先锋',
          isS: false
        },
        {
          img: 'static/img/game.png',
          name: '守望先锋',
          isS: false
        },
        {
          img: 'static/img/game.png',
          name: '守望先锋',
          isS: false
        }
      ]
    }
  },
  ready: function() {
    const imgWith = $('.col-33>img').attr('width')
    const cover = $('.select')
    cover.css('width', imgWith + 'px')
    cover.css('height', imgWith + 'px')
  },
  methods: {
    onSelect: function(index) {
      this.items[index].isS = !this.items[index].isS
    }
  }
}

</script>
<style>
@import '../assets/css/style.css';
#initial{
    background:url(../assets/img/loginBg.jpg);
    height: 100%;
}
#initial nav{
    padding: 1rem 2rem;
}
#initial nav a{
    text-align: center;
    float: right;
    font-size:.8rem;
}
#initial .content-block{
    text-align: center;
    color: #fff;
}
#initial .next{
    margin: 1rem auto;
    padding: 2px;
    width: 100px;
    color: #cdcdcd;
    font-size: .5rem;
    letter-spacing: 1px;
    border: 1px solid #cdcdcd;
    border-radius: 20px;
}
#initial .next i.iconfont{
    font-size:.5rem;
}
#initial  h3{
    color: #fff;
    font-size:1rem;
    font-weight: normal;
    letter-spacing: 2px;
}
#initial .col-33{
    padding:0 10px;
    margin-bottom: 1rem;
}

#initial .col-33 img{
    width: 100%;
    z-index: 1;
}
#initial .col-33 .select{
    position: absolute;
    width: auto;
    height: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    display: none;
}
#initial .col-33 .selected{
    display: inherit;
}
#initial .col-33 .selected img{
    padding: 25%;
    width: 100%;
    display: block;
    margin: auto;
}

#initial .col-33 p{
    margin:0;
    font-size: .5rem;
}
#initial form{
    padding: 0 2rem
}
#initial input{
    display: block;
    float: center;
    width: 100%;
    margin: .5rem auto;
    padding: .5rem 1rem;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #44b9ff;
    color: #44b9ff;
    font-size: .6rem;
    clear: both;
}
#initial input.send{
    margin: 1rem 0;
    background-color: #44b9ff;
    color: #fff;
}

</style>