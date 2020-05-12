<template>
  <div>
    <v-card class="mx-auto">
      <v-img
        class="white--text align-end"
        aspect-ratio="2"
        elevation="12"
        :src="logo"
      >
      </v-img>

      <v-card-title>
        Hello, my name is Filiberto!
      </v-card-title>

      <v-card-text>
        <p>
          I am a software developer specializing in web development.
        </p>
        <p>
          Check out some of the work I have done under the projects section
          here.
          <v-btn color="green" to="/projects" target="blank">
            <v-icon class="mr-1">mdi-view-quilt</v-icon>
            Projects
          </v-btn>
          <br />
          Or view my resume.
          <v-btn
            color="black"
            href="https://drive.google.com/open?id=1sZ9xtxoL7zoTen-CdcelTIt9nf2VaYHw"
            target="blank"
          >
            <v-icon class="mr-1">mdi-file-document</v-icon>
            Resume
          </v-btn>
        </p>
        <p>
          I'm remotely available. If you want to get in touch about a project
          collaboration feel free to shoot me an email at
          filibertoreyes55@gmail.com
        </p>

        <p>
          Thanks for visiting!
        </p>
        <div class="text-xs-right">
          <em><small>&mdash; Filiberto</small></em>
        </div>
        <hr class="my-3" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="#01ADB5"
          href="https://www.linkedin.com/in/filiberto-reyes/"
          target="blank"
        >
          <font-awesome-icon
            class="mr-1"
            :icon="['fab', 'linkedin']"
            size="lg"
          />
          LinkedIn
        </v-btn>
        <v-btn color="#01ADB5" href="https://github.com/filrey" target="blank">
          <font-awesome-icon
            class="mr-1"
            :icon="['fab', 'github-alt']"
            size="lg"
          />
          Github
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'SplashV2',
  data() {
    return {
      logo: require('@/assets/png/logo.png')
    }
  }
}
</script>
