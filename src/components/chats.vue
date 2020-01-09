<template>
  <div>
    <!-- message body -->
    <div :style="`min-height:${dwdth};max-height:${dwdth};overflow-x: hidden;overflow-y: auto;`">
        <br>
        <span v-for="(chat,index) in chatBody" v-bind:key="'i'+index">
      <div :class="chat.isSystem?'chat-left-container':'chat-right-container'">
          <div :class="chat.isSystem?'mb-1 mr-2 mt-1 pl-3 pr-3 pt-1 pb-1 purple chat-left animated fadeInLeft':'mb-1 mr-2 mt-1 pl-3 pr-3 pt-1 pb-1 purple darken-2 chat-right animated fadeInRight'">
              {{chat.message}} 
          </div>
      </div>
        </span>
        <!-- outbox -->
        <span v-for="(item,index) in outbox" v-bind:key="'o'+index">
      <div class="chat-right-container">
          <div class="mb-1 mr-2 mt-1 pl-3 pr-3 pt-1 pb-1 chat-sending chat-right animated fadeInRight">
              {{item.message}} 
          </div>
      </div>
        </span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        newMessage:{
            type:String,
            default:""
        }
    },
  data() {
    return {
      dwdth: 0,
      outMessage:"",
      chatBody:[
          {
              message:"hey boss!",
              isSystem:true
          },
        //   {
        //       message:"I'm sorry, but what does that mean?",
        //       isSystem:true
        //   },
        //   {
        //       message:"It is a greeting",
        //       isSystem:false
        //   },
        //   {
        //       message:"Understood! Hello is a greeting.",
        //       isSystem:true
        //   },
        //   {
        //       message:"**Started learning all kinds of greetings from the internet**",
        //       isSystem:true
        //   },
        //   {
        //       message:"**Learning greetings (50% done)**",
        //       isSystem:true
        //   },
        //   {
        //       message:"Hello Friday",
        //       isSystem:false
        //   },
        //   {
        //       message:"Hi! How are you?",
        //       isSystem:true
        //   },
        //   {
        //       message:"**Learning greetings (80% done)**",
        //       isSystem:true
        //   },
        //   {
        //       message:"**Learning greetings (complete)**",
        //       isSystem:true
        //   },
      ],
      outbox:[]
    };
  },
  watch:{
      newMessage(NewValue,OldValue){
          if(NewValue!=""){
              this.chatBody.push({message:NewValue,isSystem:false})
          }
      }
  },
  mounted() {
    this.dwdth = window.innerHeight - 300 + "px";
    // this.dwdth="calc(100vh - 100px)"
  },
  methods:{
      sendMessage(){
          this.outbox=[...this.outbox,{message:this.outMessage}]
          this.outMessage=""
        //   delete the below when providing actual code
          setTimeout(() => {
              this.chatBody=[...this.chatBody,...this.outbox]
              this.outbox=[]
          }, 1500);
        //   delete the above when providing actual code
      }
  }
};
</script>

<style scoped>
.chat-left-container{
    display: flex;
    flex-direction: row;
}
.chat-right-container{
    display: flex;
    flex-direction: row-reverse;
}
.chat-left{
    border-radius: 25px;
    font-size: medium;
    font-weight: bold;
    max-width: 50%;
}
.chat-right{
    border-radius: 25px;
    font-size: medium;
    font-weight: bold;
    max-width: 50%;    
}
.chat-sending{
    background: #afafaf !important;
    color: #ffffff !important;
}
.chat-sending::after {
  content: " Sending...";
  font-weight: normal;
  font-size: 10px;
  position: relative;
}
</style>