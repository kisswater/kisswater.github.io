import axios from 'axios'
import store from '../store'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (/get/i.test(config.method) && /users|issues|labels/i.test(config.url)) {
    if (store.state.account.apiAccessToken) {
      config.params = config.params || {}
      config.headers['Authorization'] = `token ${store.state.account.apiAccessToken.join('')}`
    }
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
export default axios
