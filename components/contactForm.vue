<template>
  <div class="justify-space-around">
    <v-parallax
      height="auto"
      dark
      src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <v-row align="center" justify="center">
        <v-col class="text-left" cols="12">
          <section>
            <div>
              <div>
                <span v-if="writeSuccessful">Your message has been sent!</span>
                <v-row>
                  <v-col :lg="6" :sm="12">
                    <!-- Text Content -->

                    <div id="Text Content" class="black--text">
                      <v-card-title class="headline"
                        >24 Hr Service</v-card-title
                      >
                      <v-card-text>
                        <p>
                          With a wide range of services that suit your every
                          need and requirement, We at 24Hr Service have the
                          know-how and the expertise to get the job done! Let us
                          know how we can help,and we will guarantee your
                          experience with our professionals is enjoyable and
                          satisfactory. We love to hear from our costumers, so
                          feel free to contact us with your feedback!
                        </p>
                      </v-card-text>
                      <v-card-title class="headline"
                        >Based In Socal</v-card-title
                      >
                      <v-card-text>
                        <p>
                          Skip your search for house painters near you; contact
                          the professional and industry experts . We serve the
                          communities in Los Angeles, Thousand Oaks, Ventura,
                          and neighboring cities in California. Contact us today
                          to have the experts handle your exterior painting in
                          summer.
                        </p>
                      </v-card-text>
                      <v-card-title class="headline"
                        >Improve your home value</v-card-title
                      >
                      <v-card-text>
                        <p>
                          Are you putting your home on the market this year?
                          Tick curb appeal off your list as soon as you get a
                          new paint job! Your home will look great and it’ll be
                          in top condition!
                        </p>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                      </v-card-actions>
                    </div>
                  </v-col>
                  <v-col :lg="6" :sm="12">
                    <v-card class="pl-4 pr-4">
                      <!-- Request a quote -->
                      <h2>
                        Request your free quote
                      </h2>
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
                        <v-textarea
                          v-model="description"
                          label="Describe your project here"
                          name="description"
                          type="text"
                        ></v-textarea>
                      </v-form>
                    </v-card>
                    <!-- </button> -->
                    <v-btn
                      class="mt-4"
                      color="red"
                      dark
                      @click="writeToFirestore"
                    >
                      Request a quote
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </div>
          </section>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
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
