<script>
// Extensions
import View from '@/sections/View';

// Mixins
import LoadSections from '@/mixins/load-sections';

export default {
  name: 'FourOhFour',

  metaInfo: { title: 'Oops! No Page Found' },

  extends: View,

  mixins: [LoadSections(['404', 'newsletter', 'info'])],

  props: {
    id: {
      type: String,
      default: 'about'
    }
  }
};
</script>
