<template>
  <v-flex xs12 sm12 md10 offset-1>
    <div class="text-center"></div>
    <v-parallax :src="require('@/assets/hero.jpeg')" height="400">
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
      <v-card-title class="headline">24 Hr Service</v-card-title>
      <v-card-text>
        <p>
          With a wide range of services that suit your every need and
          requirement, We at 24Hr Service have the know-how and the expertise to
          get the job done! Let us know how we can help,and we will guarantee
          your experience with our professionals is enjoyable and satisfactory.
          We love to hear from our costumers, so feel free to contact us with
          your feedback!
        </p>
      </v-card-text>
      <v-card-title class="headline">Based In Socal</v-card-title>
      <v-card-text>
        <p>
          Skip your search for house painters near you; contact the professional
          and industry experts . We serve the communities in Los Angeles,
          Thousand Oaks, Ventura, and neighboring cities in California. Contact
          us today to have the experts handle your exterior painting in summer.
        </p>
      </v-card-text>
      <v-card-title class="headline">Improve your home value</v-card-title>
      <v-card-text>
        <p>
          Are you putting your home on the market this year? Tick curb appeal
          off your list as soon as you get a new paint job! Your home will look
          great and it’ll be in top condition!
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
      </v-card-actions>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-flex v-for="n in 9" :key="n" xs4 d-flex>
            <v-card class="d-flex">
              <v-img
                :src="require(`@/assets/gallery/pic (${n}).jpg`)"
                :max-height="225"
              >
                <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-layout>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-parallax
        :src="require('@/assets/color-paint-cans-dark.jpg')"
        height="400"
      >
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            We always stand behind our work, with customer satisfaction being
            our #1 priority.
          </div>
          <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes"
            >Create an appointment</v-btn
          >
        </v-layout>
      </v-parallax>
    </v-card>
  </v-flex>
</template>

<script>
export default {}
</script>
