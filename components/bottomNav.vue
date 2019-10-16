<template>
  <div>
    <v-snackbar v-if="!isMobile" v-model="snackbar" :timeout="timeout">
      <v-tabs>
        <v-tab v-for="link in links" :key="link.id" :to="link.to">
          <v-icon>{{ link.icon }}</v-icon
          >{{ link.title }}</v-tab
        >
        <v-tab>
          <a
            class="resumeLink"
            href="https://drive.google.com/open?id=1uNQouPHsOXyAUWccbwkQ1uqNzBRwlB3t"
            target="blank"
            ><v-icon>mdi-file-document-box-outline</v-icon> Resume</a
          ></v-tab
        >
      </v-tabs>
    </v-snackbar>

    <v-bottom-navigation class="pa-1" v-else v-model="bottomNav" fixed>
      <v-btn
        v-for="link in links"
        :key="link.id"
        :to="link.to"
        :value="link.title"
      >
        <span>{{ link.title }}</span>
        <v-icon>{{ link.icon }}</v-icon>
        <Github-Icon />
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
import { mdiGithubFace } from '@mdi/js'
/* eslint-disable */
export default {
  name: 'bottomNav',
  render() {
    return (
      <Github-Icon
        path={mdiGithubFace}
        title="Github"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="black"
        spin
      />
    )
  },
  data() {
    return {
      bottomNav: 'Welcome',
      snackbar: true,
      timeout: 0,
      isMobile: false,
      links: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>

<style lang="css">
.resumeLink {
  color: inherit !important;
  text-decoration: none;
}
</style>
