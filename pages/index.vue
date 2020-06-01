<script>
// Extensions
import Section from "@/sections/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Home",

  metaInfo: { title: "Filiberto Reyes | Web Engineer | Home" },

  extends: Section,

  mixins: [
    LoadSections([
      "hero",
      "theme-features",
      "features",
      "contact-us",
      "affiliates",
      "social-media",
      "keep-in-touch",
      "newsletter",
      "pro-features",
      "info"
    ])
  ],

  props: {
    id: {
      type: String,
      default: "home"
    }
  }
};
</script>
