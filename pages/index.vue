<template>
  <div>
    <hero />
  </div>
</template>

<script>
export default {
  components: {
    AboutOurProduct: () => import('@/sections/AboutOurProduct'),
    Affiliates: () => import('@/sections/Affiliates'),
    ContactUs: () => import('@/sections/ContactUs'),
    Features: () => import('@/sections/Features'),
    Hero: () => import('@/sections/Hero'),
    HeroAlt: () => import('@/sections/HeroAlt'),
    Info: () => import('@/sections/Info'),
    KeepInTouch: () => import('@/sections/KeepInTouch'),
    Map: () => import('@/sections/Map'),
    NewsLetter: () => import('@/sections/Newsletter'),
    ProFeatures: () => import('@/sections/ProFeatures'),
    SocialMedia: () => import('@/sections/SocialMedia'),
    ThemeFeatures: () => import('@/sections/ThemeFeatures')
  }
};
</script>
