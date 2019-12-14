<template>
  <section class="container">
    <div>
      <!-- Request a quote -->
      <h2>
        Request a quote
      </h2>
      <div>
        <span v-if="writeSuccessful">Your message has been sent!</span>
        <v-form>
          <v-text-field
            v-model="name"
            label="Name"
            name="name"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            name="email"
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            label="Phone"
            name="phone"
            type="phone"
          ></v-text-field>
          <v-text-field
            v-model="adress"
            label="Adress"
            name="adress"
            type="text"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="How did you hear about us?"
            required
          ></v-select>
          <v-text-field
            v-model="description"
            label="Description"
            name="description"
            type="text"
          ></v-text-field>
        </v-form>
        <!-- </button> -->
        <v-btn @click="writeToFirestore">
          Send Quote
        </v-btn>
      </div>
    </div>
  </section>
</template>
<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  name: 'QuoteRequest',
  data() {
    return {
      writeSuccessful: false,
      name: '',
      email: '',
      phone: '',
      adress: '',
      select: '',
      description: '',
      date: this.returnDate(),
      items: ['Google Search', 'Yelp', 'Recommendation', 'Thumbtack', 'Other']
    }
  },
  methods: {
    writeToFirestore() {
      const document = {
        message: {
          subject: 'New quote request from ' + this.name + '.',
          html:
            '<h3><span>New quote request from ' +
            this.name +
            '</span></h3>' +
            '<p><span><strong>Name</strong>: ' +
            this.name +
            ',</span></p>' +
            '<p><span><strong>Email</strong>: ' +
            this.email +
            ',</span></p>' +
            '<p><span><strong>Phone</strong>: ' +
            this.phone +
            ',</span></p>' +
            '<p><span><strong>Address</strong>: ' +
            this.adress +
            ',</span></p>' +
            '<p><span><strong>How did you hear about us?</strong>: ' +
            this.select +
            '</span></p>' +
            '<p><span><strong>Job description</strong>: ' +
            this.description +
            '</span></p>'
        },
        // directs all quote requests to the email below
        to: 'filibertoreyes55@gmail.com'
      }

      fireDb
        .collection('mail')
        .add(document)
        .then(function(docRef) {
          // console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          this.$snotify.error(error.message)
        })

      this.writeSuccessful = true
    },
    returnDate() {
      let today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0')
      const yyyy = today.getFullYear()
      today = mm + '/' + dd + '/' + yyyy

      return today
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
