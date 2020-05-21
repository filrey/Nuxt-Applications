<template>
  <v-footer id="home-footer" color="grey darken-4" dark min-height="72">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div
            class="d-flex flex-wrap justify-md-start justify-center justify-md-none"
          >
            <template v-for="(s, i) in social">
              <!-- <i :class="s.icon"></i> -->
              <a
                :key="s.id"
                class="white--text pa-1 pa-md-0"
                :href="s.url"
                target="blank"
                v-text="s.title"
              />

              <v-responsive
                v-if="i < social.length - 1"
                :key="`divider-${s}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col class="text-center text-md-right" cols="12" md="6">
          Copyright &copy; 2020 24HRPAINTINGSERVICES, LLC
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'HomeFooter',

  data: () => ({
    social: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/24horas199/'
      },
      {
        title: 'Instagram',
        url:
          'https://instagram.com/javierlopezfred199?utm_source=ig_profile_share&igshid=u32rvjvhubrh'
      },
      {
        title: 'Yelp',
        url: 'https://www.yelp.com/biz/24hr-painting-services-los-angeles-2'
      }
    ]
  })
};
</script>

<style lang="sass">
#home-footer a
  text-decoration: none
</style>
