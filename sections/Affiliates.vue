<template>
  <base-section id="affiliates" class="accent lighten-4" space="36">
    <v-container>
      <base-section-heading title="Top Rated Professionals on" />

      <v-slide-group>
        <template v-for="n in 3">
          <v-slide-item :key="n" class="align-self-center">
            <base-img
              :src="require(`@/assets/logo-${n}.png`)"
              color="grey"
              contain
              height="100"
              width="128"
            />
          </v-slide-item>

          <v-responsive
            v-if="n < 3"
            :key="`divider-${n}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: 'SectionAffiliates'
};
</script>
