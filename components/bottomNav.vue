<template>
  <div>
    <speed-dial-desktop v-if="!isMobile"></speed-dial-desktop>
    <speed-dial v-else></speed-dial>
  </div>
</template>
<script>
import speedDial from '~/components/speedDial.vue'
import speedDialDesktop from '~/components/speedDialDesktop.vue'
/* eslint-disable */
export default {
  name: 'bottomNav',
  components: {
    speedDial,
    speedDialDesktop
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
