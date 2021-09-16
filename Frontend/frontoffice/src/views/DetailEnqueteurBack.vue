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

                        <h4 class="mt-0 mb-0">{{this.myprofil.cr_mime_type}}</h4>
                        <a class="small mb-4" :href="this.items.detail_link"> <i class="fas fa-map-marker-alt mr-2"></i>{{this.items.address}}</a>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                   
                </ul>
            </div>
            <div class="px-4 py-3">
                <div class="row">
                      <h5 class="" style="margin-bottom:5%;">Liste des Enquetes dont il a participé</h5>

             

                <div class="p-4 rounded shadow-sm bg-light" >
<b-table striped hover :items="listeenqueteurs" :fields="fields"  :per-page="perPage"
      :current-page="currentPage">
    
              <template v-slot:cell(detail)="row">
          <router-link :to="`detailEnqueteur/${row.item.id}/${$route.params.id}`">Details</router-link>
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
      <h5 class="mt-0 mb-1">Diplome</h5>
    <ul id="example-1">
  <li v-for="item in this.items.liste_diplome" :key="item.id">
    {{ item.name }} recu l'année {{ item.year }} , etablisment {{ item.establishment }}
  </li>
</ul>
    </b-media>

    <b-media tag="li" class="my-4">
      <template #aside>
               <b-img src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png" width="64" alt="placeholder"></b-img>

      </template>

      <h5 class="mt-0 mb-1">Expérience</h5>
     <ul id="example-1">
  <li v-for="item1 in this.items.liste_experience" :key="item1.id">
    {{ item1.experience.name }} sur l'enquete {{ item1.experience.survey }}  pendant l'année {{ item1.experience.year }} , etablisment {{ item1.experience.establishment }}
    dans les régions suivants : <p v-for="region in item1.liste_region_experience_name" :key="region"> ({{region}}) -</p>
  </li>
</ul>
    </b-media>
      <b-media tag="li" class="my-4">
      <template #aside>
               <b-img src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png" width="64" alt="placeholder"></b-img>

      </template>

      <h5 class="mt-0 mb-1">Dialecte</h5>
      <ul id="example-1">
           Parle les dialectes suivants  : 
  <li v-for="item in this.items.liste_dialecte" :key="item.id">
 {{item.nom}}
  </li>
</ul>
    </b-media>
      <b-media tag="li" class="my-4">
      <template #aside>
               <b-img src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png" width="64" alt="placeholder"></b-img>

      </template>

      <h5 class="mt-0 mb-1">Résidence</h5>
 <ul id="example-1">
  
  <li v-for="item in this.items.liste_residence" :key="item.id">
 A habité dans la région {{item.residence_name}} de {{item.residence_info[0].start_year}} à {{item.residence_info[0].end_year}}
  </li>
</ul>
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
          items:{},
          myprofil:null,
         listeenqueteurs : [],
          fields: ['name', 'description','detail'],
          perPage: 10,
        currentPage: 1,

      }
    },
    methods: {
            
        },
        components: {
            Loading
        },
    created() {
     
     axios.get("http://127.0.0.1:8000/enumerator_detail/"+ this.$route.params.id)
        .then(response => {
     
            this.myprofil = response.data;
             
        })
       .catch(function (error) {
             console.log(error);
        });
         axios.get("http://127.0.0.1:8000/getEnumeratorDetail/"+ this.$route.params.id)
        .then(response => {
     
            this.items = response.data;
             
        })
       .catch(function (error) {
             console.log(error);
        });

  axios.get("http://127.0.0.1:8000/getSurveyByEnumerator/"+ this.$route.params.id)
        .then(response => {
     
            this.listeenqueteurs = response.data;
             
        })
       .catch(function (error) {
             console.log(error);
        });


    }

     ,
     computed: {
      rows() {
        return this.listeenqueteurs.length
      }
  } ,
    

};

</script>
