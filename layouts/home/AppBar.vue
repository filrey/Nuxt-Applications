<template>
  <div>
    <v-app-bar id="home-app-bar" app color="white" elevation="1" height="80">
      <nuxt-link class="noDeco" to="/">
        <h1>Filiberto Reyes | Web Engineer</h1>
      </nuxt-link>

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
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer"),
    BaseImg: () => import("~/components/base/Img")
  },

  data: () => ({
    drawer: null,
    items: [
      {
        title: "Home",
        to: "/"
      },
      {
        title: "About",
        to: "/about"
      },
      {
        title: "Contact us",
        to: "/contact"
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

  .noDeco
    color: black
    text-decoration: none
  
</style>
