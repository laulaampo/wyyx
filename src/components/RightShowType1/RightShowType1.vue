<template>
  <div class="container" v-show="category">
    <div class="banner">
      <img :src="category.bannerUrl" alt="">
    </div>
    <section class="item_content">
      <ul class="list">
        <li class="list_item" v-for="(item, index) in category.categoryList" :key="index">
          <img :src="item.wapBannerUrl" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RightShowType1',
  data () {
    return {

    }
  },
  props:['category']
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .container 
    width 100%
    height 100%
    .banner
      height 100px
      width 90%
      margin 20px auto
      img
        width 100%
        height 100%
    .item_content
      width 95%
      margin 0 auto
      .list 
        display flex
        align-items center 
        justify-content flex-start
        flex-wrap wrap
        .list_item
          display flex
          width 90px
          height 90px
          flex-direction column
          align-items center
          text-align center
          margin-bottom 15px
          img  
            width 72px
            height 72px
            margin-bottom 8px
          span 
            font-size 12px
            color #333333
</style>
