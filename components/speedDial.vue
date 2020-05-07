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
          <v-fab-transition>
            <v-btn
              :key="currIcon"
              :color="currColor"
              dark
              fab
              @click="activate()"
            >
              <v-icon>{{ currIcon }}</v-icon>
            </v-btn>
          </v-fab-transition>
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
          @click=";(currColor = link.color), (currIcon = link.icon)"
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
      currColor: 'blue',
      currIcon: 'mdi-home',
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
      transition: 'slide-x-reverse-transition',
      links: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          color: 'blue',
          to: '/'
        },
        {
          icon: 'mdi-view-quilt',
          title: 'Projects',
          color: 'green',
          to: '/projects'
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          color: 'red',
          to: '/contact'
        },
        {
          icon: 'mdi-file-document',
          title: 'Resume',
          color: 'black',
          resumeUrl:
            'https://drive.google.com/open?id=1TZvGAzwjQs67gkohQ-FqJ88pBPKpvZRa'
        }
      ]
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
