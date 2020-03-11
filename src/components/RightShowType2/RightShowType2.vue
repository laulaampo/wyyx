<template>
  <div class="container">
    <div class="banner">
      <img :src="category.bannerUrl" >
    </div>
    <section>
      <div class="cateListWrapper">
        <p class="listTitle">爱家爱生活</p>
        <ul class="cateList">
          <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
        </ul>
      </div>
            <div class="cateListWrapper">
        <p class="listTitle">爱家爱生活</p>
        <ul class="cateList">
          <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
        </ul>
      </div>
            <div class="cateListWrapper">
        <p class="listTitle">爱家爱生活</p>
        <ul class="cateList">
          <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
                    <li class="cateListItem">
            <img src="https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png" alt="">
            <span>秋冬好物</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RightShowType2',
  data () {
    return {
      
    }
  },
  props:['category']
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.container
  .cateListWrapper
    width : 92%
    margin 0 auto 25px
    .listTitle 
      font-size 14px
      font-weight bold
      color #333333
      margin-bottom 12px
    .cateList
      display flex
      align-items center 
      justify-content flex-start
      flex-wrap wrap
      border-top 1px solid #E4E4E4
      .cateListItem
        display flex
        width 89px
        height 89px
        flex-direction column
        align-items center
        text-align center
        margin-bottom 15px
        padding-top 10px
        img  
          width 72px
          height 72px
          margin-bottom 8px
        span 
          font-size 12px
          color #333333
</style>
