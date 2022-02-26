import axios from 'axios'

export default {
  install(Vue) {
    axios.defaults.baseURL = 'https://api.themoviedb.org/'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accepts'] = 'application/json'
    Vue.prototype.$axios = axios
  }
}
