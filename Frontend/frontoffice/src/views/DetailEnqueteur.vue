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
                        <h4 class="mt-0 mb-0">Points Global</h4>
                        <h4 class="mt-0 mb-0">Nom Prenom</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>Addresse</p>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">Points</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Diplome</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">Points</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Dialecte</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">Points</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Région</small>
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

export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ["Farming", "Polyvalence", "Pushing", "Combat", "Support"]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49]
        }]
      }
    },
};

</script>
