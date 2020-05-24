<template>
  <div>
    <v-dialog v-model="dialog" width="75%">
      <template v-slot:activator="{ on }">
        <base-btn class="mb-12" color="white" outlined v-on="on">
          Privacy Policy
        </base-btn>
      </template>

      <base-card>
        <base-title>
          Privacy Policy
        </base-title>

        <v-card-text>
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            https://24hrpaintingservices.com/ (the &ldquo;Site&rdquo;).
          </p>
          <h3>PERSONAL INFORMATION WE COLLECT</h3>
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as &ldquo;Device
            Information.&rdquo;
          </p>
          <p>
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers), email address, and phone number. We
            refer to this information as &ldquo;Order Information.&rdquo;
          </p>

          <p>
            When we talk about &ldquo;Personal Information&rdquo; in this
            Privacy Policy, we are talking both about Device Information and
            Order Information.
          </p>
          <h3>HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
          <br />
          <p>
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:<br />Communicate with you;<br />Screen our
            orders for potential risk or fraud; and<br />When in line with the
            preferences you have shared with us, provide you with information or
            advertising relating to our products or services.<br />We use the
            Device Information that we collect to help us screen for potential
            risk and fraud (in particular, your IP address), and more generally
            to improve and optimize our Site (for example, by generating
            analytics about how our customers browse and interact with the Site,
            and to assess the success of our marketing and advertising
            campaigns).<br />
          </p>
          <h3>SHARING YOUR PERSONAL INFORMATION</h3>
          <br />
          <p>
            24 Hr Painting Services does not sell, rent, or lease any of its
            customer lists and/or names to any third parties.
          </p>
          <p>
            24 Hr Painting Services may collect and may make use of personal
            information to assist in the operation of our website and to ensure
            delivery of the services you need and request. At times, we may find
            it necessary to use personally identifiable information as a means
            to keep you informed of other possible products and/or services that
            may be available to you from https://24hrpaintingservices.com/
          </p>
          <p>
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </p>
          <p></p>
          <h3>ADVERTISING</h3>
          <br />
          <p>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative&rsquo;s (&ldquo;NAI&rdquo;) educational page at
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
          </p>
          <p>
            You can opt out of targeted advertising by sending an email request
            to javierlopezfredy199@gmail.com
          </p>

          <h3>
            DO NOT TRACK
          </h3>
          <p>
            <br />Please note that we do not alter our Site&rsquo;s data
            collection and use practices when we see a Do Not Track signal from
            your browser.
          </p>

          <h3>
            DATA RETENTION
          </h3>
          <p>
            <br />When you place an order through the Site, we will maintain
            your Order Information for our records unless and until you ask us
            to delete this information.
          </p>
          <h3>
            CHANGES
          </h3>
          <p>
            <br />We may update this privacy policy from time to time in order
            to reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
          <h3>
            CONTACT US
          </h3>
          <p>
            <br />For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at javierlopezfredy199@gmail.com or by mail using the
            details provided below:
          </p>
          <p>15113 Burton st, Los Angeles, CA, 91402, United States</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <base-btn color="primary" text @click="dialog = false">
            I accept
          </base-btn>
        </v-card-actions>
      </base-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
