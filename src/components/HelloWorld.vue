<template>
  <v-container>
    <v-layout
      text-center
      wrap
      class="col-12 row"
    >
  <mainLogo class="col-7 animated fadeIn slower" :spinnerType="sType"></mainLogo>
  <div class="col-5" style="padding-top: 5.5em;">
    <span class="font-weight-light" style="font-size: 2.1em;">FRIDAY <span style="font-size:0.5em;" class="red--text">(Offline)</span></span>
    </div>
    </v-layout>
    <!-- <v-layout> -->
      <chats/>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
import mainLogo from './mainLogo'
import chats from './chats'
export default {
  components:{mainLogo,chats},

  data: () => ({
    sType:'slow'
  }),
};
</script>
