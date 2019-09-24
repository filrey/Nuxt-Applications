<template>
  <section class="container">
    <div>
      Contact Us
      <!-- <h2>
        Write to Firestore.
      </h2>
      <div>
        <button :disabled="writeSuccessful" @click="writeToFirestore">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
        <v-btn outlined fab color="#4285F4" @click="googleSignIn"
          ><v-icon>fab fa-google</v-icon></v-btn
        >
      </div> -->
    </div>
  </section>
</template>
<script>
import firebase from 'firebase'
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('test').doc('test')
      const document = {
        text: 'This is a test message.'
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    googleSignIn() {
      this.provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then((result) => {
          // store the user
          this.$store.commit('saveUser', result)
          // this.$store.dispatch('signUserIn', result)
          this.$router.push('/')
        })
        .catch((e) => {
          this.$snotify.error(e.message)
          console.log(e)
        })
    }
  }
}
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
