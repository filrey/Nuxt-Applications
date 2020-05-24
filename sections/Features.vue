<template>
  <base-section id="features" class="secondary">
    <v-responsive class="mx-auto" max-width="1350">
      <v-container fluid>
        <base-section-heading class="whiteText" title="Services Offered">
        </base-section-heading>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card align="center" dark v-bind="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
export default {
  name: 'SectionFeatures',

  data: () => ({
    cards: [
      {
        icon: 'mdi-border-inside',
        title: 'Interior',
        text: ''
      },
      {
        icon: 'mdi-border-outside',
        title: 'Exterior',
        text: ''
      },
      {
        icon: 'mdi-home-city',
        title: 'Commercial',
        text: ''
      },
      {
        icon: 'mdi-home',
        title: 'Residential',
        text: ''
      }
    ]
  })
};
</script>

<style lang="css" scoped>
.whiteText {
  color: white;
}
</style>
