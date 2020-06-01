<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/Randomized-Pattern.svg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="Hello, my name is Filiberto!" />

          <base-body>
            <p>
              I am a software developer specializing in web development.
            </p>

            <p>
              I'm remotely available. If you want to get in touch about a
              project collaboration feel free to shoot me an email at
              filibertoreyes55@gmail.com Thanks for visiting!
            </p>
          </base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <v-btn color="green" to="/projects" target="blank">
              <v-icon class="mr-1">mdi-view-quilt</v-icon>
              Projects
            </v-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">|</span>

            <v-btn
              color="red"
              href="https://drive.google.com/open?id=1sZ9xtxoL7zoTen-CdcelTIt9nf2VaYHw"
              target="blank"
            >
              <v-icon class="mr-1">mdi-file-document</v-icon>
              Contact
            </v-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">|</span>

            <v-btn
              color="black"
              href="https://drive.google.com/open?id=1sZ9xtxoL7zoTen-CdcelTIt9nf2VaYHw"
              target="blank"
            >
              <v-icon class="mr-1">mdi-file-document</v-icon>
              Resume
            </v-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: true }
  },

  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    }
  }
};
</script>
