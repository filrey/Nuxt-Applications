<template>
  <base-info-card title="Why choose 24 HR">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
export default {
  name: 'SectionFeaturesAlt',

  data: () => ({
    features: [
      '24 Hour Service',
      'Lightning fast',
      'Top rated professionals',
      'Free Quote'
    ]
  })
};
</script>
