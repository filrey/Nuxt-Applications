<template>
  <div>
    <v-card>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"/></label>
        </p>
        <p>
          <label
            >Your Role:
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label
          >
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Send</button>
        </p>
      </form>
    </v-card>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: '',
  data() {
    return {}
  }
}
</script>
