<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" @click="goto('/home')" :class="{on:this.$route.path === '/home'}">
      <i class="iconfont">&#xe69b;</i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/category')" :class="{on:this.$route.path === '/category'}">
      <i class="iconfont">&#xe6e2;</i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/goodbuy')" :class="{on:this.$route.path === '/goodbuy'}">
      <i class="iconfont">&#xe69d;</i>
      <span>值得买</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/shopcart')" :class="{on:this.$route.path === '/shopcart'}">
      <i class="iconfont">&#xe6e6;</i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on:this.$route.path === '/profile'}">
      <i class="iconfont">&#xe6dc;</i> 
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      
    }
  },
  methods:{
    goto(path){
      if(this.$route.path !== path){
        this.$router.replace(path)
      }
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .on 
    color red !important
  .footer_guide
    z-index 999
    display flex
    position fixed
    left 0
    bottom 0
    right 0
    width 100%
    height 50px
    border-top 1px solid #e4e4e4
    align-items center
    background #fff
    .guide_item
      flex 1
      display flex
      flex-direction column
      align-items center
      font-size 14px
      color #666
      i 
        font-size 22px !important
</style>
