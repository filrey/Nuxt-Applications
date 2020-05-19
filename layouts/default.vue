<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />

    <home-settings />
  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',

  components: {
    HomeAppBar: () => import('@/layouts/home/AppBar'),
    HomeFooter: () => import('@/layouts/home/Footer'),
    HomeSettings: () => import('@/layouts/home/Settings'),
    HomeView: () => import('@/layouts/home/View')

    // BaseAvatar: () => import('@/components/base/Avatar'),
    // BaseAvatarCard: () => import('@/components/base/AvatarCard'),
    // BaseBody: () => import('@/components/base/Body'),
    // BaseBtn: () => import('@/components/base/Btn'),
    // BaseBusinessContact: () => import('@/components/base/BusinessContact'),
    // BaseCard: () => import('@/components/base/Card'),
    // BaseContactForm: () => import('@/components/base/ContactForm'),
    // BaseDivider: () => import('@/components/base/Divider'),
    // BaseHeading: () => import('@/components/base/Heading'),
    // BaseIcon: () => import('@/components/base/Icon'),
    // BaseImg: () => import('@/components/base/Img'),
    // BaseInfo: () => import('@/components/base/Info'),
    // BaseInfoCard: () => import('@/components/base/InfoCard'),
    // BaseSection: () => import('@/components/base/Section'),
    // BaseSectionHeading: () => import('@/components/base/SectionHeading'),
    // BaseSubheading: () => import('@/components/base/Subheading'),
    // BaseSubtitle: () => import('@/components/base/Subtitle'),
    // BaseTextarea: () => import('@/components/base/Textarea'),
    // BaseTextField: () => import('@/components/base/TextField'),
    // BaseTitle: () => import('@/components/base/Title')
  }
};
</script>
