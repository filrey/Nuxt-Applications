<template>
  <v-flex>
    <v-carousel
      cycle
      progress
      height="350"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="primary" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3 ma-2">{{ slide }}</div>
            <v-card>
              <v-img
                max-width="400"
                max-height="250"
                :src="slideImg[i]"
              ></v-img>
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card class="mx-auto" flat>
      <v-row justify="center">
        <v-col :lg="4" :sm="12"
          >Col 1
          <div id="firstCol"></div>
        </v-col>
        <v-col :lg="4" :sm="12">
          <div id="middleCol">
            <!-- Text Content -->
            <div id="Text Content">
              <v-card-title class="headline">24 Hr Service</v-card-title>
              <v-card-text>
                <p>
                  With a wide range of services that suit your every need and
                  requirement, We at 24Hr Service have the know-how and the
                  expertise to get the job done! Let us know how we can help,and
                  we will guarantee your experience with our professionals is
                  enjoyable and satisfactory. We love to hear from our
                  costumers, so feel free to contact us with your feedback!
                </p>
              </v-card-text>
              <v-card-title class="headline">Based In Socal</v-card-title>
              <v-card-text>
                <p>
                  Skip your search for house painters near you; contact the
                  professional and industry experts . We serve the communities
                  in Los Angeles, Thousand Oaks, Ventura, and neighboring cities
                  in California. Contact us today to have the experts handle
                  your exterior painting in summer.
                </p>
              </v-card-text>
              <v-card-title class="headline"
                >Improve your home value</v-card-title
              >
              <v-card-text>
                <p>
                  Are you putting your home on the market this year? Tick curb
                  appeal off your list as soon as you get a new paint job! Your
                  home will look great and it’ll be in top condition!
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
              </v-card-actions>
            </div>
            <!-- Gallery Content -->
            <v-container grid-list-sm fluid>
              <v-layout row wrap>
                <v-flex v-for="n in 9" :key="n" xs4 d-flex>
                  <v-card class="d-flex">
                    <v-img
                      :src="require(`@/assets/gallery/pic (${n}).jpg`)"
                      :max-height="225"
                    >
                      <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-col>
        <v-col :lg="4" :sm="12">
          <div id="lastCol" class="text-center">
            <v-card-title class="headline"
              >See what our customers have to say</v-card-title
            >
            <!-- Reviews -->
            <div v-for="review in reviews" :key="review.id">
              <v-avatar class="mt-1" size="48">
                <img :src="review.photo" alt=""
              /></v-avatar>
              <h4>{{ review.name }}</h4>
              <h5>{{ review.date }}</h5>
              <v-card-text>
                <p>
                  {{ review.text }}
                </p>
              </v-card-text>
              <v-rating
                half-increments
                readonly
                :value="review.rating"
                size="35"
                color="primary"
              ></v-rating>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-parallax :src="require('@/assets/wall-unfinshed.jpg')" height="400">
      <v-overlay absolute>
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            We always stand behind our work, with customer satisfaction being
            our #1 priority.
          </div>
          <!-- <v-btn class="blue lighten-2 mt-5" dark large href=""
          >Create an appointment</v-btn
        > -->
        </v-layout>
      </v-overlay>
    </v-parallax>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        'Welcome to 24 HR Painting Services!',
        'Professional painters with over 10 years of experience',
        'Exterior and Interior painting',
        'Hardwood floor refinishing',
        'Customer satisfaction is our top priority'
      ],
      slideImg: [
        require('@/assets/24trailer.jpg'),
        require('@/assets/gallery/pic (5).jpg'),
        require('@/assets/gallery/pic (4).jpg'),
        require('@/assets/gallery/pic (11).jpg'),
        require('@/assets/gallery/pic (12).jpg')
      ],
      reviews: [
        {
          name: 'Filiberto Reyes',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text: 'They were pretty good 5 stars'
        },
        {
          name: 'Filiberto Reyes',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text: 'They were pretty good 5 stars'
        },
        {
          name: 'Filiberto Reyes',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text: 'They were pretty good 5 stars'
        },
        {
          name: 'Filiberto Reyes',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text: 'They were pretty good 5 stars'
        },
        {
          name: 'Filiberto Reyes',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text: 'They were pretty good 5 stars'
        }
      ]
    }
  },
  created() {}
}
</script>
