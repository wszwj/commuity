<template>
<div id="add">
    <v-nav :path="path" :title="title" :icon="icon"></v-nav>
    <div class="content">
      <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">问题</a>
        <a href="#tab2" class="tab-link button">建议</a>
      </div>
      <div class="content-block">
        <div class="tabs">
          <!-- 问题 -->
          <div id="tab1" class="tab active">
            <div class="content-block-block">
              <div class="list-block">
              <ul>
                <li>
                  <div class="item-content" style="margin: 2rem 0;">
                      <div class="item-title label"style="font-weight: bold;color: #000;">游戏名称</div>
                      <div class="item-input">
                        <input type="text" placeholder="输入并选择相应游戏标签">
                      </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                      <div class="item-title label">标题</div>
                      <div class="item-input">
                        <input type="text" placeholder="输入问题的标签">
                      </div>
                  </div>
                </li>
                <li class="align-top">
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title label add-info">详细描述<span>(必填)</span></div>
                    </div>
                  </div>
                </li>
                <li><div class="textarea" contenteditable="true"><br /></div></li>
               </ul> 
              </div>
            </div>  
          </div> 
          <!-- 建议 -->
          <div id="tab2" class="tab">
            <div class="content-block-block">
              <div class="list-block">
              <ul>
                <li>
                  <div class="item-content" style="margin: 2rem 0;">
                      <div class="item-title label"style="font-weight: bold;color: #000;">游戏名称</div>
                      <div class="item-input">
                        <input type="text" placeholder="输入并选择相应游戏标签">
                      </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                      <div class="item-title label">标题</div>
                      <div class="item-input">
                        <input type="text" placeholder="输入问题的标签">
                      </div>
                  </div>
                </li>
                <li class="align-top">
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title label add-info">详细描述<span>(必填)</span></div>
                    </div>
                  </div>
                </li>
                <li><div class="textarea" contenteditable="true"><br /></div></li>
               </ul> 
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <nav class="bar bar-tab">
    <div class="bar-left">
      <i class="iconfont icon-at"></i>
      <i class="iconfont icon-shape1" style="margin-left: 1rem;"></i>      
    </div>

    <div class="bar-right">
      发布<i class="iconfont icon-fabu"></i>
    </div>  
      
    </nav>
</div>
</template>   


</template>
<script>
import VNav from '../components/Nav'
export default {
  data () {
    return {
      title: '发声',
      path: '/home',
      icon: 'icon-shape32'
    }
  },
  components: {
    VNav
  },
  methods: {
    isImg (e) {
      if (e) {
        return true
      }
      return false
    }
  }
}
</script>

<style>
@import '../assets/css/style.css';
#add .bar-nav {
    top: 1px;
    z-index: 999;
}
#add .bar-nav ~ .content{
  height: 80%;
}
#add .title{
  box-shadow: none;
}
#add .list-block ul:before,#add .buttons-tab:after,#add .list-block ul:after,#add .list-block .item-inner:after{
  background-color: inherit;
}
#add .list-block{
  margin: 0 1rem;
}
#add .list-block .item-title.label{
  width: 45%;
  font-size:13pt;
  color: #a9a9a9;
}
#add .list-block .item-title.label span{
    font-size: 10pt;
    padding-left: .4rem;
    color: #ccc;
}
#add .buttons-tab{
    padding: 0 20% 2%;
    width: 100%;
}

#add .buttons-tab .button.active{
    font-weight: bolder;
    color:#34465c;
    border-color:#ec7e08;
}
#add .buttons-tab .button{
    margin: 0 10%;
    text-indent: .4rem;
    letter-spacing: .5rem;
    border-top: 8px solid rgba(0, 0, 0, 0);
    border-bottom: none;
}
#add ul li input{
    font-size: 11pt;

}
#add ul li input::placeholder{
    text-align: right;  
}
#add ul li textarea{
    border-bottom: 1px solid #ccc;
    height: 1rem;
}

#add .textarea{
    width: 90%; 
    margin-left: 5%; 
    outline: 0; 
    border-bottom: 1px solid #a0b3d6; 
    line-height: 150%;
}

#add .bar-left{
  float: left;
}

#add .bar .bar-right{
    float: right;
    color: #b5b5b5;
    font-size: 15px;
    letter-spacing: 2px;
}
#add .bar .bar-right i{
    vertical-align: middle;
    margin-left: .5rem;
}
#add .bar-tab{
    padding: 10px 2rem;
    box-shadow: 0 -3px 10px 0 #b3b3b3;
}
#add .bar-tab input{
  width: 40%;
  border:hidden;
}
#add .bar-tab .iconfont{
    color: #b5b5b5;
}
</style>