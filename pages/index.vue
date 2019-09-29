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
              <!-- <v-img
                max-width="400"
                max-height="250"
                :src="slideImg[i]"
              ></v-img> -->
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card class="mx-auto" flat>
      <v-row justify="center">
        <v-col :lg="4" :sm="12">
          <div id="firstCol">
            <v-card
              v-for="post in posts"
              :key="post.id"
              max-height="250"
              class="ma-2"
              color="grey lighten-3"
            >
              <!-- <v-img :src="post.imageUrl"></v-img> -->
              <v-list-item three-line>
                <v-list-item-avatar size="125" tile>
                  <v-img :src="post.imageUrl"></v-img>
                </v-list-item-avatar>

                <v-list-item-content class="align-self-start">
                  <v-list-item-title class="headline mb-2">{{
                    post.title
                  }}</v-list-item-title>

                  <v-list-item-subtitle>{{
                    post.description
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
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
                <!-- <img :src="review.photo" alt=""
              /> -->
                <v-icon large>mdi-account</v-icon>
              </v-avatar>
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
  name: 'index',
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
          name: 'Abbey H',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text:
            'Fredy and his team were great! Fredy was super responsive and always available if I had any questions. The paint job his team did on the interior of my house was fantastic! So happy I got so lucky with them. Just moved into a new home and it is so nice to have beautifully painted walls. I would recommend them to anyone!'
        },
        {
          name: 'Julie S.',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text:
            'I was amazed at the quality of work, how timely the crew was, the value and the professionalism. I highly recommend 24hr. painting to anyone who is in need of painting the interior of their home. I have heavy furniture and cats, and moving our items and working around the cats was not an issue. I wish Fredy and his crew much success!'
        },
        {
          name: 'Patrick R.',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text:
            'We recently had recessed lighting installed, and there were several patches that needed to be covered, texturized and painted. Fredy did an amazing job patching, adding texture to and painting our walls and ceilings throughout our place. When he was finished, it looked like new! He was very hard-working and detail oriented, and he went out of his way to clean up after himself. I would highly recommend him to anyone looking for any kind of painting work. Thank you Fredy for all your great work!'
        },
        {
          name: 'Adam C.',
          rating: 5,
          date: '9/24/2019',
          photo:
            'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
          text:
            '24HR Painting did an amazing job painting our new home. We had a pretty narrow window between when we got our keys and when we moved our furniture. Fredy was very prompt, gave us a VERY competitive quote (lower than other companies we checked with) and his guys did an amazing job. When my wife saw the results, she said Its like its a different place! Could not recommend more highly'
        }
        // {
        //   name: 'Kim M.',
        //   rating: 5,
        //   date: '9/24/2019',
        //   photo:
        //     'https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q',
        //   text:
        //     'Fredy and his group are the best. They were punctual and very flexible. The finished preparing walls and patching stairs and wall. There service is unmatched. Their pricing is very competitive. I really can’t say enough about their work. I would definitely hire them again and will most definitely refer them to anyone who needs painting services. Fredy thank you again for your superior work and your awesome responsive and honest crew. You guys ROCK!!!!!'
        // }
      ]
    }
  },
  computed: {
    posts() {
      return this.$store.getters.featuredPosts
    },
    loadedReviews() {
      return this.$store.getters.loadedReviews
    }
  },
  created() {
    this.$store.dispatch('loadPosts')
    this.$store.dispatch('loadReviews')
  }
}
</script>
