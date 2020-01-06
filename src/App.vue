<template>
  <v-app style="background:linear-gradient(black, #0c0c0c);">
    <!-- <v-content> -->
      <router-view/>
    <!-- </v-content> -->
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created () {
      this.$vuetify.theme.dark = true
    },
};
</script>
