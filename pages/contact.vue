<script>
// Extensions
import Section from '@/sections/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'ContactUs',

  metaInfo: { title: '24HrPaintingServices | Contact Us' },

  meta: {
    src: require('@/assets/contact.jpg')
  },

  extends: Section,

  mixins: [LoadSections(['hero-alt', 'keep-in-touch', 'map', 'newsletter'])],

  props: {
    id: {
      type: String,
      default: 'about'
    }
  }
};
</script>
