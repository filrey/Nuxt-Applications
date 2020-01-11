<template>
  <div>
    <v-parallax
      dark
      src="https://images.unsplash.com/photo-1571292098320-997aa03a5d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=588&q=80"
    >
      <v-container class="fill-height" fluid>
        <v-carousel
          v-model="model"
          progress
          progress-color="white"
          cycle
          :show-arrows="false"
          touch
          continuous
        >
          <v-row align="center" justify="center">
            <v-col :xs="12" :sm="12" :md="6">
              <v-row justify="space-around">
                <!-- <v-btn class="centerInDiv" color="red">
                  <v-icon @click="model--">mdi-minus</v-icon>
                </v-btn> -->
                <!-- Review -->
                <v-col class="mt-50" :xs="12">
                  <v-carousel-item
                    reverse-transition="scroll-x-transition"
                    transition="scroll-x-reverse-transition"
                  >
                    <client-only>
                      <span
                        class="yelp-review"
                        data-review-id="z5W-k43tD-pDmuPn9IrTjw"
                        data-hostname="www.yelp.com"
                        >Read
                        <a
                          href="https://www.yelp.com/user_details?userid=L7XiG16oFbuWrsvfr27TCw"
                          rel="nofollow noopener"
                          >Elle W.</a
                        >'s
                        <a
                          href="https://www.yelp.com/biz/24hr-painting-services-van-nuys?hrid=z5W-k43tD-pDmuPn9IrTjw"
                          rel="nofollow noopener"
                          >review</a
                        >
                        of
                        <a
                          href="https://www.yelp.com/biz/hSs9hxxkE87Y3IUEy7FQ5g"
                          rel="nofollow noopener"
                          >24HR Painting Services</a
                        >
                        on
                        <a href="https://www.yelp.com" rel="nofollow noopener"
                          >Yelp</a
                        ><script
                          async="async"
                          src="https://www.yelp.com/embed/widgets.js"
                          type="text/javascript"
                        ></script
                      ></span>
                    </client-only>
                  </v-carousel-item>

                  <v-carousel-item
                    reverse-transition="scroll-x-transition"
                    transition="scroll-x-reverse-transition"
                  >
                    <client-only>
                      <span
                        class="yelp-review"
                        data-review-id="wEHdhuaVno9fkRRxzjDhDw"
                        data-hostname="www.yelp.com"
                        >Read
                        <a
                          href="https://www.yelp.com/user_details?userid=NEbwJgXjWtGf92uC7DaQ7A"
                          rel="nofollow noopener"
                          >Donna G.</a
                        >'s
                        <a
                          href="https://www.yelp.com/biz/24hr-painting-services-van-nuys?hrid=wEHdhuaVno9fkRRxzjDhDw"
                          rel="nofollow noopener"
                          >review</a
                        >
                        of
                        <a
                          href="https://www.yelp.com/biz/hSs9hxxkE87Y3IUEy7FQ5g"
                          rel="nofollow noopener"
                          >24HR Painting Services</a
                        >
                        on
                        <a href="https://www.yelp.com" rel="nofollow noopener"
                          >Yelp</a
                        ><script
                          async="async"
                          src="https://www.yelp.com/embed/widgets.js"
                          type="text/javascript"
                        ></script
                      ></span>
                    </client-only>
                  </v-carousel-item>

                  <v-carousel-item
                    reverse-transition="scroll-x-transition"
                    transition="scroll-x-reverse-transition"
                  >
                    <client-only>
                      <span
                        class="yelp-review"
                        data-review-id="dcxjpDIMoeFVqVolui2RIw"
                        data-hostname="www.yelp.com"
                        >Read
                        <a
                          href="https://www.yelp.com/user_details?userid=G6zFmxU3QuZwajjTnEJ_5g"
                          rel="nofollow noopener"
                          >Joshua E.</a
                        >'s
                        <a
                          href="https://www.yelp.com/biz/24hr-painting-services-van-nuys?hrid=dcxjpDIMoeFVqVolui2RIw"
                          rel="nofollow noopener"
                          >review</a
                        >
                        of
                        <a
                          href="https://www.yelp.com/biz/hSs9hxxkE87Y3IUEy7FQ5g"
                          rel="nofollow noopener"
                          >24HR Painting Services</a
                        >
                        on
                        <a href="https://www.yelp.com" rel="nofollow noopener"
                          >Yelp</a
                        ><script
                          async="async"
                          src="https://www.yelp.com/embed/widgets.js"
                          type="text/javascript"
                        ></script
                      ></span>
                    </client-only>
                  </v-carousel-item>

                  <v-carousel-item
                    reverse-transition="scroll-x-transition"
                    transition="scroll-x-reverse-transition"
                  >
                    <client-only>
                      <span
                        class="yelp-review"
                        data-review-id="-UxIcLfJllpWcLbm0tMHSQ"
                        data-hostname="www.yelp.com"
                        >Read
                        <a
                          href="https://www.yelp.com/user_details?userid=WTUw0gFcz504xENkbSsDjg"
                          rel="nofollow noopener"
                          >Tiffany T.</a
                        >'s
                        <a
                          href="https://www.yelp.com/biz/24hr-painting-services-van-nuys?hrid=-UxIcLfJllpWcLbm0tMHSQ"
                          rel="nofollow noopener"
                          >review</a
                        >
                        of
                        <a
                          href="https://www.yelp.com/biz/hSs9hxxkE87Y3IUEy7FQ5g"
                          rel="nofollow noopener"
                          >24HR Painting Services</a
                        >
                        on
                        <a href="https://www.yelp.com" rel="nofollow noopener"
                          >Yelp</a
                        ><script
                          async="async"
                          src="https://www.yelp.com/embed/widgets.js"
                          type="text/javascript"
                        ></script
                      ></span>
                    </client-only>
                  </v-carousel-item>
                </v-col>
                <!-- <v-btn class="centerInDiv">
                  <v-icon @click="model++">mdi-plus</v-icon>
                </v-btn> -->
              </v-row>
            </v-col>
          </v-row>
        </v-carousel>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0
    }
  }
}
</script>

<style lang="scss">
iframe {
  max-width: 100% !important;
  min-width: 100% !important;
}
.centerInDiv {
  margin-top: auto;
  margin-bottom: auto;
}
.mt-50 {
  margin-top: 50px;
}
</style>
