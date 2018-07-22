import api from '../api/users'

const state = () => ({
  loading: false,
  item: null,
  error: null
})

const getters = { }

const actions = {
  getUser ({ commit, state }, param) {
    console.log('Loading user... ' + param)
    commit('load', param)
    api.getUser(param)
      .then((res) => commit('loadSuccess', res.data))
      .catch((error) => commit('loadFailure', error))
  }
}

const mutations = {
  load (state) {
    state.loading = true
    state.item = null
  },
  loadSuccess (state, user) {
    state.loading = false
    state.item = user
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
