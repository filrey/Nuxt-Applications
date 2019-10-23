<template>
  <v-row>
    <v-col flex="12">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        absolute
        fixed
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab
            @click="activate()"
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-view-quilt</v-icon>
          </v-btn>
        </template>

        <v-chip
          v-for="link in links"
          :key="link.id"
          :color="link.color"
          :to="link.to"
          :href="link.resumeUrl"
          :input-value="show"
          filter
          :filter-icon="link.icon"
          target="blank"
          class="mb-3 mr-10"
        >
          {{ link.title }}</v-chip
        >
      </v-speed-dial>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SpeedDial',
  data() {
    return {
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      show: false,
      transition: 'slide-y-reverse-transition',
      links: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          color: 'green',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          color: 'primary',
          to: '/projects'
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          color: 'red',
          to: '/contact'
        },
        {
          icon: 'mdi-file-document-box-outline',
          title: 'Resume',
          color: 'black',
          resumeUrl:
            'https://drive.google.com/open?id=1uNQouPHsOXyAUWccbwkQ1uqNzBRwlB3t'
        }
      ]
    }
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case 'one':
          return { class: 'purple', icon: 'account_circle' }
        case 'two':
          return { class: 'red', icon: 'edit' }
        case 'three':
          return { class: 'green', icon: 'keyboard_arrow_up' }
        default:
          return {}
      }
    }
  },
  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    }
  },
  methods: {
    activate() {
      this.show = false
      setTimeout(() => (this.show = true), 50)
    }
  }
}
</script>

<style lang="css">
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
