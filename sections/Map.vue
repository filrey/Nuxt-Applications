<template>
  <base-section id="map" space="0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.089389733223!2d-118.4645937847805!3d34.2207358805604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c291fbf4f578c9%3A0xfad6d39b116adcc2!2s24HR%20PAINTING%20SERVICES!5e0!3m2!1sen!2sus!4v1589924444660!5m2!1sen!2sus"
      width="100%"
      height="600"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </base-section>
</template>

<script>
export default {
  name: 'SectionMap',

  provide: {
    heading: { align: 'center' }
  }
};
</script>
