<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      <v-tabs>
        <v-tab v-for="link in links" :key="link.id" :to="link.to">
          <v-icon>{{ link.icon }}</v-icon
          >{{ link.title }}</v-tab
        >
      </v-tabs>
    </v-snackbar>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'bottomNav',
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
          icon: 'mdi-email',
          title: 'Contact',
          to: '/contact'
        },
        {
          icon: 'mdi-file-document-box-outline',
          title: 'Resume',
          to: '/contact'
        }
      ]
    }
  }
}
</script>