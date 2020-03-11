<template>
  <div class="category_container">
    <header class="category_header">
      <div class="fake_search" @click="$router.push('/search')">
        <i class="iconfont" style="fontSize:16px">&#xe6e1;</i>
        <span>搜索商品, 共24267款好物</span>
      </div>
    </header>
    <div class="main">
      <div class="left_nav_wrapper">
      <ul class="left_list">
        <li  v-for="(nav, index) in leftNav" :key="index" :class="{active:index === curentIndex}"><a href="javascript:;" @click="clickLeft(index)">{{nav.name}}</a></li>
      </ul>
    </div>
    <div class="right_nav_wrapper" v-show="categoryListData">
      <RightShowType1 :category="categoryList" v-show="!categoryList.subCateList"/>
      <RightShowType2 :category="categoryList" v-show="categoryList.subCateList"/>
    </div>
    </div>
  </div>
</template>

<script>
import BScorll from 'better-scroll'
// import categoryListData from '../../datas/cateLists.json'
import RightShowType1 from '../../components/RightShowType1/RightShowType1'
import RightShowType2 from '../../components/RightShowType2/RightShowType2'
import {mapState} from 'vuex'
export default {
  name: 'Category',
  data () {
    return {
      curentIndex:0,
    }
  },
  methods:{
    _initLeftScroll(){
      this.leftScroll = new BScorll('.left_nav_wrapper',{
        click:true,
        scrollY:true,
        probeType:1
      })
      this.rightScroll = new BScorll('.right_nav_wrapper',{
        click:true,
        scrollY:true,
        probeType:1
      })
    },
    clickLeft(index){
      this.curentIndex = index
    }
  },
   mounted(){
    this.leftNavList = this.$store.state.leftNav
    this.$nextTick(()=>{
      this._initLeftScroll()
    })
  },
  computed:{
    categoryList(){
      return this.categoryListData[this.curentIndex]
    },
    showId(){
      return this.categoryList.id
    },
    ...mapState(['leftNav','categoryListData'])
  },
  components:{
    /* eslint-disable */ 
    RightShowType1,
    RightShowType2
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.category_container
  height 100%
  width 100%
  padding-bottom -50px 
  .main 
    display flex 
.category_header
  width 100%
  height 50px
  border-bottom  1px solid #e4e4e4
  position relative
  .fake_search
    display flex
    justify-content center
    width 95%
    height 25px
    line-height 25px
    font-size 14px
    background #EDEDED 
    border-radius 5px
    margin auto 
    color #666
    text-align center
    position absolute
    left 0
    bottom 0
    right 0
    top 0
    i 
      font-size 22px !important
.category_container
  height 100%
  width 100%
  padding-bottom -50px
  .main 
    display flex
    position relative
    .left_nav_wrapper
      flex 0 0 80px
      display inline-block
      position relative
      width 22%
      height 100%
      overflow hidden
      padding 30px 0
      height 510px
      border-right  1px solid #e4e4e4
      .left_list
        padding-top 20px
        position absolute
        width 100%
        li 
          position relative
          width 100%
          font-size 14px
          padding 6px 0
          margin-bottom 24px
          text-align center
          a 
            width 100%
            color #333333
          &.active::before 
            content ''
            position absolute
            left 0
            top 0
            width 3px
            height 100%
            background #AB2B2B
          &.active
            a 
              color #AB2B2B
    .right_nav_wrapper
      position absolute
      right 0
      flex 1
      width 78%
      height 100%
</style>
