<template>
  <v-theme-provider dark>
    <base-section id="social" class="gradientBG text-center" space="56">
      <base-icon class="mb-8">
        mdi-instagram
      </base-icon>

      <base-section-heading color="transparent" title="Instagram">
      </base-section-heading>
      <v-container>
        <v-row align="center" justify="center">
          <insta-embed :urls="InstaUrls"></insta-embed>
        </v-row>
      </v-container>

      <div class="py-4" />
      <v-btn
        class="font-weight-bold"
        color="white"
        outlined
        href="https://www.instagram.com/javierlopezfred199/"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        See more on our Instagram

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
import InstaEmbed from "@/components/InstaEmbed";
export default {
  name: "SectionNews",
  components: {
    InstaEmbed
  },
  provide: {
    heading: { align: "center" }
  },
  data() {
    return {
      InstaUrls: [
        "https://www.instagram.com/p/CA_YLxgnYhd/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA_Q1UhHcFn/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA6JdiNHOtY/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA6IEmgHWoB/?utm_source=ig_embed&amp;utm_campaign=loading"
        // "https://www.instagram.com/p/CAhMDftnTzW/?utm_source=ig_embed&amp;utm_campaign=loading"
      ]
    };
  }
};
</script>
<style lang="css">
.gradientBG {
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}
</style>
