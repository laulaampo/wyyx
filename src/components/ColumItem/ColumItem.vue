<template>
  <div class="ItemContainer">
    <img :src="columItem.picUrl" alt="">
    <div class="text">
      <p class="title">{{columItem.title}}</p>
      <div class="info">
        <div class="headerName">
          <img :src="columItem.avatar" alt="">
          <span class="name">{{columItem.nickname}}</span>
        </div>
        <div class="readCount">
          <i class="iconfont">&#xe6a0;</i>
          <span class="count">{{columItem.readCount}}</span>
        </div>
      </div>
      <div class="buyNow" v-show="columItem.buyNow">
        <span>{{columItem.buyNow}}</span>
        <a href="#javascript">去购买></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumItem',
  data () {
    return {

    }
  },
  props:['columItem'],
  mounted(){
  
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.ItemContainer
  width 100%
  background #fff
  border-radius 10px
  margin-bottom 15px
  img 
    width 100%
    height auto
    border-radius 10px 10px 0 0
    margin-bottom 10px
  .text 
    width 90%
    height auto
    margin 0 auto
    margin-bottom 15px
    .title
      font-size 15px
      color #333
      line-height 20px
    .info
      margin-top 10px
      margin-bottom 15px
      display flex
      align-items center 
      justify-content space-between
      .headerName
        display flex
        align-items center 
        justify-content space-between
        img 
          width 22px
          height 22px
          border-radius 50%
          margin-right 4px
        .name
          font-size 11px
          color #7f7f7f
      .readCount
        display flex
        justify-content space-between
        align-items center 
        i 
          font-size 18px
          color #7f7f7f 
        .count 
          font-size 11px
          color #7f7f7f
  .buyNow
    width 95%
    height 30px 
    border-top 1px solid #d9d9d9
    margin 0 auto
    display flex 
    align-items center 
    justify-content space-between
    span 
      font-size 11px
      color #333
      overflow hidden
      text-overflow: ellipsis
      white-space nowrap
    a 
      color #dd1a21 
      font-size 11px
      text-align right 
      white-space nowrap
</style>
