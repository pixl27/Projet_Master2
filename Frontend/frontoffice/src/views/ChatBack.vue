<template>
<div>

<b-table style="margin-top:3%" striped hover :items="items" :fields="fields">
         <template v-slot:cell(Nom)="row">
{{row.item.cr_mime_type}}
          </template>
          <template v-slot:cell(Message)="">
        <b-button v-b-toggle.sidebar-right>Envoyer Message</b-button>

          </template>
    </b-table>


    <b-sidebar id="sidebar-right" title="Chat" bg-variant="dark" text-variant="light" right shadow>

  <div style="" class="container">
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
      <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <input class="fs-5 fw-semibold" v-model="username"/>
      </div>
      <div class="list-group list-group-flush border-bottom scrollarea">
        <div class="list-group-item list-group-item-action py-3 lh-tight"
             v-for="message in messages" :key="message"
        >
         <div v-if="message.username!='Recruteur de l INSTAT' " style="margin-left:84%" class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">{{ message.username }}</strong>
                    <br/>

          </div>
          <div v-if="message.username!='Mahery' " class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">{{ message.username }}</strong>
                    <br/>

          </div>
         <h5 v-if="message.username!='Mahery' " style="margin-right: 100%;"> {{ message.message }} </h5>
        <h5 v-if="message.username!='Recruteur de l INSTAT' " style="margin-left: 96%;"> {{ message.message }} </h5>

        </div>
      </div>
    </div>
    <form @submit.prevent="submit">
      <input style="margin-top:2%" class="form-control" placeholder="Envoyer un méssage" v-model="message"/>
    </form>
  </div>
      </b-sidebar>
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
    username:"Recruteur de l INSTAT",
      messages:[],
        fields: ['Nom','gender','Message'],
        items: [],
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
  } ,
   created() {
         axios.get("http://127.0.0.1:8000/getTop100Enqueteur")
        .then(response => {
     
            this.items = response.data;
            
         
             
        })
       .catch(function (error) {
             console.log(error);
        });
   }

}
</script>

<style>
.scrollarea {
  min-height: 500px;
}
</style>