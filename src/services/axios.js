import axios from 'axios'
import env from '../../env'

export default {
  install (Vue) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
      },
    }

    const instance = axios.create({
      baseURL: env.domain,
      https: config,
    })

    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Accepts'] = 'application/json'
    Vue.prototype.$axios = instance
  }
}
