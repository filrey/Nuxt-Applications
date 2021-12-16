<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center class="mt-4 pt-2">
      <v-layout row wrap class="mt-4 pt-2">
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnailImage="post.thumbnailUrl"
          :id="post.id"
        />
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import PostPreview from "../components/PostPreview";
import StoryblokClient from "storyblok-js-client";
const token = "iyPj3vEKmPladyz3zeqKuwtt";
let storyapi = new StoryblokClient({
  accessToken: token
});

export default {
  metaInfo: {
    title: "Blog",
    titleTemplate: "%s ← Filiberto Reyes, Web Developer",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "Filiberto Reyes's Blog"
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
        content: "Filiberto Reyes's Blog"
      }
    ]
  },
  data() {
    return {
      posts: []
    };
  },

  created() {
    window.storyblok.init({
      accessToken: token
    });
    window.storyblok.on("change", () => {
      this.getStory("home", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("home", "draft");
      } else {
        this.getStory("home", "published");
      }
    });
  },

  methods: {
    getStory(version) {
      storyapi
        .get("cdn/stories", {
          version: "draft",
          starts_with: "blog/"
        })
        .then(res => {
          this.posts = res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail
            };
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
    PostPreview
  }
};
</script>

<style scoped></style>
