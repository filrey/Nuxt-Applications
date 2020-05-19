<script>
// Extensions
import Section from '@/sections/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'About',

  metaInfo: { title: 'About Us' },

  extends: Section,

  meta: {
    src: require('@/assets/about.jpg')
  },

  mixins: [
    LoadSections([
      'hero-alt',
      'about-our-product',
      'theme-features',
      'affiliates',
      'newsletter',
      'pro-features',
      'info'
    ])
  ],

  props: {
    id: {
      type: String,
      default: 'about'
    }
  }
};
</script>
