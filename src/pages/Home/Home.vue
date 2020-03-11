<template>
  <div>
    <header class="home_header">
      <div class="home_header_top">
        <span class="heder_title">网易严选</span>
        <div class="fake_search" @click="$router.push('/search')">
          <i class="iconfont" style="fontSize:16px">&#xe6e1;</i>
          <span>搜索商品, 共24267款好物</span>
        </div>
        <div class="login_btn" @click="$router.push('/login')">登录</div>
      </div>
      <div class="header_bottom_content">
        <div class="list_wrap" v-if="!isShowAllNav">
          <ul class="list">
            <li class="list_item" v-for="(nav, index) in navList" :key="index" :class="{active : currentNavIndex === index}" @click="showNavDetail(index)">{{nav.name}}</li>
          </ul>
        </div>
        <span v-else class="allNavText">全部频道</span>
        <div class="toggle_show" @click="toggleAllNav">
          <i class="iconfont">&#xe69c;</i>
        </div>
      </div>
    </header>

    <NavDetail v-if="isShowNavDetail"/>
    <main v-else>
          <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/swiper (1).jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper (2).jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper (3).jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper (4).jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper (5).jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper (6).jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper (7).jpg"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
        <div class="mid_title">
        <div class="mid_title_item">
          <i class="iconfont">&#xe6ed;</i>
          <span>网易自营品牌</span>
        </div>
        <div class="mid_title_item">
          <i class="iconfont">&#xe69f;</i>
          <span>30天无忧退货</span>
        </div>
        <div class="mid_title_item">
          <i class="iconfont">&#xe6e3;</i>
          <span>48小时快速退款</span>
        </div>
      </div>
        <ul class="kingkonglist">
        <li class="kingkong_item" v-for="(item, index) in kingKongList" :key="index"  @click="showNavDetail(index)">
            <img :src="item.picUrl">
            <span>{{item.text}}</span>
        </li>
      </ul>
        <div class="floor">
        <div class="floor_top" >
          <img src="https://yanxuan-item.nosdn.127.net/1790cd4cd47dbf233dd6bc88cada9bc1.png?imageView&thumbnail=168x0&quality=75">
        </div>
        <div class="floor_first">
          <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/48f036a0cbf8c6f649c3a057b2849ed8.png?quality=75&type=webp&imageView&thumbnail=375x0);background-size:100% 100%;"></a>
          <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/47e34fcdfb2f52e325feac5ed42daf39.png?quality=75&type=webp&imageView&thumbnail=375x0);background-size:100% 100%;"></a>
        </div>
        <div class="floor_item">
          <a href="javascript:;">
            <span class="title">48H限时购</span>
            <span class="detail">女王专属七折起</span>
            <img src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=160x160" alt="">
          </a>
          <a href="javascript:;">
            <span class="title">女神专属爆款</span>
            <span class="detail">美妆29.9元起</span>
            <img src="https://yanxuan-item.nosdn.127.net/0c807260926eb396d65e8d697d923bbf.png?quality=75&type=webp&imageView&thumbnail=160x160" alt="">
          </a>
          <a href="javascript:;">
            <span class="title">3月春茶上新</span>
            <span class="detail">特价384元/罐</span>
            <img src="https://yanxuan-item.nosdn.127.net/1790cd4cd47dbf233dd6bc88cada9bc1.png?quality=75&type=webp&imageView&thumbnail=160x160" alt="">
          </a>
        </div>
      </div>
    </main>

    <div class="allNav" v-show="isShowAllNav">
      <ul class="allNavWrapper">
        <li v-for="(nav, index) in navList" :key="index" :class="{active:index === currentNavIndex}" @click="showNavDetail(index)">{{nav.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import datas from '../../datas/index.json'
import CateModule from '../../datas/indexCateModule.json'
import NavDetail from '../../components/NavDetail/NavDetail'
export default {
  name: 'Home',
  data () {
    return {
      kingKongList:{},
      navList : [],
      isShowAllNav:false,
      isShowNavDetail:false,
      currentNavIndex:0
    }
  },
  methods:{
    _initBscroll(){
      this.topBScroll = new BScroll('.list_wrap',{
        click:true,
        scrollX:true,
        probeType:1
      })
    },
    toggleAllNav(){
      this.isShowAllNav = !this.isShowAllNav
      this.$emit('setMask',this.isShowAllNav)
    },
    showNavDetail(index){
      this.currentNavIndex = index
      if(index !== 0){
        this.isShowNavDetail = true
      }else{
        this.isShowNavDetail = false
      }
    }
  },
  mounted(){
    this._initBscroll()
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
    }),
    this.kingKongList = datas.kingKongModule.kingKongList
    this.navList = CateModule
    this.navList.unshift({name:'推荐'})
  },
  updated(){
    if(this.navList){
      this._initBscroll()
    }
  },
  components:{
    NavDetail
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.home_header
  z-index 999
  width 100%
  height 60px
  background #fff
  position fixed
  left 0
  right 0
  top 0
  display flex
  flex-direction column
  align-items center
  .home_header_top
    margin 10px auto 0
    width 90%
    height 28px
    display flex
    align-items center
    justify-content space-between
    .heder_title
      font-size 16px
    .fake_search
      display flex
      justify-content center
      width 65%
      height 30px
      line-height 30px
      font-size 14px
      background #EDEDED 
      border-radius 5px
      margin 0 5px
      color #666
      text-align center
      i 
        font-size 22px !important
    .login_btn
      width 40px
      height 20px
      font-size 12px
      line-height 20px
      color #DD1A21
      border 1px solid #DD1A21
      border-radius 6px
      text-align center
  .header_bottom_content
    width 100%
    height 42px
    position relative
    background #fff
    margin 10px auto 0
    display flex
    align-items center 
    .allNavText
      font-size 14px
      color #333
      width 90%
      display inline-block
      position absolute
      top 20px
      left 18px
      // transform translateX(18px)
    .toggle_show
      width 10%
      text-align right  
      height 100%
      line-height 40px
      position absolute
      right 18px
      top 3px
    .list_wrap
      margin-right 20px
      overflow hidden
      width 75%
      height 100%
      transform translateX(15px)
      position relative
      background #fff
      .list
        white-space nowrap
        position absolute
        .list_item 
          display inline-block
          height 25px
          line-height 25px
          padding 0 5px
          font-size 16px
          color #666
          margin-right 8px
          text-align center
          &.active
            border-bottom 2px solid #DD1A21 
            color #DD1A21
.swiper-container
  margin-top 100px
  width 100%
  height 200px
  img 
    width 100%
    height 100%
.mid_title
  width 100%
  height 20px
  margin 15px 0 10px 0
  display flex
  align-items center 
  justify-content space-around
  .mid_title_item
    display flex
    align-items center
    i
      font-size 20px
      color #DD1A21
    span 
      font-size 13px
      color #333
.kingkonglist 
  width 100%
  height 200px
  display flex
  justify-content space-around
  flex-wrap wrap
  .kingkong_item
    display flex
    flex-direction column
    align-items center
    margin 0 10px 10px 10px
    img 
      width 50px
      height 50px
      margin-bottom 10px
    span 
      font-size 12px
      color #333
.floor
  width 100%
  height 410px
  background #cc3256
  .floor_top 
    width 100%
    height 120px
    background url('https://yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif?imageView&quality=75')
    background-size 100% 100%
    z-index 2
    position relative
    img 
      zindex -1
      width 110px
      height 110px
      position absolute
      left 25px
  .floor_first 
    width 100%
    height 120px
    display flex
    align-items center 
    justify-content space-around
    a
      width 178px
      height 100px
      background-size 100%
  .floor_item
    width 100%
    height 120px
    display flex
    justify-content space-around
    a 
     display flex
     flex-direction column
     align-items center 
     justify-content space-around
     height 110px
     width 110px
     background-size 100%
     border-radius 13px
     background url(https://yanxuan.nosdn.127.net/800992d03b76683c4dfe3690863c70d8.png?quality=75&type=webp&imageView&thumbnail=250x0)
     span   
      color #AB0933
    .title 
      margin 10px 0
      font-size 12px
      font-weight bold
    .detail
      font-size 10px
    img 
      width 80px
      height 80px
.allNav
  z-index 1001
  width 100%
  height 200px
  background #fff 
  position fixed
  left 0
  top 95px
  .allNavWrapper
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    margin auto
    width 95%
    height 95%
    background #fff
    display flex
    flex-wrap wrap
    li 
      color #333 
      font-size 12px
      background #fafafa 
      border 1px solid #ccc
      padding 5px
      width 60px 
      height 15px
      text-align center
      line-height 15px
      margin 0 0 20px 10px
      &.active 
        color #dd1a21
        border-color #dd1a21
</style>
