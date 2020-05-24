<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />
    <v-row>
      <v-col cols="6">
        <base-text-field v-model="name" label="Name" required />
      </v-col>
      <v-col cols="6">
        <base-text-field v-model="email" label="Email" required />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <base-text-field v-model="phone" label="Phone" />
      </v-col>
      <v-col cols="6">
        <base-text-field v-model="subject" label="Subject" />
      </v-col>
    </v-row>

    <base-textarea
      class="mb-1"
      v-model="description"
      label="Describe your project to us we're happy to help!"
    />

    <v-select
      class="mb-6"
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="How did you hear about us?"
      required
    ></v-select>

    <base-btn
      @click="writeToFirestore"
      :color="!theme.isDark ? 'accent' : 'white'"
      outlined
      target="_blank"
    >
      Send Request
    </base-btn>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js';

export default {
  name: 'BaseContactForm',

  // Injected from the Vuetify Themeable mixin
  inject: ['theme'],

  data() {
    return {
      writeSuccessful: false,
      name: '',
      email: '',
      phone: '',
      subject: '',
      select: '',
      description: '',
      date: this.returnDate(),
      items: ['Google Search', 'Yelp', 'Recommendation', 'Thumbtack', 'Other']
    };
  },

  props: {
    subtitle: String,
    title: {
      type: String,
      default: 'MAIL US YOUR MESSAGE'
    }
  },

  methods: {
    writeToFirestore() {
      const document = {
        message: {
          subject: this.subject + ': New quote request from ' + this.name + '.',
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
            '<p><span><strong>How did you hear about us?</strong>: ' +
            this.select +
            '</span></p>' +
            '<p><span><strong>Job description</strong>: ' +
            this.description +
            '</span></p>'
        },
        // directs all quote requests to the email below
        to: 'javierlopezfredy199@gmail.com'
      };

      fireDb
        .collection('mail')
        .add(document)
        .then(function(docRef) {
          // console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          this.$snotify.error(error.message);
        });

      this.writeSuccessful = true;
    },
    returnDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;

      return today;
    }
  }
};
</script>
