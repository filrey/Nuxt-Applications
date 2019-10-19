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
            @click="activate()"
            v-model="fab"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-apps</v-icon>
          </v-btn>
        </template>

        <v-tooltip
          v-for="link in links"
          :key="link.id"
          v-model="show"
          :open-on-hover="false"
          left
        >
          <template v-slot:activator="{ on }">
            <v-btn :color="link.color" :to="link.to" fab small dark v-on="on"
              ><v-icon>{{ link.icon }}</v-icon></v-btn
            >
          </template>
          <span>{{ link.title }}</span>
        </v-tooltip>
      </v-speed-dial>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'speedDial',
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
          color: 'indigo',
          to: '/projects'
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          color: 'red',
          to: '/contact'
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
  methods: {
    activate() {
      this.show = false
      setTimeout(() => (this.show = true), 500)
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
