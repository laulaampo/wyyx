<template>
  <div class="goodBuyContainer">
    <header>
      <i class="iconfont goRight" @click="$router.replace('/')">&#xe69b;</i>
      <span>值得买</span>
      <div class="headerRight">
        <i class="iconfont goLeft" @click="$router.push('/search')">&#xe6e1;</i>
        <i class="iconfont" @click="$router.replace('/shopcart')">&#xe6e6;</i>
      </div>
    </header>
    <div class="swiperTitle">
      <img src="./text.png" alt="" class="swiperText">
      <img src="./bg.png" alt class="bgImag">
      <div class="text">严选好物&nbsp;用心生活</div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in bigArr" :key="index">
          <a href="javascript:;" v-for="(item, index) in bigArr[index]" :key="index">
            <img :src="item.picUrl">
            <span class="bold">{{item.mainTitle}}</span>
            <span class="small">{{item.viceTitle}}</span>
          </a>
        </div>
      </div>
    <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="colums">
      <ColumItem v-for="(columItem, index) in columItems" :key="index" :columItem="columItem"/>
    </div>
  </div>
</template>

<script>
import swiperDatas from '../../datas/niceBuySwiper.json'
import goodBuyData from '../../datas/niceBuy.json'
import Swiper from 'swiper'
import ColumItem from '../../components/ColumItem/ColumItem'
export default {
  name: 'GoodBuy',
  data () {
    return {
      swiperArr:[],
      columItems:[]
    }
  },
  mounted(){
    this.swiperArr = swiperDatas.data.navList
    const arr1 = goodBuyData.data[0].topics
    const arr2 = goodBuyData.data[1].topics
    this.columItems = [...arr1,...arr2]
    this.$nextTick(()=>{
       this.mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环遍历模式
          // 分页器
          pagination: {
          el: '.swiper-pagination'
      }
    })
    })
  },
  computed:{
    bigArr(){
      const {swiperArr} = this
      let bigArr = []
      let smallArr = []
      swiperArr.forEach(item=>{
        if(smallArr.length === 0){
          bigArr.push(smallArr)
        }
        smallArr.push(item)
        if(smallArr.length === 8){
            smallArr = []
        }
      })
      return bigArr
    }
  },
  components:{
    ColumItem
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.goodBuyContainer
  height auto
  width 100%
  background #eee
  header 
    width 100%
    height 45px
    margin 0 auto
    background #fff
    display flex
    align-items center
    justify-content space-between
    .goRight
      transform translateX(15px)
    span 
      font-size 18px
    i 
      font-size 30px 
    .headerRight
      transform translateX(-15px)
      display flex
      align-items center
      justify-content space-between
      .goLeft
        transform translateX(-14px)
  .swiperTitle
    position relative
    width 100%
    height 450px
    border-top 1px solid #333
    .text 
      color #fff 
      font-size 16px
      position absolute
      left 76px
      top 40px
    .swiperText 
      width 65px
      height 35px
      position absolute
      left 8px
      top 28px
    .bgImag 
      width 100%
      height 240px
  .swiper-container
    width 95%
    height 270px
    margin -380px auto 0
    background #fff
    border-radius 10px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 80px
        height 90px
        display flex 
        justify-content space-around
        align-items center
        flex-wrap wrap
        a 
          width 80px
          display flex
          flex-direction column
          align-items center
          margin 10px 0
          img 
            width 55px
            height 55px
            margin-bottom 5px
          .bold 
            font-size 16px
            font-weight bold
            color #333
            margin-bottom 5px
          .small 
            font-size 10px
            color #999
  .colums 
    width 95%
    margin 0 auto 
    padding-top 20px
    // display flex 
    // flex-direction column
    // flex-wrap wrap
    // justify-content space-between
    column-count 2
    // column-width 200px
    // break-inside: avoid
</style>
