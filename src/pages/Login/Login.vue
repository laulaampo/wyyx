<template>
  <div class="loginContainer">
    <header>
      <i class="iconfont" @click="$router.replace('/')">&#xe69b;</i>
      <p>网易严选</p>
      <div class="right">
        <i class="iconfont" @click="$router.replace('/search')">&#xe6e1;</i>
        <i class="iconfont" @click="$router.replace('/shopcart')">&#xe6e6;</i>
      </div>
    </header>
    <main v-show="showType === 0">
      <div class="logoWrapper">
        <img src="./wyyx.png" alt="">
      </div>
      <div class="loginWay">
        <div class="phone" @click="showType = 1"><i class="iconfont">&#xe692;</i> 手机号快捷登录</div>
        <div class="email" @click="showType = 2"><i class="iconfont">&#xe623;</i> 邮箱账号登录</div>
      </div>
      <div class="itemWrapper">
        <span class="item">
          <i class="iconfont">&#xe67b;</i>
          <span>微信</span>
        </span>
        <span class="item middle">
          <i class="iconfont">&#xe6d8;</i>
          <span>QQ</span>
        </span>
        <span class="item">
          <i class="iconfont">&#xe635;</i>
          <span>微博</span>
        </span>
      </div>
    </main>
    <section class="loginPhone" v-show="showType === 1">
      <div class="img">
        <img src="./wyyx.png" alt="">
      </div>
      <div class="content">
        <div class="input">
          <label for="phoneNumber">
            <input type="text" 
          name="phoneNumber" 
          placeholder="请输入手机号" 
          v-model="phone" 
          v-validate="'required'"></label>
          <span style="color:red" >{{ errors.first('phone') }}</span>
          <label for="code"><input type="password" name="code" placeholder="请输入短信验证码" v-model="code" v-validate="'required'"><a href="#javascript:;">获取验证码</a></label>
          <span style="color:red ;fontSize:12px">{{errors.first('code')}}</span>
        </div>
        <p class="text">
          <span>遇到问题？</span>
          <span @click="showType = 3" class="goPassword">使用密码验证登录</span>
        </p>
        <div class="loinBtn">登录</div>
        <div class="allRight">
          <input type="checkbox">
          <p>我同意<a href="javascrpt:;">《服务条款》</a>和<a href="javascript">《网易隐私政策》</a></p>
        </div>
        <div class="backMain" @click="showType = 0">其他方式登录></div>
      </div>
    </section>
    <section class="loginEmail" v-show="showType === 2">
      <div class="img">
        <img src="./wyyx.png" alt="">
      </div>
      <div class="content">
        <div class="input">
          <input type="text" placeholder="邮箱账号" v-model="email" v-validate="'required'">
          <span style="color:red ;fontSize:12px">{{errors.first('email')}}</span>
          <input type="password" placeholder="密码" v-model="pwd" v-validate="'required'">
          <span style="color:red ;fontSize:12px">{{errors.first('pwd')}}</span>
        </div>
        <div class="help">
        <p class="text">
          <span>遇到问题？</span>
          <span @click="showType = 2" class="goPassword">使用短信快捷登录</span>
        </p>
        </div>
        <div class="loinBtn">登录</div>
        <div class="backMain" @click="showType = 0">其他方式登录></div>
      </div>
    </section>
      <section class="loginPwd" v-show="showType === 3">
        <div class="img">
          <img src="./wyyx.png" alt="">
        </div>
        <div class="content">
          <div class="input">
            <input type="text" placeholder="请输入手机号" v-model="phone" v-validate="'required'">
            <span style="color:red ;fontSize:12px" >{{errors.first('phone')}}</span>
            <input type="password" placeholder="请输入密码" v-model="pwd" v-validate="'required'">
            <span style="color:red; fontSize:12px"  >{{errors.first('pwd')}}</span>
          </div>
          <p class="text">
            <span>遇到问题？</span>
            <span @click="showType = 1" class="goPassword">使用短信快捷登录</span>
          </p>
          <div class="loinBtn">登录</div>
          <div class="backMain" @click="showType = 0">其他方式登录></div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showType:1,
      code:'',
      phone:'',
      email:'',
      pwd:''
    }
  },
  methods:{
    login(){
      let result
      const {loignWay} = this
      if(loignWay === 1){
        // 手机号码验证码登录
        const {code,phone} = this
      }else if(loignWay === 2){
        // 邮箱密码登录
        const {email,pwd} = this
      }else if(loignWay === 3){
        // 手机号密码登录
        const {pwd,phone} = this
      }
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.loginContainer
  width 100%
  height 100%
  overflow hidden   
  header 
    height 45px
    padding 0 15px 0 15px
    background #fff
    display flex
    justify-content space-between
    align-items center
    border-bottom  1px solid #fafafa
    i
      font-size 32px
    p 
      font-size 18px
      color #333333
      transform translateX(18px)
  main 
    height 100%
    width 100%
    background #f2f5f4
    .logoWrapper
      height 200px
      width 100%
      display flex 
      justify-content center  
      align-items center
      img 
        width 135px
    .loginWay 
      width 100%
      height 120px
      display flex
      flex-direction column 
      justify-content space-between
      align-items center
      margin 25% 0
      div 
        width 85%
        height 45px
        font-size 14px
        line-height 40px
        text-align center
        display flex
        align-items center
        justify-content center
        i 
          font-size 18px
          margin-right 5px
      .phone
        background #dd1a21
        border 1px solid #dd1a21 
        color #fff 
      .email 
        border 1px solid #dd1a21 
        color #dd1a21
    .itemWrapper
      color #7f7f7f
      width 100%
      height 200px
      display flex
      justify-content center
      .item
        width 80px 
        height 15px
        line-height 20px
        text-align center
        padding 5px
        font-size 14px
        display flex 
        align-items center
        justify-content center
        &.middle 
          border-left 1px solid #7f7f7f
          border-right  1px solid #7f7f7f
        i 
          font-size 22px
          margin-right 4px
  .loginPhone
    width 100%
    height 100%
    .img 
      width 100%
      height 120px 
      display flex 
      align-items center 
      justify-content center
      img 
        width 135px
    .content
      width 90%
      margin 0 auto
      .input
        width 100%
        label 
          width 100%
          position relative
          a
            font-size 15px
            padding 5px
            border 1px solid #bdbdbd
            color #333333
            position absolute
            top 50%
            right 10px
            transform translateY(-8%)
          input 
            width 100%
            background #fff !important
            font-size 15px
            outline none
            height 45px
            color #666
            border-bottom 1px solid #bdbdbd
            margin-bottom 15px
      .text
        width 100%
        padding 8px 0
        display flex 
        align-items center 
        justify-content space-between
        font-size 15px
        color #7f7f7f
        .goPassword
          color #333
      .loinBtn 
        margin 15px 0
        width 100%
        height 45px 
        line-height 45px
        text-align center 
        font-size 15px 
        background #dd1a21 
        color #fff
      .allRight
        display flex 
        align-items center 
        justify-content flex-start
        width 100%
        margin-bottom 10px
        font-size 12px 
        color #7f7f7f 
        input 
          width 15px
          height 15px
          background #fff
          border 1px solid #7f7f7f
          color #7f7f7f
          margin-right 5px
        a 
          color #007aff
      .backMain 
        width 100% 
        padding 20px 0 
        text-align center 
        color #333
        font-size 15px
  .loginEmail
    width 100%
    height 100%
    .img 
      width 100%
      height 120px 
      display flex 
      align-items center 
      justify-content center
      img 
        width 135px
    .content 
      width 90%
      margin 0 auto
      .help 
        width 100%
        padding 8px 0
        font-size 14px
        color #7f7f7f 
        display flex 
        justify-content space-between
      .loinBtn 
        margin 15px 0
        width 100%
        height 45px 
        line-height 45px
        text-align center 
        font-size 15px 
        background #dd1a21 
        color #fff
      .backMain 
        width 100% 
        padding 20px 0 
        text-align center 
        color #333
        font-size 15px
      .input
        width 100%
        position relative
        span 
          position  absolute 
          bottom 0 
          left 0
        input 
          width 100%
          background #fff !important
          font-size 15px
          outline none
          height 45px
          color #666
          border-bottom 1px solid #bdbdbd
          margin-bottom 15px
  .loginPwd
    width 100%
    height 100%
    .img 
      width 100%
      height 120px 
      display flex 
      align-items center 
      justify-content center
      img 
        width 135px
    .content 
      width 90%
      margin 0 auto
      .help 
        width 100%
        padding 8px 0
        font-size 14px
        color #7f7f7f 
        display flex 
        justify-content space-between
      .loinBtn 
        margin 15px 0
        width 100%
        height 45px 
        line-height 45px
        text-align center 
        font-size 15px 
        background #dd1a21 
        color #fff
      .backMain 
        width 100% 
        padding 20px 0 
        text-align center 
        color #333
        font-size 15px
      .input
        width 100%
        input 
          width 100%
          background #fff !important
          font-size 15px
          outline none
          height 45px
          color #666
          border-bottom 1px solid #bdbdbd
          margin-bottom 15px
      .text
        width 100%
        padding 8px 0
        display flex 
        align-items center 
        justify-content space-between
        font-size 15px
        color #7f7f7f
        .goPassword
          color #333
</style>
