import axios from 'axios'

export default {
  getUsers () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  },

  getUser (id) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
