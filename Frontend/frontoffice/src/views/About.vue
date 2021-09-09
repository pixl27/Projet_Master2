<template>
  <div class="about">
    
   <div class="mt-8"><!-- sous-titre --><div class="py-2 items-center"><span class="mr-2"><i class="fas fa-map-marked-alt text-blue-400"></i></span><span class="text-xl uppercase font-semibold text-instat-blue"> Gestion de Questionnaire </span></div><!-- main content --><div class="flex bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 w-full bg-white border-b border-gray-200"><div class="px-4 pl-5"><div class="block mb-4 items-center pb-4"><div class="text-sm text-gray-700 mb-4"></div><b-button v-b-modal.modal-1 class="px-4 py-2  border
    border-gray-500 rounded-sm font-semibold text-xs text-gray-700 shadow-sm uppercase tracking-widest hover:bg-gray-50 active:bg-gray-300 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Ajouter une Questionnaire</b-button></div><div class="w-full block items-center"><ul class="px-0"></ul></div><div class="vfm vfm--inset vfm--fixed" data-v-2836fdb5="" style="z-index: 1000; display: none;"><!--v-if--><div class="vfm__container vfm--absolute vfm--inset vfm--outline-none flex justify-center items-center" aria-expanded="false" role="dialog" aria-modal="true" tabindex="-1" data-v-2836fdb5="" style="display: none;"><div class="vfm__content relative flex flex-col lg:w-8/12 md:w-8/12 sm:w-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900" data-v-2836fdb5=""><span class="mr-8 font-semibold text-xl text-gray-500 leading-tight " data-v-2836fdb5-s="">Ajouter une région de résidence </span><div class="flex-grow overflow-y-visible h-full my-4 text-gray-500 text-sm" data-v-2836fdb5-s=""><div class="h-full" data-v-2836fdb5-s=""><form class="h-full" data-v-2836fdb5-s=""><div class="flex items px-4 pl-5 grid grid-cols-1 lg:grid-cols-2 gap-4" data-v-2836fdb5-s=""><div data-v-2836fdb5-s=""><!--v-if--><!-- année début --><div data-v-2836fdb5-s=""><label class="block font-medium text-sm text-gray-700" for="start_year" data-v-2836fdb5-s=""><span>Année début</span></label><input class="focus:ring-opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 mt-1 block w-5/6" id="start_year" name="start_year" type="text" autofocus="" autocomplete="start_year" data-v-2836fdb5-s="" data-mask="####" data-mask-raw-value="" data-mask-inited="true"><!--v-if--></div><!-- année fin --><div class="mt-4" data-v-2836fdb5-s=""><label class="block font-medium text-sm text-gray-700" for="end_year" data-v-2836fdb5-s=""><span>Année fin</span></label><input class="focus:ring-opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 mt-1 block w-5/6" id="end_year" name="end_year" type="text" autofocus="" autocomplete="end_year" data-v-2836fdb5-s="" data-mask="####" data-mask-raw-value="" data-mask-inited="true"><!--v-if--></div><!-- region --><div class="mt-4 w-5/6" data-v-2836fdb5-s=""><label class="block font-medium text-sm text-gray-700 mb-1" for="region" data-v-2836fdb5-s=""></label><div tabindex="-1" class="multiselect border-red-600" role="combobox" aria-owns="listbox-residence_id" data-v-2836fdb5-s=""><div class="multiselect__select"></div><div class="multiselect__tags"><div class="multiselect__tags-wrap" style="display: none;"></div><!--v-if--><div class="multiselect__spinner" style="display: none;"></div><input name="residence_id" id="residence_id" type="text" autocomplete="off" spellcheck="false" placeholder="Choisissez un diplôme" tabindex="0" class="multiselect__input" aria-controls="listbox-residence_id" style="width: 0px; position: absolute; padding: 0px;"><!--v-if--><span class="multiselect__placeholder">Choisissez un diplôme</span></div><div class="multiselect__content-wrapper" tabindex="-1" style="max-height: 300px; display: none;"><ul class="multiselect__content" role="listbox" id="listbox-residence_id" style="display: inline-block;"><!--v-if--><li class="multiselect__element" id="residence_id-0" role="option"><span class="multiselect__option--highlight multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANALAMANGA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-1" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>VAKINANKARATRA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-2" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ITASY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-3" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>BONGOLAVA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-4" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>HAUTE MATSIATRA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-5" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>AMORON I MANIA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-6" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>VATOVAVY FITOVINANY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-7" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>IHOROMBE</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-8" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ATSIMO ATSINANANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-9" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ATSINANANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-10" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANALANJIROFO</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-11" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ALAOTRA MANGORO</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-12" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>BOENY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-13" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>SOFIA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-14" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>BETSIBOKA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-15" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>MELAKY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-16" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ATSIMO ANDREFANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-17" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANDROY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-18" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANOSY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-19" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>MENABE</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-20" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>DIANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-21" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>SAVA</span></span><!--v-if--></li><li style="display: none;"><span class="multiselect__option">No elements found. Consider changing the search query.</span></li><li style="display: none;"><span class="multiselect__option">List is empty.</span></li></ul></div></div><!--v-if--></div></div><!-- ./col-1 --></div><div class="flex justify-end mt-6" data-v-2836fdb5-s=""><button type="submit" class="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150" data-v-2836fdb5-s=""><!--v-if--> Enregistrer </button></div></form></div></div><!-- <div class="flex-shrink-0 flex justify-center items-center pt-4">
      <button-white class="vfm-btn mx-1" @click="$emit('confirm', close)">Valider</button-white>
      <button-white class="vfm-btn mx-1" @click="$emit('cancel', close)">Annuler</button-white>
    </div> --><button class="absolute top-0 right-0 mt-2 mr-2" data-v-2836fdb5-s=""><span class="text-gray-500" data-v-2836fdb5-s=""><i class="fas fa-times" data-v-2836fdb5-s=""></i></span></button><!--v-if--></div></div></div></div></div></div></div>
 <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Ajouter Nouveau Questionnaire</p>
     <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Questions:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="form.question"
          
          placeholder="Enter Question"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Liste Réponse séparé par virgule:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.listereponses"
          placeholder="Enter Liste reponses"
          required
        ></b-form-input>
      </b-form-group>
 <b-form-group id="input-group-5" label="Réponse:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.lareponse"
          placeholder="Entrez la vrai réponse"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Dialecte:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.dialect"
          :options="dialect"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-modal>

<b-modal id="modal-2" title="BootstrapVue">
    <p class="my-4">Modifier Questionnaire</p>
     <b-form @submit="modifier" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Questions:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="formupdate.question"
          
          placeholder="Enter Question"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Liste Réponse séparé par virgule:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formupdate.listereponses"
          placeholder="Enter Liste reponses"
          required
        ></b-form-input>
      </b-form-group>
 <b-form-group id="input-group-5" label="Réponse:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formupdate.lareponse"
          placeholder="Entrez la vrai réponse"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Dialecte:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formupdate.dialect"
          :options="dialect"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ formupdate }}</pre>
    </b-card>
  </b-modal>

 <div>
    <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(supprimer)="row">
            <b-button size="sm" @click="supprimer(row, row.item.id)" variant="danger">
               Supprimer
            </b-button>
          </template>
             <template v-slot:cell(modifier)="row">
            <b-button v-b-modal.modal-2  size="sm" @click="getbyid(row, row.item.id)" class="mr-2">
               Modifier
            </b-button>
          </template>
    </b-table>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
      return {
        fields: ['question', 'listereponses','lareponse', 'supprimer','modifier'],
        id:0,
        items: [
          
        ],form: {
          dialect: '',
          circonscription: null,
          question:'',
          listereponses: '',
          lareponse: ''
        },formupdate: {
          dialect: '',
          circonscription: null,
          question:'',
          listereponses: '',
          lareponse: ''
        },
        dialect: [],
        show: true
      }
    },
  methods: {
    supprimer(row, data) {
     console.log("delted questionnaire " + data);
        axios.delete("http://127.0.0.1:8000/questionnaire_detail/" + data)
        .then(response2 => {
          console.log(response2 + "questionnaire deleted");
    })
    
    },
     getbyid(row, data) {
     console.log("delted questionnaire " + data);
     this.id = data;

    axios.get("http://127.0.0.1:8000/questionnaire_detail/" + data)
        .then(response => {
     
            this.id = data;
            this.formupdate.dialect = response.data.id;
            
            this.formupdate.question = response.data.question;
            this.formupdate.listereponses = response.data.listereponses;
            this.formupdate.lareponse = response.data.lareponse;
         
             
        })
       .catch(function (error) {
             console.log(error);
        });

    } ,
       onSubmit(event) {
        event.preventDefault()
     // ajouter Questionnaire
   axios.post("http://127.0.0.1:8000/questionnaire/" ,  JSON.stringify(this.form) )
        .then(response => {
     
            console.log( response + "questionnaire ajouté");
             
        })
       .catch(function (error) {
             console.log(error);
        });
      },
      modifier(event) {
    event.preventDefault()
       axios.post("http://127.0.0.1:8000/questionnaire_detail/" + this.id,this.formupdate)
        .then(response => {
     
           console.log(response + " questionnaire update");
             
        })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  },
  created () {
    // get all questionnaire
     axios.get("http://127.0.0.1:8000/questionnaire")
        .then(response => {
        
          this.items = response.data;
     
             
        })
       .catch(function (error) {
             console.log(error);
        });
        //get all Dialect
   axios.get("http://127.0.0.1:8000/dialect")
        .then(response => {
        
          var array = JSON.parse(JSON.stringify(response.data))
            for( var i = 0; i <= array.length; i++){
              var a = {"text":array[i].nom,"value":array[i].id};
             this.dialect.push(a);
              }
     
             
        })
       .catch(function (error) {
             console.log(error);
        });
  }
  }
</script>
