// 引入axios
import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 20000
})
// axios拦截器
// 请求拦截
service.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  err => {
    console.log(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  res => {
    console.log(res)
    return res
  },
  err => {
    console.log(err.response)
    return err.response
  }
)
// get post put del方法promise封装
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'get',
      url: url,
      params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url: url,
      data
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'put',
      url: url,
      data
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const del = (url, params) => {
  return new Promise((resolve, reject) => {
    service({
      method: 'delete',
      url: url,
      params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
