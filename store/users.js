import api from '../api/users'

const state = () => ({
  loading: false,
  list: null,
  error: null
})

const getters = { }

const actions = {
  getUsers ({ commit, state }) {
    if (state.list) {
      console.log('Already loaded users');
      return;
    }
    console.log('Loading users...')
    commit('load')
    api.getUsers()
      .then((res) => commit('loadSuccess', res.data))
      .catch((error) => commit('loadFailure', error))
  }
}

const mutations = {
  load (state) {
    state.loading = true
  },
  loadSuccess (state, users) {
    state.loading = false
    state.list = users
  },
  loadFailure (state, error) {
    state.loading = false
    state.error = error
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
