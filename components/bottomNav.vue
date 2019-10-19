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
    <speed-dial></speed-dial>
    <!-- <v-bottom-navigation v-else v-model="bottomNav" class="pa-1" fixed>
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
    </v-bottom-navigation> -->
  </div>
</template>
<script>
import speedDial from '~/components/speedDial.vue'
/* eslint-disable */
export default {
  name: 'bottomNav',
  components: {
    speedDial
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
