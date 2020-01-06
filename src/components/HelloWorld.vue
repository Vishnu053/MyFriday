<template>
  <v-container>
    <v-layout
      text-center
      wrap
      class="col-12 row"
    >
  <mainLogo class="col-7" :spinnerType="sType"></mainLogo>
  <div class="col-5" style="padding-top: 5.5em;">
    <span class="font-weight-light" style="font-size: 2.1em;">Hi</span>
    </div>
    </v-layout>
  </v-container>
</template>

<script>
import mainLogo from './mainLogo'
export default {
  components:{mainLogo},

  data: () => ({
    sType:'slow'
  }),
};
</script>
