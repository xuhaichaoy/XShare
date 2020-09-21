/**
 * ajax请求配置
 */
// import axios from 'axios'
import { axios } from 'taro-axios'
import Qs from 'qs'

// import cookie from 'js-cookie'
const apiURL = "http://117.51.139.177:7081"
// const apiURL = "http://haichao.mobi:3000"
// axios默认配置
axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = apiURL // 默认地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//整理数据
axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data)
  // data = JSON.stringify(data)
  return data
};

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  config => {
    //config.data = JSON.stringify(config.data)
    // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    //判断是否存在ticket，如果存在的话，则每个http header都加上ticket
    // if (cookie.get("token")) {
    //   //用户每次操作，都将cookie设置成2小时
    //   cookie.set("token", cookie.get("token"), 1 / 12)
    //   config.headers.token = cookie.get("token")
    // }

    // axios请求默认是不携带cookie的，让了让其带上cookie
    config.withCredentials = true

    return config
  },
  error => {
    return Promise.reject(error.response)
  });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode === "404") {
      // console.log("response.data.resultCode是404")
      // 返回 错误代码-1 清除ticket信息并跳转到登录页面
      //      cookie.del("ticket")
      //      window.location.href='http://login.com'
      return
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error) // 返回接口返回的错误信息
  });
export default axios;
