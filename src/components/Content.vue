<template>
  <p class="media-info" v-if="content ? true :false">
    <slot name="one"></slot>
    <span>{{content}}</span><a v-link="{ path: url, replace: true}">[查看更多]</a>
  </p> 
</template>

<script>
import $ from 'zepto'
export default {
  props: {
    content: '',
    more: '',
    url: ''
  },
  ready: function() {
    // 查看更多
    const p = $('p.media-info')
    const span = $('p.media-info span')
    const pWidth = p.width()
    const pSize = span.css('font-size')
    const pSizeNum = parseInt(pSize.substr(0, pSize.length - 2), 10)
    const num = Math.ceil(pWidth * 2 / pSizeNum - 8)
    const spanContent = span.html()
    span.html(spanContent.substr(0, num) + '...')
  }
}
</script>
<style>
.media-box p.media-info {
    color: #999;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}  
.media-box p.media-info a {
    margin-left: .5rem;
}
</style>