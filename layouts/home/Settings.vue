<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    bottom
    left
    max-width="90%"
    min-width="275"
    offset-x
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="settings"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 164px; right: -35px;"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large>
          mdi-phone
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title align="center" title="Call us today!" space="0" />

      <base-img
        :src="require('@/assets/logo.png')"
        class="mr-3 mt-7 hidden-xs-only"
        contain
        max-width="300"
        width="100%"
      />

      <v-card-text>
        <v-divider class="my-6" />

        <base-btn block href="tel:818-647-5638" class="mb-6" color="accent">
          Click here to call
        </base-btn>

        <base-btn
          to="/contact"
          block
          color="primary"
          dark
          @click="menu = false"
        >
          Request Free Quote
        </base-btn>

        <v-divider class="my-6" />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'HomeSettings',

  data() {
    return {
      colors: [this.$vuetify.theme.themes.light.primary, '#9368e9', '#F4511E'],
      menu: false
    };
  }
};
</script>
