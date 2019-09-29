import firebase from 'firebase'
import { fireDb } from '~/plugins/firebase.js'

/* eslint-disable */
export const strict = false

export const state = () => ({
  counter: 0,
  user: null,
  loading: false,
  error: null,
  loadedPosts: [],
  loadedReviews: []
})

export const getters = {
  user(state) {
    return state.user
  },
  loadedPosts(state) {
    return state.loadedPosts.sort((postA, postB) => {
      return postA.date > postB.date
    })
  },
  loadedReviews(state) {
    return state.loadedReviews
  },
  featuredPosts(state, getters) {
    return getters.loadedPosts.slice(0, 6)
  },
  // featuredReviews(state, getters) {
  //   return getters.loadedReviews.slice(0, 5)
  // },
  loadedPost(state) {
    return (postId) => {
      return state.loadedPosts.find((post) => {
        return post.id === postId
      })
    }
  },
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
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
  },
  setLoadedPosts(state, payload) {
    state.loadedPosts = payload
  },
  setLoadedReviews(state, payload) {
    state.loadedReviews = payload
  },
  createPost(state, payload) {
    state.loadedPosts.push(payload)
  },
  updatePost(state, payload) {
    const post = state.loadedPosts.find((post) => {
      return post.id === payload.id
    })
    if (payload.title) {
      post.title = payload.title
    }
    if (payload.description) {
      post.description = payload.description
    }
  }
}

export const actions = {
  loadPosts({ commit }) {
    commit('setLoading', true)
    firebase
      .database()
      .ref('posts')
      .once('value')
      .then((data) => {
        const posts = []
        const obj = data.val()
        for (const key in obj) {
          posts.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date,
            location: obj[key].location,
            creatorId: obj[key].creatorId
          })
        }
        commit('setLoadedPosts', posts)
        commit('setLoading', false)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  },
  loadReviews({ commit }) {
    commit('setLoading', true)

    let Ref = fireDb.collection('Reviews')
    let Reviews = []
    let all = Ref.get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())
          Reviews.push(doc.data())
        })
        commit('setLoadedReviews', Reviews)
        commit('setLoading', false)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
        commit('setLoading', false)
      })
  },
  createPost({ commit, getters }, payload) {
    const post = {
      title: payload.title,
      location: payload.location,
      description: payload.description
      // creatorId: getters.user.id
    }
    let imageUrl
    let key
    firebase
      .database()
      .ref('posts')
      .push(post)
      .then((data) => {
        key = data.key
        return key
      })
      .then((key) => {
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        return firebase
          .storage()
          .ref('posts/' + key + ext)
          .put(payload.image)
      })
      .then((fileData) => {
        fileData.ref.getDownloadURL().then(function(downloadURL) {
          imageUrl = downloadURL
          commit('createPost', {
            ...post,
            image: imageUrl,
            id: key
          })
          return firebase
            .database()
            .ref('posts')
            .child(key)
            .update({ imageUrl: imageUrl })
        })
      })
      .catch((error) => {
        console.log(error)
        alert(error)
      })
    // Reach out to firebase and store it
  },
  updatePostData({ commit }, payload) {
    commit('setLoading', true)
    const updateObj = {}
    if (payload.title) {
      updateObj.title = payload.title
    }
    if (payload.description) {
      updateObj.description = payload.description
    }
    firebase
      .database()
      .ref('posts')
      .child(payload.id)
      .update(updateObj)
      .then(() => {
        commit('setLoading', false)
        commit('updatePost', payload)
      })
      .catch((error) => {
        console.log(error)
        commit('setLoading', false)
      })
  },
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
