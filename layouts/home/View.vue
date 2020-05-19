<template>
  <v-content>
    <v-fade-transition mode="out-in">
      <nuxt />
    </v-fade-transition>
  </v-content>
</template>

<script>
export default {
  name: 'BaseView'
};
</script>
