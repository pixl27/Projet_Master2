<template>
  <div class="detailenqueteur">

<div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="media align-items-end profile-head">
                    <div class="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail"></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">Points Total : {{this.items.point_total}}</h4>
                        <h4 class="mt-0 mb-0">Nom Prenom</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>Addresse</p>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">{{this.items.point_diploma}}</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i> Points Diplome</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">{{this.items.point_region}}</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i> Points Dialecte</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">{{this.items.point_dialect}}</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i> Points Région</small>
                    </li>
                </ul>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">Indice de Performance</h5>
                <div class="p-4 rounded shadow-sm bg-light" style="position: relative;margin-left: 15%;">
                <apexchart width="500" type="radar" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Autre Infos</h5><a href="#" class="btn btn-link text-muted">Export en QR Code</a>
  

                </div>
                 
                <div class="row">
                              


<ul class="list-unstyled">
    <b-media tag="li">
      <template #aside>
        <b-img src="https://cdn.pixabay.com/photo/2017/10/24/00/39/bot-icon-2883144_960_720.png" width="64" alt="placeholder"></b-img>
      </template>
      <h5 class="mt-0 mb-1">Avis Externe Genérer automatiquement</h5>
      <p class="mb-0">
        {{this.items.description}}
      </p>
    </b-media>

    <b-media tag="li" class="my-4">
      <template #aside>
       <b-img v-if="a" src="https://oxfam.qc.ca/wp-content/uploads/icone-pouce-vert-alpha.svg"  width="64" alt="placeholder"></b-img>
      <b-img v-if="!a" src="https://icons555.com/images/icons-red/image_icon_thumbs_down_pic_512x512.png"  width="64" alt="placeholder"></b-img>

      </template>

      <h5 class="mt-0 mb-1">Avis Interne</h5>
      <p class="mb-0">
 {{this.pointsinterne.description}}
      </p>
    </b-media>

    <b-media tag="li">
      <template #aside>
         <b-img v-if="a" src="https://oxfam.qc.ca/wp-content/uploads/icone-pouce-vert-alpha.svg"  width="64" alt="placeholder"></b-img>
      <b-img v-if="!a" src="https://icons555.com/images/icons-red/image_icon_thumbs_down_pic_512x512.png"  width="64" alt="placeholder"></b-img>

      </template>

      <h5 class="mt-0 mb-1">Note d'Appreciation</h5>
      <p class="mb-0">
    {{this.pointsinterne.avis}}/5
      </p>
          <b-form-rating v-model="this.stars" variant="warning" readonly></b-form-rating>

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
</style>

<script>
import axios from 'axios';

export default {
    data: function() {
      return {
          items : null,
          pointsinterne:null,
          stars:0,
          a:true,
        chartOptions: {
          chart: {
            id: 'vuechart-example',
                         

          },
          xaxis: {
            categories: [["Vitesse","10"], ["Précision","10"], ["Comportement","10"]] ,
          
          } ,
           yaxis: { 
               show:false,
               min: 0,
      max: 10,
           }
        },
        series: [{
          name: 'series-1',
          data: []
        }]
      }
    },
    created() {
           // get all points externe
   axios.get("http://127.0.0.1:8000/enumerator_point_externe_detail/1/42")
        .then(response => {
     
            this.items = response.data;
             
        })
       .catch(function (error) {
             console.log(error);
        });

          axios.get("http://127.0.0.1:8000/enumerator_point_interne_detail/1/42")
        .then(response => {
     
            this.pointsinterne = response.data;
            var json = response.data;
            console.log("json " + this.series[0].data )
             this.series[0].data.push(parseFloat(json.vitesse) / 10);
           this.series[0].data.push(parseFloat(json.taux_erreur));
            this.series[0].data.push(parseFloat(json.avis));
            this.stars =parseFloat(json.avis);
            if(this.stars < 3){
                this.a = false;
            }
            else {
                                this.a = true;

            }

              

             
        })
       .catch(function (error) {
             console.log(error);
        });
    }
};

</script>
