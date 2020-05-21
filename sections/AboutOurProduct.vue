<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-check"
      title="Customer Satisfaction is our #1 priority"
    />

    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionAboutOurProduct',

  data: () => ({
    cards: [
      {
        title: '24 Hour Service',
        subtitle: 'Available any day anytime',
        text:
          'We are on call 24 hours a day ready to help turn your dream project into a reality.',
        callout: '01'
      },
      {
        title: 'Serving your community',
        subtitle: 'Based in Socal',
        text:
          'We serve the communities in Los Angeles, Thousand Oaks, Ventura, and neighboring cities in California.',
        callout: '02'
      },
      {
        title: 'Improve your home value',
        subtitle: 'Income Flow',
        text:
          'Planning on selling your home? Get the maximum return out of your investment by touching up the paint!',
        callout: '03'
      }
    ]
  })
};
</script>
