// DEFAULT MODE
// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       counter: 0
//     },
//     mutations: {
//       increment (state) {
//         state.counter++
//       },
//       decrement (state) {
//         state.counter--
//       }
//     }
//   })
// }

// export default createStore


// MODULE MODE
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  }
}
