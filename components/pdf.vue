<template>
  <div>
    <v-card>
      Pdf Viewer
      <a href="../assets/pdf/Filiberto Reyes Resume V5.pdf" target="blank"
        >Resume</a
      >
    </v-card>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  data() {
    return {
      data() {
        return {
          url: '../assets/pdf/Filiberto Reyes Resume V5.pdf',
          pdfDoc: null,
          pageNum: 1,
          pageIsRendering: false,
          pageNumIsPending: null,
          scale: 1.5
        }
      }
    }
  },
  created() {}
}
</script>
