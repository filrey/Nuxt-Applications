<script>
// Extensions
import Section from '@/sections/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'About',

  metaInfo: { title: '24HrPaintingServices | About Us' },

  extends: Section,

  meta: {
    src: require('@/assets/about.jpg')
  },

  mixins: [
    LoadSections([
      'hero-alt',
      'about-our-product',
      'affiliates',
      'map',
      'contact-us',
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
