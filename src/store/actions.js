import {RECIVE_LEFT_NAV,RECIVE_CATEGORY} from './mutation-type'
import {reqLeftNav,reqGetCategory} from '../api/index'
export default {
  async getLeftNav({commit}){
    const result = await reqLeftNav()
    if(result.code === 0){
      const leftNav = result.data      
      commit(RECIVE_LEFT_NAV,leftNav)
    }
  },
  async getCategoryList({commit}){
    const result = await reqGetCategory()
    if(result.code === 0) {
      const categoryListData = result.data 
      commit(RECIVE_CATEGORY,categoryListData)
    }
  }
}