<template>
  <div>
    <v-flex>
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="headline">
          Hello, my name is Filiberto!
        </v-card-title>
        <v-card-text>
          <p>
            I am a software developer specializing in web development.
          </p>
          <p>
            Check out some of the work I have done under the portfolio section.
            My resume
            <a
              href="./assets/pdf/Filiberto Reyes Resume V5.pdf"
              download="FilibertoReyesResume.pdf"
              >Download</a
            >
          </p>

          <p>
            Remotely available from Los Angeles. If you want to get in touch
            about a project collaboration feel free to shoot me an email at
            filibertoreyes55@gmail.com
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Filiberto</small></em>
          </div>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  data() {
    return {}
  }
}
</script>
