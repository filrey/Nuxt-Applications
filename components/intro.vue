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
            Check out some of the work I have done under the projects section.
            My resume
            <a
              href="https://drive.google.com/open?id=1uNQouPHsOXyAUWccbwkQ1uqNzBRwlB3t"
              target="blank"
              >View</a
            >
          </p>
          <p>
            Remotely available from Los Angeles. If you want to get in touch
            about a project collaboration feel free to shoot me an email at
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
            color="primary"
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
          <v-btn
            color="primary"
            href="https://github.com/filrey"
            target="blank"
          >
            <font-awesome-icon
              class="mr-1"
              :icon="['fab', 'github-alt']"
              size="lg"
            />
            Github
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
