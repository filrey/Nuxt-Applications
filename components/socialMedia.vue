<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      <v-tabs>
        <v-tab v-for="link in links" :key="link.id">
          <v-icon>{{ link.icon }}</v-icon
          >{{ link.title }}</v-tab
        >
      </v-tabs>
      <!-- <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn> -->
    </v-snackbar>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'socialMedia',
  data() {
    return {
      snackbar: true,
      timeout: 0,
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
          icon: 'mdi-chart-bubble',
          title: 'Contact Me',
          to: '/contact'
        }
      ]
    }
  }
}
</script>