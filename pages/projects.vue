<template>
  <div>
    <v-container class="pa-3" fluid>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          :lg="4"
          :sm="12"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            <v-card-actions>
              <div class="flex-grow-1"></div>

              <v-tooltip v-if="card.code" top>
                <template v-slot:activator="{ on }">
                  <v-btn dark icon :href="card.code" target="blank" v-on="on"
                    ><font-awesome-icon :icon="['fas', 'laptop-code']" size="lg"
                  /></v-btn>
                </template>
                <span>Source Code</span>
              </v-tooltip>

              <v-tooltip v-else top>
                <template v-slot:activator="{ on }">
                  <v-btn dark icon @click="overlay = !overlay" v-on="on"
                    ><font-awesome-icon :icon="['fas', 'laptop-code']" size="lg"
                  /></v-btn>
                </template>
                <span>Source Code</span>
              </v-tooltip>

              <v-tooltip v-if="card.live" top>
                <template v-slot:activator="{ on }">
                  <v-btn dark icon :href="card.live" target="blank" v-on="on"
                    ><font-awesome-icon :icon="['fa', 'globe']" size="lg"
                  /></v-btn>
                </template>
                <span>Live</span>
              </v-tooltip>

              <v-tooltip v-else top>
                <template v-slot:activator="{ on }">
                  <v-btn dark icon @click="overlay = !overlay" v-on="on"
                    ><font-awesome-icon :icon="['fa', 'globe']" size="lg"
                  /></v-btn>
                </template>
                <span>Live</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div @click="overlay = !overlay">
        <v-overlay :value="overlay">
          <v-btn color="primary" class="mt-12">
            Coming Soon!
          </v-btn>
        </v-overlay>
      </div>
    </v-container>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  components: {},
  name: 'Projects',
  data() {
    return {
      cards: [
        {
          title: '24HrPaintingServices Business Site',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          code: 'https://github.com/filrey/Nuxt-Applications/tree/24hrpainting',
          live: 'https://24hrpaintingservices.com/',
          lg: 6,
          sm: 12
        },
        {
          title: 'Instant Insanity Solver',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          lg: 6,
          sm: 12
        },
        {
          title: 'Unity Tetris',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          lg: 6,
          sm: 12
        },
        {
          title: '24HrPaintingServices',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          lg: 6,
          sm: 12
        },
        {
          title: 'Instant Insanity Solver',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          lg: 6,
          sm: 12
        },
        {
          title: 'Unity Tetris',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          lg: 6,
          sm: 12
        }
      ],
      overlay: false
    }
  }
}
</script>
