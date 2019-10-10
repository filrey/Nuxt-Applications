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

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
      ]
    }
  }
}
</script>
