<template>
  <section class="container">
    <div>
      <!-- Contact Us -->
      <h2>
        Write a Review.
      </h2>
      <div>
        <!-- <button :disabled="writeSuccessful" @click="writeToFirestore"> -->
        <span v-if="!writeSuccessful">Write now</span>
        <span v-else>Successful!</span>
        <v-form>
          <v-text-field
            v-model="name"
            label="Name"
            name="name"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="review"
            label="Review"
            name="review"
            type="text"
          ></v-text-field>
          <v-rating v-model="rating" half-increments></v-rating>
        </v-form>
        <!-- </button> -->
        <v-btn @click="writeToFirestore">
          Send Review
        </v-btn>
        <!-- <v-btn outlined fab color="#4285F4" @click="googleSignIn"
          ><v-icon>fab fa-google</v-icon></v-btn
        > -->
      </div>
    </div>
  </section>
</template>
<script>
import firebase from 'firebase'
import { fireDb } from '~/plugins/firebase.js'
export default {
  name: 'ContactUs',
  data() {
    return {
      writeSuccessful: false,
      name: '',
      review: '',
      date: this.returnDate(),
      rating: ''
    }
  },
  methods: {
    writeToFirestore() {
      const document = {
        name: this.name,
        review: this.review,
        date: this.date,
        rating: this.rating
      }
      fireDb
        .collection('Reviews')
        .add(document)
        .then(function(docRef) {
          // console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          this.$snotify.error(error.message)
        })

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
          // console.log(e)
        })
    },
    returnDate() {
      let today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      today = mm + '/' + dd + '/' + yyyy

      return today
    },
    onCreatePost() {
      if (!this.image) {
        return
      }
      const postData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description
      }
      this.$store.dispatch('uploadImage', postData)
      this.$router.push('/')
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      const filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
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
