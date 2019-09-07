<template>
  <v-layout>
    <v-flex>
      <v-card class="mx-auto" max-width="600" flat>
        <v-img class="white--text" height="200px" :src="banner"> </v-img>
        <v-card-title class="align-end fill-height"
          >About 24 Hr Painting</v-card-title
        >
        <v-card-text>
          We are professional painters with over 10 years of experience on a
          wide variety of projects and surfaces which makes us capable of any
          type of job. We have experience in painting outdoor and indoor
          surfaces made of all materials, such as wood, concrete, or brick.
        </v-card-text>
        <v-divider class="ma-2"></v-divider>
        <v-card-title>License Information</v-card-title>
        <v-card-text>
          License Holder: fredy navarro <br />
          License Type: C33 - Painting and Decorating (CA) <br />
          License number: #1042217 <br />
          Valid through 07/31/2020
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      banner: require('@/assets/freddy.jpg')
    }
  }
}
</script>
