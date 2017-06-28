import axios from 'axios'

export default class ApiService {
  constructor () {
    this.CancelToken = axios.CancelToken
    this.source = this.CancelToken.source()
  }

  cancelRequest () {
    this.source.cancel('Operation cancelled by user')
    this.source = this.CancelToken.source()
  }

  get (endpoint, data) {
    return this.callApi('get', endpoint, data)
  }

  callApi (method, endpoint, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: process.env.API_URI + endpoint,
        params: data,
        cancelToken: this.source.token
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          if (axios.isCancel(error)) {
            resolve()
          }

          reject(error)
        })
    })
  }
}
