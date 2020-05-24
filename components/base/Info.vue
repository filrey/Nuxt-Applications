<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/logo.png')"
        contain
        max-width="300"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="LICENSE INFORMATION"
        weight="regular"
      />

      <base-body>
        License Holder: fredy navarro License Type: C33 - Painting and
        Decorating (CA) License number: #1042217 Valid through 07/31/2020
      </base-body>

      <base-btn class="mb-12" color="white" outlined>
        Privacy Policy
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseInfo',

  props: {
    title: String,
    dark: Boolean
  },

  data: () => ({
    business: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137'
      },
      {
        icon: 'mdi-cellphone',
        title: 'Phone',
        text: '01 (800) 433 744<br>01 (800) 433 633'
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'john@vuetifyjs.com<br>heather@vuetifyjs.com'
      }
    ]
  })
};
</script>
