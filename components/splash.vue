<template>
  <div class="home">
    <v-container fluid fill-height>
      <v-layout align-center justify-left v-bind="binding">
        <v-row>
          <v-col v-if="!isMobile" :cols="6">
            <v-flex>
              <v-card class="cardSlide">
                <v-sheet class="elevation-12">
                  <v-img :src="imgAsset[0]"></v-img>
                </v-sheet>
              </v-card>
            </v-flex>
          </v-col>
          <v-col :cols="12" v-else>
            <v-img
              :src="imgAsset[1]"
              class="grey lighten-2"
              max-width="300"
            ></v-img
          ></v-col>
          <v-col v-if="!isMobile" :cols="6">
            <intro></intro>
          </v-col>

          <v-col class="max-width-323" v-else :cols="12">
            <intro></intro>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    <!-- Current Screen: {{ this.calculateScreen() }} -->
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import intro from '~/components/intro.vue'
export default {
  name: 'home',
  components: {
    intro
  },
  data() {
    return {
      links: [
        {
          name: 'Github',
          icon: '../assets/png/bg3.png',
          url: 'https://github.com/filrey'
        },
        {
          name: 'LinkedIn',
          icon: '',
          url: 'www.linkedin.com/in/filiberto-reyes'
        },
        {
          name: 'Resume',
          icon: '',
          url: ''
        },
        {
          name: 'Projects',
          icon: '',
          url: ''
        },
        {
          name: 'Contact',
          icon: 'email',
          url: ''
        }
      ],
      imgAsset: [
        require('@/assets/png/bg3.png'),
        require('@/assets/png/cardmobile.png')
      ],
      isMobile: false
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
  },
  computed: {
    binding() {
      const binding = {}
      if (this.$vuetify.breakpoint.mdAndUp) {
        binding.column = false
      } else {
        binding.column = true
      }
      return binding
    }
  }
}
</script>
<style lang="scss">
.max-width-323 {
  max-width: 323px;
}
.homeCard {
  background-color: #e1e1e1;
  background: url(../assets/png/bg2.png);
  background-size: 1366px 768px;
  width: 100%;
  padding-bottom: 50%;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.cardSlide {
  -webkit-animation: slideIn 1s; /* Safari 4.0 - 8.0 */
  animation: slideIn 1s;
}
.cardSlide_right {
  -webkit-animation: slideIn_right 1s; /* Safari 4.0 - 8.0 */
  animation: slideIn_right 1s;
}

.random_pattern_green {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='50' height='25' viewBox='0 0 50 25'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.1' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='2' height='2' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%23ffffff' stroke-width='0.1'%3E%3Crect fill='%23fafafa' width='1' height='1'/%3E%3Crect fill='%23ffffff' width='1' height='1' x='1' y='1'/%3E%3Crect fill='%23f5f5f5' width='1' height='1' y='1'/%3E%3Crect fill='%23f0f0f0' width='1' height='1' x='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='b' width='5' height='11' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ebebeb'%3E%3Cuse xlink:href='%23s' x='2' y='0'/%3E%3Cuse xlink:href='%23s' x='4' y='1'/%3E%3Cuse xlink:href='%23s' x='1' y='2'/%3E%3Cuse xlink:href='%23s' x='2' y='4'/%3E%3Cuse xlink:href='%23s' x='4' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='8'/%3E%3Cuse xlink:href='%23s' x='3' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='7' height='7' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='3' y='4'/%3E%3Cuse xlink:href='%23s' x='5' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='11' height='5' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ffffff'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='6' y='3'/%3E%3Cuse xlink:href='%23s' x='8' y='2'/%3E%3Cuse xlink:href='%23s' x='3' y='0'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse xlink:href='%23s' x='8' y='3'/%3E%3Cuse xlink:href='%23s' x='4' y='2'/%3E%3Cuse xlink:href='%23s' x='5' y='4'/%3E%3Cuse xlink:href='%23s' x='10' y='0'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='23' patternUnits='userSpaceOnUse'%3E%3Cg fill='%2346bb5e'%3E%3Cuse xlink:href='%23s' x='2' y='5'/%3E%3Cuse xlink:href='%23s' x='23' y='13'/%3E%3Cuse xlink:href='%23s' x='4' y='18'/%3E%3Cuse xlink:href='%23s' x='35' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='61' height='31' patternUnits='userSpaceOnUse'%3E%3Cg fill='%2346bb5e'%3E%3Cuse xlink:href='%23s' x='16' y='0'/%3E%3Cuse xlink:href='%23s' x='13' y='22'/%3E%3Cuse xlink:href='%23s' x='44' y='15'/%3E%3Cuse xlink:href='%23s' x='12' y='11'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='50' height='25'/%3E%3Crect fill='url(%23b)' width='50' height='25'/%3E%3Crect fill='url(%23c)' width='50' height='25'/%3E%3Crect fill='url(%23d)' width='50' height='25'/%3E%3Crect fill='url(%23e)' width='50' height='25'/%3E%3Crect fill='url(%23f)' width='50' height='25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  /* background by SVGBackgrounds.com */
}
@keyframes slideIn {
  from {
    left: -1000px;
  }
  to {
    left: 0px;
  }
}
@keyframes slideIn_right {
  from {
    right: -1000px;
  }
  to {
    right: 0px;
  }
}
</style>
