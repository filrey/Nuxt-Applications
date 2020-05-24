<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero2.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .7), rgba(5, 11, 31, .3)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <!-- <base-img
            :src="require('@/assets/logo.png')"
            class="mr-3 hidden-xs-only"
            contain
            max-width="500"
            width="100%"
          /> -->
          <base-heading title="WE ARE 24 HR PAINTING SERVICES" />

          <base-body>
            We are professional painters with over 10 years of experience on a
            wide variety of projects and surfaces which makes us capable of any
            type of job. We have experience in painting outdoor and indoor
            surfaces made of all materials, such as wood, concrete, or brick.
            Proficient at performing any repairs: filling holes or replacing
            bare wood; knowledgeable of different types and shades of paint to
            use for specific projects. We are efficient at what we do and we are
            confident we can deliver on your dream project.
          </base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <nuxt-link to="/contact">
              <base-img
                :src="require('@/assets/QuoteBtn.png')"
                contain
                max-width="290"
                width="100%"
              />
            </nuxt-link>

            <!-- <base-btn>
              Request A Quote
            </base-btn> -->

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              href="#about-our-product"
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Learn more
            </base-btn>

            <!-- <base-img
              :src="require('@/assets/customer satisfaction.png')"
              class="mr-3 mt-7 hidden-xs-only"
              contain
              max-width="500"
              width="100%"
            /> -->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',

  provide: {
    theme: { isDark: true }
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh';

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    }
  }
};
</script>
