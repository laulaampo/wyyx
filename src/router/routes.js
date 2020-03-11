import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Profile from '../pages/Profile/Profile.vue'
import GoodBuy from '../pages/GoodBuy/GoodBuy.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Search from '../components/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/goodbuy',
    component:GoodBuy,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/home'
  }
]

