<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app light dense>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-btn class="ml-lg-12 mr-1" text depressed to="/">
        <b>
          <v-toolbar-title color="blue" v-text="title" />
        </b>
      </v-btn>
      <div class="flex-grow-1"></div>
      <b v-if="user == null" class="mr-lg-12">
        Give us a call today!
        <a href="tel:818-647-5638"
          ><span style="font-weight:bold;padding-left:10px !important;">
            818-647-5638</span
          ></a
        >
      </b>

      <v-avatar v-if="user" class="mr-1" size="36"
        ><img :src="photo" alt="avatar"
      /></v-avatar>
      <b v-if="user"> {{ name }} </b>

      <v-btn class="ml-3" outlined v-if="user != null" @click="logout">
        Log Out
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          class="ml-lg-12 mr-1"
          align-with-title
          background-color="grey lighten-5"
        >
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
          {{ new Date().getFullYear() }} —
          <strong>24HRPAINTINGSERVICES LLC</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Nav',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: null,
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
        }
        // {
        //   icon: 'mdi-message',
        //   title: 'Contact us',
        //   to: '/contactUs'
        // }
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
  },
  created() {
    const vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vm.user = user
        vm.name = vm.user.displayName
        vm.email = vm.user.email
        vm.photo = vm.user.photoURL
        vm.userId = vm.user.uid
      }
    })
  },
  computed: {},
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go()
        })
    }
  }
}
</script>
