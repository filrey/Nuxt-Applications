<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Web</span>
      <span class="red--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{
                project.title
              }}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <v-chip color="red" text-color="white">{{
              project.tech.tech1
            }}</v-chip>
            <v-chip color="red" text-color="white">{{
              project.tech.tech2
            }}</v-chip>
            <v-chip color="red" text-color="white">{{
              project.tech.tech3
            }}</v-chip>
            <v-chip color="red" text-color="white">{{
              project.tech.tech4
            }}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              large
              dark
              color="red"
              :href="project.git"
              target="_blank"
            >
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn
              large
              flat
              dark
              color="red"
              :href="project.demo"
              target="_blank"
            >
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Web Portfolio",
    titleTemplate: "%s ← Filiberto Reyes, Web Developer",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Filiberto Reyes's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "FilibertoReyes.dev" },
      { property: "og:site_name", content: "FilibertoReyes.dev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://filibertoreyes.dev/" },
      {
        property: "og:image",
        content: "https://i.imgur.com/QjYEm77.png"
      },
      {
        property: "og:description",
        content:
          "Filiberto Reyes's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: "Agile Sprint Board",
          git: "https://github.com/filrey/Nuxt-Sprint-Board",
          demo: "https://agile-sprint-board.web.app/",
          tech: {
            tech1: "Vue",
            tech2: "Nuxt",
            tech3: "Firebase",
            tech4: "Vuetify"
          },
          poster: "https://i.imgur.com/AKHrhvS.png"
        },
        {
          dialog: false,
          title: "LuvApp",
          git: "https://github.com/filrey/LuvApp",
          demo: "https://luvapp.azurewebsites.net/",
          tech: {
            tech1: "C#",
            tech2: "ASP.Net",
            tech3: "Typescript",
            tech4: "Angular"
          },
          poster: "https://i.imgur.com/UsC7I3Q.jpg"
        },
        {
          dialog: false,
          title: "24HrPaintingServices Business Site",
          git: "https://github.com/filrey/Nuxt-Applications/tree/24hrpainting",
          demo: "https://24hrpaintingservices.netlify.app/",
          tech: {
            tech1: "VUE",
            tech2: "CSS",
            tech3: "HTML",
            tech4: "JavaScript"
          },
          poster: "https://i.imgur.com/UvSaDBP.jpg"
        },
        {
          dialog: false,
          title: "CSUN Scholarship (HELIX)",
          git: "https://github.com/filrey/SnowBall-Project",
          demo: "https://www.csun.edu/faculty/scholarship",
          tech: {
            tech1: "Laravel",
            tech2: "PHP",
            tech3: "HTML",
            tech4: "JavaScript"
          },
          poster: "https://i.imgur.com/UgYD187.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
