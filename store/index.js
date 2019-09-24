import firebase from 'firebase'

export const state = () => ({
  counter: 0,
  user: null,
  loading: false,
  error: null
})

export const getters = {
  user(state) {
    return state.user
  }
}

export const mutations = {
  saveUser(payload) {
    state.user = payload.user
  },
  increment(state) {
    state.counter++
  },
  setUser(state, payload) {
    state.user = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  }
}

export const actions = {
  signUserIn({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid
        }
        commit('setUser', newUser)
      })
      .catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
  },
  signUserUp({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          registeredPosts: []
        }
        commit('setUser', newUser)
      })
      .catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
  },
  logout({ commit }) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}
