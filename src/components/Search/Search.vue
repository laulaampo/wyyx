<template>
  <div class="search_wrapper">
    <div class="search_header">
      <div class="searchInput">
        <i class="iconfont">&#xe6e1;</i>
        <input type="text" placeholder="全屋清扫神器">
      </div>
      <span class="cancer" @click="$router.back()">取消</span>
    </div>
    <div class="text_content">
      <p>热门搜索</p>
      <ul class="keyword_list">
        <li class="hot">负离子吹风机</li>
        <li>化痰祛湿 红豆薏米</li>
        <li>复工防护包</li>
        <li>口罩</li>
        <li>酒精湿巾</li>
        <li>酒精棉片</li>
        <li>牛奶</li>
        <li>电动牙刷</li>
        <li>拉拉裤</li>
        <li>尿不湿</li>
        <li>内裤</li>
        <li>螺蛳粉</li>
        <li>四件套</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.search_wrapper
  height 100%
  width 88%
  margin auto
  .search_header
    display flex
    .cancer
      font-size 16px
      color #333
      width 12%
      height 50px
      text-align right
      line-height 50px
    .searchInput
      margin-top 15px
      width 90%
      height 26px
      display flex
      align-items center 
      justify-content flex-start
      background #f4f4f4
      font-size 16px
      border-radius 5px
      input 
        outline none
        width 80%
        height 100%
        background #f4f4f4
    i 
      height 50px
      width 50px
      text-align center 
      line-height 50px
      color rgba(0,0,0,.8)
.text_content
  margin-top 20px
  p
    font-size 16px
    color #999
    margin-bottom 15px
  .keyword_list
    li 
      padding 5px
      float left
      margin 0 15px 15px 0
      border 1px solid #999
      color #333 
      border-radius 4px
      font-size 12px
      &.hot 
        color #dd1a21
        border-color #dd1a21
</style>
