<template>
  <div class="ranking">
   <div class="mt-8">

<div class="py-2 items-center"><span class="mr-2"><i class="fas fa-map-marked-alt text-blue-400"></i></span><span class="text-xl uppercase font-semibold text-instat-blue"> RANKING MEILLEUR ENQUETEUR</span></div>

   </div>

<b-table striped hover :items="items" :fields="fields">
       
    </b-table>


  </div>
</template>

<script>
export default {
    data() {
        return {
        fields: ['Nom','Points','Ranking'],
        items: []


        }
    }
  }
</script>
