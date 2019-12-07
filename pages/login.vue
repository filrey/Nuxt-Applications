<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }"> </template>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon>mdi-home</v-icon>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Login"
                    name="login"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-card-actions class="text-left">
                <div class="flex-grow-1"></div>
                <v-btn
                  class="mx-auto"
                  outlined
                  block
                  color="#4285F4"
                  @click="googleSignIn"
                  >Sign In With Google
                  <v-icon class="ml-1">fab fa-google</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  props: {},
  data: () => ({
    drawer: null,
    email: '',
    password: ''
  }),
  methods: {
    login(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert(`You are logged in as ` + user.email)
          this.$router.push('/')
        })
      e.preventDefault()
    },
    googleSignIn() {
      this.provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then((result) => {
          // store the user
          this.$store.commit('saveUser', result)
          // this.$store.dispatch('signUserIn', result)
          this.$router.push('/')
        })
        .catch((e) => {
          this.$snotify.error(e.message)
        })
    }
  }
}
</script>
