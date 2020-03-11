<template>
  <div class="NavDetailContainer">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/1.webp"></div>
        <div class="swiper-slide"><img src="./images/2.webp"></div>
        <div class="swiper-slide"><img src="./images/3.webp"></div>
        <div class="swiper-slide"><img src="./images/4.webp"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <main>
      <section class="category">
        <div class="bigTtile">2020春茶上市</div>
        <div class="smallTitle">2020年西湖龙井全新预售</div>
        <ul class="shopList">
          <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
                    <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
                    <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
                    <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
        </ul>
      </section>
            <section class="category">
        <div class="bigTtile">2020春茶上市</div>
        <div class="smallTitle">2020年西湖龙井全新预售</div>
        <ul class="shopList">
          <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
                    <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
                    <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
                    <li class="shop">
            <img src="./images/shangping.webp" alt="">
            <div class="desc">蛋黄起沙，鲜美油亮</div>
            <p class="shopName">富到流油的高邮咸鸭蛋 750克（10枚）</p>
            <div class="price">
              <span class="nowPrice">￥33</span>
              <span class="oldPrice">￥38</span>
            </div>
            <div class="tagWrapper">
              <span class="tag">满88顺丰包邮</span>
              <span class="tag">新春特惠</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'NavDetail',
  data () {
    return {

    }
  },
  mounted(){
        this.$nextTick(()=>{
          /* eslint-disable */
      var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环遍历模式
      autoplay:true,
      // 分页器
      pagination: {
        el: '.swiper-pagination'
      }
      })
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.NavDetailContainer
  width 100%
  height auto
  background #eee
  main
    width 100%
    height auto
    background #fff
    margin-top 10px
    .category
      width 95%
      height auto 
      margin 0 auto
      padding-top 15px
      .bigTtile 
        font-size 16px
        color #333 
        text-align center 
      .smallTitle
        text-align center 
        font-size 12px 
        color rgb(158,140,140)
        margin 10px 0
      .shopList 
        width 95%
        height auto
        display flex 
        align-items center 
        justify-content space-between
        flex-wrap wrap
        margin 0 auto
        .shop 
          width 48%
          height auto 
          margin-bottom 12px
          img 
            width 100%
            display block
          .desc
            width 100% 
            height 20px
            font-size 10px
            line-height 20px
            text-indent 10px
            background rgb(241,236,226)
            color rgb(156,136,92)
            margin-bottom 8px
          .shopName
            font-size 14px 
            color #333333
            line-height 20px
          .price 
            width 100%
            height auto
            display flex
            margin 8px 0
            .nowPrice 
              color #dd1a21
              font-size 16px
              margin-right 4px
            .oldPrice 
              color #f4f4f4
              font-size 10px 
              text-decoration line-through
          .tagWrapper 
            display flex
            align-items center 
            justify-content flex-start
            .tag
              color #dd1a21 
              font-size 10px
              padding 3px
              border 1px solid #dd1a21 
              border-radius 10%
              margin-right 8px
</style>
