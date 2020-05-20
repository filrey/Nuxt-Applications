<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card title="KEEP IN TOUCH WITH US" pace="6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur
        quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci,
        voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti,
        asperiores facere.
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseBusinessInfo',

  props: { dark: Boolean },

  data: () => ({
    business: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: ' 15113 Burton St<br>Van Nuys, CA 91402'
      },
      {
        icon: 'mdi-cellphone',
        title: 'Phone',
        text: '01 (818) 647 5638<br>01 (800) 433 633'
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
