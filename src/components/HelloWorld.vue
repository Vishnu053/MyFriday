<template>
  <v-container>
    <v-layout text-center wrap class="col-12 row">
      <mainLogo class="col-7 animated fadeIn slower" :spinnerType="sType"></mainLogo>
      <div class="col-5" style="padding-top: 5.5em;">
        <span class="font-weight-light" style="font-size: 2.1em;">
          FRIDAY
          <span
            style="font-size:0.5em;"
            :class="isOffline?'red--text':'green--text'"
          >{{isOffline?'(Offline)':'(Online)'}}</span>
        </span>
      </div>
    </v-layout>
    <!-- <v-layout> -->
    <chats :newMessage="addMessage" />
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
import mainLogo from "./mainLogo";
import chats from "./chats";
import Artyom from "artyom.js";
export default {
  components: { mainLogo, chats },

  data: () => ({
    sType: "slow",
    listener: "",
    addMessage: "",
    isOffline: true
  }),
  mounted() {
    this.setCommands();
  },
  methods: {
    startListening() {
      const artyom = new Artyom();
      artyom.say("Hi boss! I'm booted up and running.");
      setTimeout(() => {
        this.isOffline = false;
      }, 1000);
      // function startContinuousArtyom(){
      artyom.fatality(); // use this to stop any of

      setTimeout(function() {
        // if you use artyom.fatality , wait 250 ms to initialize again.
        artyom
          .initialize({
            lang: "en-GB", // A lot of languages are supported. Read the docs !
            continuous: true, // Artyom will listen forever
            listen: true, // Start recognizing
            debug: true, // Show everything in the console
            speed: 1 // talk normally
          })
          .then(function() {
            console.log("Ready to work !");
          });
      }, 250);
      // }
    },
    setCommands() {
      const artyom = new Artyom();
      // Or add multiple commands at time
      var myGroup = [
        {
          description:
            "If my database contains the name of a person say something",
          smart: true, // a Smart command allow you to use wildcard in order to retrieve words that the user should say
          // Ways to trigger the command with the voice
          indexes: [
            "Do you know who is *",
            "I don't know who is *",
            "Is * a good person"
          ],
          // Do something when the commands is triggered
          action: function(i, wildcard) {
            var database = ["Vishnu", "Appu", "Aju", "Chandu", "Bahul"];

            //If the command "is xxx a good person" is triggered do, else
            if (i == 2) {
              if (database.indexOf(wildcard.trim())) {
                artyom.say("I'm a machine, I dont know what is a feeling");
              } else {
                artyom.say(
                  "I don't know who is " +
                    wildcard +
                    " and i cannot say if is a good person"
                );
              }
            } else {
              if (database.indexOf(wildcard.trim())) {
                artyom.say(
                  "Of course i know who is " +
                    wildcard +
                    ". A friend of my boss. My boss's friend is my friend."
                );
              } else {
                artyom.say(
                  "My database is not big enough, I don't know who is " +
                    wildcard
                );
              }
            }
          }
        },
        {
          indexes: ["What time is it", "Is too late"],
          action: function(i) {
            // var i returns the index of the recognized command in the previous array
            if (i == 0) {
              aFunctionThatSaysTheTime(new Date());
            } else if (i == 1) {
              artyom.say("Never is too late to do something my friend !");
            }
          }
        }
      ];

      artyom.addCommands(myGroup);
      setTimeout(() => {
        this.startListening();
      }, 1000);
    }
  }
};
</script>
