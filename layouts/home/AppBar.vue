<template>
  <div>
    <v-app-bar id="home-app-bar" app color="white" elevation="1" height="80">
      <base-img
        :src="require('@/assets/logo.svg')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <base-img
        :src="require('@/assets/zero-logo-light.svg')"
        contain
        max-width="128"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="name.to"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name.title }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <home-drawer v-model="drawer" :items="items" />
  </div>
</template>

<script>
export default {
  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
    BaseImg: () => import('~/components/base/Img')
  },

  data: () => ({
    drawer: null,
    items: [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: 'About',
        to: '/about'
      },
      {
        title: 'Contact us',
        to: '/contact'
      }
    ]
  })
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
