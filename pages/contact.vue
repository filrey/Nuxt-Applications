<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-form
              class="ma-3"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="MYFORM" />
              <v-text-field label="Name" type="text" name="name">
                <!-- <input type="text" name="name" /> -->
              </v-text-field>
              <v-text-field label="Email" type="email" name="email">
                <!-- <input type="email" name="email" /> -->
              </v-text-field>

              <v-textarea label="Message" name="message">
                <!-- <label>Message: <textarea name="message"></textarea></label> -->
              </v-textarea>
              <div class="mb-3" data-netlify-recaptcha="true"></div>
              <v-btn class="mb-3" color="primary" type="submit">Send</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  data() {
    return {}
  },
  created() {}
}
</script>
