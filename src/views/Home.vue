<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br />

    <vue-typer class="headline" :repeat="0" text="Filiberto Reyes"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br />
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="red--text">Me</span>
            </h3>
            <div>
              <p>
                Hello, my name is Filiberto! I'm a front-end developer who is
                passionate about
                <span class="devGreen font-weight-bold">VUE</span>, building
                great user experiences, learning as much as I can, and
                connection with the people and places around me. When I'm not
                coding I like to dance and explore interesting places. Feel free
                to check out some of the projects I've worked on under the
                <span class="red--text">Portofolio</span> section. Or reach out
                to me directly via the
                <span class="devGreen font-weight-bold">Contact</span> section.
              </p>
              <em><small>Happy Coding - Filiberto</small></em>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <div class="mx-auto">
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              dark
              outline
              color="red"
              :href="icon.href"
              target="_blank"
            >
              <v-icon class="mr-2" dark>{{ icon.icon }}</v-icon>
              {{ icon.title }}
            </v-btn>
          </div>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            dark
            outline
            color="red"
            :href="icon.href"
            target="_blank"
          >
            <v-icon class="mr-2" dark>{{ icon.icon }}</v-icon> {{ icon.title }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Filiberto Reyes, Web Developer",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Filiberto Reyes's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "FilibertoReyes.dev" },
      { property: "og:site_name", content: "FilibertoReyes.dev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://filibertoreyes.dev/" },
      {
        property: "og:image",
        content: "https://i.imgur.com/QjYEm77.png"
      },
      { property: "og:description", content: "Filiberto Reyes's Portfolio" }
    ]
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        {
          href: "https://github.com/filrey",
          icon: "fab fa-github",
          title: "Github"
        },
        {
          href: "https://www.linkedin.com/in/filiberto-reyes/",
          icon: "fab fa-linkedin-in",
          title: "LinkedIn"
        },
        {
          href:
            "https://drive.google.com/open?id=1sZ9xtxoL7zoTen-CdcelTIt9nf2VaYHw",
          icon: " fas fa-file-download",
          title: "Resume"
        }
        // {
        //   href: "",
        //   icon: "fab fa-facebook-f"
        // },
        // {
        //   href: "",
        //   icon: "fab fa-stack-overflow"
        // },
        // { href: "", icon: "fab fa-twitter" },
      ],
      text1: ["Front-End Developer", "Web Developer", "Web Designer"],
      leftImage: "https://i.imgur.com/0jzAFdb.png",
      rightImage: "https://i.imgur.com/Zleef7g.png",
      leftImage2: "https://i.imgur.com/QjYEm77.png",
      rightImage2: "https://i.imgur.com/1fUZypi.png",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: red;
}
.vue-typer .custom.char.selected {
  color: #01adb5;
}

.devGreen {
  color: #01adb5;
}
.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: red;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>
