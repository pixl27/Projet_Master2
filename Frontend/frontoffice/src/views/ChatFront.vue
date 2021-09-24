<template>
  <div style="border: 5px solid black;" class="container">
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
      <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <input class="fs-5 fw-semibold" v-model="username"/>
      </div>
      <div class="list-group list-group-flush border-bottom scrollarea">

  
     
        <div  class="list-group-item list-group-item-action py-3 lh-tight"
             v-for="message in messages" :key="message"
        >
        <div v-if="message.username=='Recruteur de l INSTAT' " style="margin-left:84%" class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">{{ message.username }}</strong>
                    <br/>

          </div>
          <div v-if="message.username=='Mahery' " class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">{{ message.username }}</strong>
                    <br/>

          </div>
         <h5 v-if="message.username=='Mahery' " style="margin-right: 100%;"> {{ message.message }} </h5>
        <h5 v-if="message.username=='Recruteur de l INSTAT' " style="margin-left: 85%;"> {{ message.message }} </h5>

        </div>
      </div>
    </div>
    <form @submit.prevent="submit">
      <input style="margin-bottom:15px" class="form-control" placeholder="Envoyer un méssage" v-model="message"/>
    </form>
  </div>
</template>

<script>
import Pusher from 'pusher-js';
import axios from 'axios';
export default {
  name: 'App',
  
  mounted() {
  Pusher.logToConsole = true;
      const pusher = new Pusher('403bb2bf9b548caacd60', {
        cluster: 'eu'
      });
      const channel = pusher.subscribe('chatappvue');
      channel.bind('message', data => {
        this.messages.push(data);
      });
  } , 
  data() {
      return {
    username:"Mahery",
      messages:[],
      message:"",
      }
  } ,
  methods : {
      submit() {
          console.log("message envoyer")

 axios.post("http://localhost:8000/envoyerMessage",  JSON.stringify({username: this.username,message: this.message}) )
        .then(response => {
     console.log(response)
                   this.message = '';

        })
       .catch(function (error) {
             console.log(error);
        });
    
      }
  }

}
</script>

<style>
.scrollarea {
  min-height: 500px;
}
</style>