<template>
  <div class="detailenquete">
 <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
<div class="row py-5 px-4">
    <div class="">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="media align-items-end profile-head">
                                        <div class="profile mr-3"><img src="https://www.oatf-madagascar.mg/wp-content/uploads/2018/09/Logo-INSTAT.png" alt="..." width="130" class="rounded mb-2 img-thumbnail"></div>

                    <div class="media-body mb-5 text-white">

                        <h4 class="mt-0 mb-0">{{this.items.name}}</h4>
                        <a class="small mb-4" :href="this.items.detail_link"> <i class="fas fa-map-marker-alt mr-2"></i>{{this.items.detail_link}}</a>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item" style="margin-right:2.5rem">
                        <h5 class="font-weight-bold mb-0 d-block">{{this.items.launch_date}}</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Date Début</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">{{this.items.deadline_date}}</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Date Fin</small>
                    </li>
                </ul>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">Liste des Enqueteurs</h5>
                <div class="row">
  <div class="column">
                      <h5 class="" style="margin-bottom:5%;">Liste des Enqueteurs Expérimentés</h5>

                <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      v-on:change="changeItem()"
    ></b-form-select>

                <div class="p-4 rounded shadow-sm bg-light" >
<b-table striped hover :items="listeenqueteurs" :fields="fields"  :per-page="perPage"
      :current-page="currentPage">
        <template v-slot:cell(Nom)="row">
{{row.item.cr_mime_type}}
          </template>
              <template v-slot:cell(detail)="row">
          <router-link :to="`detailenqueteurback/${row.item.id}`">Details</router-link>
          </template>
          
    </b-table>
     <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
     style="justify-content: center;"></b-pagination>
      </div>
</div>

<div class="column">
    <h5 class="" style="margin-bottom:5%;">Liste des Enqueteurs Non Expérimentés</h5>
                <b-form-select
      v-model="selected2"
      :options="options2"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      v-on:change="changeItem2()"
    ></b-form-select>

                <div class="p-4 rounded shadow-sm bg-light" >
<b-table striped hover :items="listeenqueteurs2" :fields="fields2"  :per-page="perPage2"
      :current-page="currentPage2">
        <template v-slot:cell(Nom)="row">
{{row.item.cr_mime_type}}
          </template>
              <template v-slot:cell(detail)="row">
          <router-link :to="`detailenqueteurback/${row.item.id}`">Details</router-link>
          </template>
          
    </b-table>
     <b-pagination
      v-model="currentPage2"
      :total-rows="rows2"
      :per-page="perPage2"
      aria-controls="my-table"
     style="justify-content: center;"></b-pagination>
      </div>
</div>

                </div>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Autre Infos</h5>
  

                </div>
                 
                <div class="row">
                           <ul class="list-unstyled">
    <b-media tag="li">
      <template #aside>
        <b-img src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png" width="64" alt="placeholder"></b-img>
      </template>
      <h5 class="mt-0 mb-1">Liste enqueteur ayant postulé</h5>
      <p class="mb-0">
        La Liste des personnes ayant postulé a cette enquete 
      </p>
    </b-media>

    <b-media tag="li" class="my-4">
      <template #aside>
               <b-img src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png" width="64" alt="placeholder"></b-img>

      </template>

      <h5 class="mt-0 mb-1">Liste enqueteur suggéré</h5>
      <p class="mb-0">
        La Liste des personnes suggéré par l'Algorithme de suggestion , ceux qui mérite le plus de participer à l'enquete
      </p>
    </b-media>
  </ul>   


                </div>
            </div>
        </div>
    </div>
</div>

  </div>
</template>
<style >
.profile-head {
    
}

.cover {
    background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
    background-size: cover;
    background-repeat: no-repeat
}

body {
    
    min-height: 100vh;
    overflow-x: hidden
}

* {
  box-sizing: border-box;
}

.row {
  margin-left:-5px;
  margin-right:-5px;
}
  
.column {
  float: left;
  width: 50%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

</style>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    data () {
      return {
      isLoading: false,
          fullPage: true,
         selected: '1',
            selected2: '1',
         idsurvey:'0',
             rowId: 10,
        options: [
          { item: '1', name: 'Ayant Postulé' },
         
   
        ],
         options2: [
          { item: '1', name: 'Ayant Postulé' },
          { item: '2', name: 'Suggéré par l Algorithme' },
          
   
        ],
          items : null,
            items2 : null,
         fields: ['Nom', 'gender','detail'],
        fields2: ['Nom', 'gender','detail'],

         listeenqueteurs : [],
         listeenqueteurs2 : [],
          perPage: 10,
        currentPage: 1,
        perPage2: 10,
        currentPage2: 1,

      }
    },
    methods: {
            changeItem: function changeItem() {
              //
                    this.isLoading=true;
                    this.idsurvey = this.$route.params.id;

            //grab some remote data
              console.log(" slected " + this.selected)
              if(this.selected=="1"){

           axios.get("http://127.0.0.1:8000/getlisteEnqueteurExperimenter/" +  this.$route.params.id )
        .then(response => {
     
            this.listeenqueteurs = response.data;
            this.idsurvey = this.$route.params.id;
                                 this.isLoading=false;

        })
              }
              else{
                axios.get("http://127.0.0.1:8000/suggestion/" + this.$route.params.id )
        .then(response => {
           var array = JSON.parse(JSON.stringify(response.data))
              for (var i = 0 ; i< array.length;i++){
               if(this.selected==array[i].type){
                 this.listeenqueteurs = array[i].liste;
                 this.idsurvey = array[i].id_survey;
                                     this.isLoading=false;

                 break;
               }
              }

        })

              }
            } ,
             changeItem2: function changeItem2() {
              //
                    this.isLoading=true;
                    this.idsurvey = this.$route.params.id;

            //grab some remote data
              console.log(" slected non " + this.selected2)
              if(this.selected2=="1"){

           axios.get("http://127.0.0.1:8000/getlisteEnqueteurNonExperimenter/" +  this.$route.params.id )
        .then(response => {
     
            this.listeenqueteurs2 = response.data;
            this.idsurvey = this.$route.params.id;
                                 this.isLoading=false;

        })
              }
              else{
                              console.log(" slected " + this.selected)

                axios.get("http://127.0.0.1:8000/suggestion_non_experimenter/" + this.$route.params.id )
        .then(response => {
         this.listeenqueteurs2 = response.data;
                                 this.isLoading=false;

        })

              }
            }



        },
        components: {
            Loading
        },
    created() {
      // get enqueteur suggerer 
                    this.isLoading=true;

 axios.get("http://127.0.0.1:8000/suggestion/" + this.$route.params.id )
        .then(response => {
           var array = JSON.parse(JSON.stringify(response.data))
         //  console.log("array " + array[0].liste_enqueteur_suggerer_par_enquete_similaire[0].id)
              for (var i = 0 ; i< array.length;i++){

                var op = { item: array[i].type, name: array[i].type } 
                this.options.push(op);
              }
                                  this.isLoading=false;


        })


        //get enquete by id
        this.idsurvey = this.$route.params.id
        console.log("id params " +  this.$route.params.id)
        
         axios.get("http://127.0.0.1:8000/survey_detail/" +  this.$route.params.id )
        .then(response => {
     
            this.items = response.data;
                    

        })
       .catch(function (error) {
             console.log(error);
        });

           axios.get("http://127.0.0.1:8000/getlisteEnqueteurExperimenter/" +  this.$route.params.id )
        .then(response => {
     
            this.listeenqueteurs = response.data;

            console.log("dksopdk " + this.listeenqueteurs.length )
        })
       .catch(function (error) {
             console.log(error);
        });

   axios.get("http://127.0.0.1:8000/getlisteEnqueteurNonExperimenter/" +  this.$route.params.id )
        .then(response => {
     
                         this.listeenqueteurs2 = response.data;

        })
       .catch(function (error) {
             console.log(error);
        });



    } ,
     computed: {
      rows() {
        return this.listeenqueteurs.length
      } ,
        rows2() {
        return this.listeenqueteurs2.length
      }
  } ,
    

};

</script>
