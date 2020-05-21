<script>
// Extensions
import Section from '@/sections/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'Home',

  metaInfo: { title: '24HrPaintingServices | Home' },

  extends: Section,

  mixins: [
    LoadSections([
      'hero',
      'about-our-product',
      'features',
      'theme-features',
      'affiliates',
      'social-media',
      'keep-in-touch',
      'contact-us',
      'info'
    ])
  ],

  props: {
    id: {
      type: String,
      default: 'home'
    }
  }
};
</script>
