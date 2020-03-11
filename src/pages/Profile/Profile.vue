<template>
  <div>
    Profile
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(!vm.$store.state.user._id){
        next('/login')
      }else{
        next('/profile')
      }
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
</style>
