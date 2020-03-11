import {RECIVE_LEFT_NAV,RECIVE_CATEGORY} from './mutation-type'
export default {
  [RECIVE_LEFT_NAV](state,leftNav){
    state.leftNav = leftNav
  },
  [RECIVE_CATEGORY](state,categoryListData){
    state.categoryListData = categoryListData
  }
}