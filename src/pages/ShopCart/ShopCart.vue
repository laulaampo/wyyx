<template>
  <div class="shopCartContainer">
    <header class="cartHeader">
      <span>购物车</span>
      <a href="javascript:;">领券</a>
    </header>
    <section class="midTitle">
      <span> <i class="iconfont">&#xe6ee;</i> 30天无忧退货</span>
      <span> <i class="iconfont">&#xe6ee;</i> 48小时快速退款</span>
      <span> <i class="iconfont">&#xe6ee;</i> 满88元免邮费</span>
    </section>
    <main class="main">
      <div class="img"></div>
      <div class="text">去添加点什么吧</div>
      <div class="loginButton" @click="$router.replace('/login')">登录</div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
body
  height  100%
.shopCartContainer
  position relative
  height 100%
  .cartHeader 
    position fixed
    left 0
    top 0
    width 100%
    height 45px
    background #fff
    display flex
    justify-content space-between
    span 
      height 100%
      color #333333
      font-size 20px
      line-height 45px
      margin-left 20px
    a 
      height 100%
      line-height 45px
      font-size 16px
      margin-right 20px
      color #DD1A21
  .midTitle
    position fixed
    left 0
    top 45px
    height 32px
    width 100%
    // padding 0 20px
    background #eeeeee
    display flex
    justify-content space-around
    align-items center
    span 
      font-size 12px
      color #666
      display flex
      align-items center
      i 
        font-size 6px
        margin-right 3px
  .main
    position absolute 
    top 77px
    bottom 0
    width 100%
    height 100%
    background #F4F4F4
    display flex
    flex-direction column
    align-items center
    justify-content center
    .img 
      width 120px
      height 130px
      background url(./cart.webp) no-repeat
      background-size 100% 
    .text 
      font-size 15px
      color #999
      text-align center
      margin -20px 0 30px
    .loginButton 
      width 240px
      height 50px
      background #dd1a21
      font-size 16px
      color #fff
      line-height 50px
      text-align center
</style>
