<template>
  <base-section id="theme-features">
    <base-section-heading title="Services Offered"> </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <base-avatar-card v-bind="feature" align="left" horizontal>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            illum veniam cum dolores ratione commodi beatae quas maxime,
            laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionThemeFeatures',

  data: () => ({
    features: [
      {
        title: 'Commercial Services',
        icon: 'mdi-fountain-pen-tip'
      },
      {
        title: 'Color Matching',
        icon: 'mdi-cellphone'
      },
      {
        color: 'primary',
        dark: true,
        title: 'Priming',
        icon: 'mdi-pencil-box-outline'
      },
      {
        title: 'Plaster & Drywall Services',
        icon: 'mdi-image-size-select-actual'
      },
      {
        title: 'Wallpaper Removal',
        icon: 'mdi-ice-pop'
      },
      {
        title: 'Pressure Washing',
        icon: 'mdi-help-circle-outline'
      }
    ]
  })
};
</script>
