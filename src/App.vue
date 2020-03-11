<template>
  <div id="app">
    <keep-alive>
      <router-view @setMask="setMask"></router-view>      
    </keep-alive>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
    <div class="mask" v-show="isShowMask" @click="isShowMask = false"></div>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  data(){
    return {
      isShowMask:false
    }
  },
  components: {
    FooterGuide
  },
  async mounted(){
    await this.$store.dispatch('getCategoryList')
    await this.$store.dispatch('getLeftNav')
  },
  methods:{
    setMask(flag){
      this.isShowMask = flag
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  height 100%
  position relative
  .mask
    width 100%
    height 100%
    background rgba(0,0,0,.4)
    position absolute
    left 0
    top 0
    z-index 1000
</style>
