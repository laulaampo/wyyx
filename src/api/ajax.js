// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'

axios.interceptors.request.use(config => {
  const {method, data} = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data对象转化为urlEncoding的形式
    config.data = qs.stringify(data)
  }
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log(error)
  return new Promise(() => { })
})
// 向外暴露axios
export default axios
