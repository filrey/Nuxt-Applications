<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      dense
      :src="banner"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        class="mr-1"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn outlined to="/">
        <!-- <v-avatar tile>
          <img :src="require('@/static/favicon-32x32.png')" alt="24Hr Logo"
        /></v-avatar> -->
        <b>
          <v-toolbar-title color="blue" v-text="title" />
        </b>
      </v-btn>
      <div class="flex-grow-1"></div>

      <v-flex></v-flex>
      <b>
        Give us a call today! ( 818 )- 647- 5638
      </b>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent">
          <v-tab v-for="(item, i) in items" :key="i" :to="item.to">
            <v-icon class="mr-1">{{ item.icon }}</v-icon>
            {{ item.title }}</v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <div class="flex-grow-1"></div>

          <v-tooltip v-for="icon in icons" :key="icon.id" top>
            <template v-slot:activator="{ on }">
              <v-btn
                slot="activator"
                :href="icon.url"
                target="blank"
                class="elevation-5 mr-1"
                outlined
                dark
                v-on="on"
              >
                <i :class="icon.name"></i>
              </v-btn>
            </template>
            <span>{{ icon.tooltip }}</span>
          </v-tooltip>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          {{ new Date().getFullYear() }} — <strong>Powered by Vuejs</strong>
          <i class="fab fa-vuejs"></i>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      banner: require('@/assets/banner.jpg'),
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-message',
          title: 'Contact us',
          to: '/contactUs'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '24 HR Painting Services',
      icons: [
        {
          name: 'fab fa-facebook fa-2x',
          url: 'https://www.facebook.com/24horas199/',
          color: 'blue',
          tooltip: 'Facebook'
        },
        {
          name: 'fab fa-instagram fa-2x',
          url:
            'https://instagram.com/javierlopezfred199?utm_source=ig_profile_share&igshid=u32rvjvhubrh',
          color: 'pink',
          tooltip: 'Instagram'
        },
        // {
        //   name: 'fab fa-yelp fa-2x',
        //   url: 'https://www.yelp.com/biz/24hr-painting-services-los-angeles-2',
        //   color: 'red',
        //   tooltip: 'Yelp'
        // },
        {
          name: 'fas fa-thumbtack fa-2x',
          url: 'https://www.thumbtack.com/-Van-Nuys-CA/service/2404480',
          color: 'grey',
          tooltip: 'Thumbtack'
        },
        {
          name: 'fab fa-houzz fa-2x',
          url:
            'https://www.houzz.com/pro/fredy-navarro59/24hr-painting-services',
          color: 'green',
          tooltip: 'Houzz'
        }
      ]
    }
  }
}
</script>
