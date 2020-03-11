// 引入mock
import Mock from 'mockjs'

import leftNav from '../datas/cateNavDatas.json'
import categoryListData from '../datas/cateLists.json'

// 拦截ajax请求 返回虚拟的数据 mock方法两个参数 第一个参数是请求路径 第二个参数是返回的数据形式

Mock.mock('http://localhost:8080/leftnav',{code:0,data:leftNav.categoryL1List})
Mock.mock('http://localhost:8080/category',{code:0,data:categoryListData})
