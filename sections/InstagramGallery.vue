<template>
  <div style="display: flex;">
    <v-row align="center" justify="center">
      <insta-embed :urls="InstaUrls"></insta-embed>
    </v-row>
  </div>
</template>
<script>
import InstaEmbed from "@/components/InstaEmbed";
export default {
  name: "InstagramGallery",
  components: {
    InstaEmbed
  },
  data() {
    return {
      InstaUrls: [
        "https://www.instagram.com/p/CA_YLxgnYhd/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA_Q1UhHcFn/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA6JdiNHOtY/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA6IEmgHWoB/?utm_source=ig_embed&amp;utm_campaign=loading",
        "https://www.instagram.com/p/CA6G8EUnyoq/?utm_source=ig_embed&amp;utm_campaign=loading"
        // 'https://www.instagram.com/p/CAhMDftnTzW/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAhLOK-na_n/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAhKtv4HsBf/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAdt07-n1BG/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAQ8UVhHjNz/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAQlvFzAm3Q/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAPRk1XnJmm/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAMirwOArOF/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAA7Jdvnye9/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/CAA5yM4nz1x/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/B_vsPsenwYi/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/B_vrCRgHMCZ/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/B_tj8bkHZ8t/?utm_source=ig_embed&amp;utm_campaign=loading',
        // 'https://www.instagram.com/p/B_s6AgJJ4-w/?utm_source=ig_embed&amp;utm_campaign=loading'
      ]
    };
  }
};
</script>
