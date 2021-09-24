<template>
  <div class="ranking">
   <div class="mt-8">

<div class="py-2 items-center"><span class="mr-2"><i class="fas fa-map-marked-alt text-blue-400"></i></span><span class="text-xl uppercase font-semibold text-instat-blue"> DASHBOARD</span></div>

   </div>
   <b-container style="background-color:skyblue" fluid class="p-4 ">
  <b-row>
    <b-col>
      <h3 alt="">Nombre d'enqueteur</h3>
      <br/>       <h4 alt="">{{this.dashboard.nbr_enqueteur}}</h4>
    </b-col>
    <b-col>
      <h3 alt="">Enqueteur satisfaisant</h3>
      <br/>       <h4 alt="">{{this.dashboard.porcentage_enqueteur_satisfaisant}} %</h4>
    </b-col>
    <b-col>
      <h3 alt="">Nombre de fille</h3>
      <br/>       <h4 alt="">{{this.dashboard.enqueteur_fille}}</h4>
    </b-col>
      <b-col>
      <h3 alt="">Nombre de garçon</h3>
      <br/>       <h4 alt="">{{this.dashboard.enqueteur_garcon}}</h4>
    </b-col>
  </b-row>
</b-container>
<h3 style="margin-top:3%"> Top 100 Enqueteurs</h3>
<b-table style="margin-top:3%" striped hover :items="items" :fields="fields">
         <template v-slot:cell(Nom)="row">
{{row.item.cr_mime_type}}
          </template>
          <template v-slot:cell(Ranking)="row">
            {{row.index + 1}}

          </template>
    </b-table>


  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
        fields: ['Nom','gender','Ranking'],
        items: [],
        dashboard:{},
        rank:1,


        }
    } ,
    created() {
      axios.get("http://127.0.0.1:8000/getDashBoard")
        .then(response => {
     
            this.dashboard = response.data;
         
             
        })
       .catch(function (error) {
             console.log(error);
        });
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
