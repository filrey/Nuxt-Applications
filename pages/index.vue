<template>
  <v-flex xs12 sm12 md12>
    <div class="text-center">
      <!-- <logo />
        <vuetify-logo />-->
    </div>
    <v-parallax :src="require('@/assets/banner.jpg')" height="400">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-1 text-xs-center">
          Painting services based in Panorama City
        </h1>
        <div class="subheading mb-3 text-xs-center">Open 24 Hours</div>
        <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes"
          >Get Started</v-btn
        >
      </v-layout>
    </v-parallax>
    <v-card>
      <v-card-title class="headline"
        >Welcome to the Vuetify + Nuxt.js template</v-card-title
      >
      <v-card-text>
        <p>
          Vuetify is a progressive Material Design component framework for
          Vue.js. It was designed to empower developers to create amazing
          applications.
        </p>
        <p>
          For more information on Vuetify, check out the
          <a href="https://vuetifyjs.com" target="_blank">documentation</a>.
        </p>
        <p>
          If you have questions, please join the official
          <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat"
            >discord</a
          >.
        </p>
        <p>
          Find a bug? Report it on the github
          <a
            href="https://github.com/vuetifyjs/vuetify/issues"
            target="_blank"
            title="contribute"
            >issue board</a
          >.
        </p>
        <p>
          Thank you for developing with Vuetify and I look forward to bringing
          more exciting features in the future.
        </p>
        <div class="text-xs-right">
          <em>
            <small>&mdash; John Leider</small>
          </em>
        </div>
        <hr class="my-3" />
        <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
        <br />
        <a href="https://github.com/nuxt/nuxt.js" target="_blank"
          >Nuxt GitHub</a
        >
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  }
}
</script>
