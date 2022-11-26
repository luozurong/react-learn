import axios from 'axios'

const http = axios.create({
  baseURL: 'http://xue.cnkdl.cn:23683',
  timeout: 60000
})

http.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default http