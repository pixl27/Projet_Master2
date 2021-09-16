<template>
  <div class="about">
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
   <div class="mt-8"><!-- sous-titre --><div class="py-2 items-center"><span class="mr-2"><i class="fas fa-map-marked-alt text-blue-400"></i></span><span class="text-xl uppercase font-semibold text-instat-blue"> Gestion de Enquete </span></div><!-- main content --><div class="flex bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 w-full bg-white border-b border-gray-200"><div class="px-4 pl-5"><div class="block mb-4 items-center pb-4"><div class="text-sm text-gray-700 mb-4"></div><b-button v-b-modal.modal-1 class="px-4 py-2  border
    border-gray-500 rounded-sm font-semibold text-xs text-gray-700 shadow-sm uppercase tracking-widest hover:bg-gray-50 active:bg-gray-300 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150">Ajouter Nouveau Enquete</b-button></div><div class="w-full block items-center"><ul class="px-0"></ul></div><div class="vfm vfm--inset vfm--fixed" data-v-2836fdb5="" style="z-index: 1000; display: none;"><!--v-if--><div class="vfm__container vfm--absolute vfm--inset vfm--outline-none flex justify-center items-center" aria-expanded="false" role="dialog" aria-modal="true" tabindex="-1" data-v-2836fdb5="" style="display: none;"><div class="vfm__content relative flex flex-col lg:w-8/12 md:w-8/12 sm:w-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900" data-v-2836fdb5=""><span class="mr-8 font-semibold text-xl text-gray-500 leading-tight " data-v-2836fdb5-s="">Ajouter une région de résidence </span><div class="flex-grow overflow-y-visible h-full my-4 text-gray-500 text-sm" data-v-2836fdb5-s=""><div class="h-full" data-v-2836fdb5-s=""><form class="h-full" data-v-2836fdb5-s=""><div class="flex items px-4 pl-5 grid grid-cols-1 lg:grid-cols-2 gap-4" data-v-2836fdb5-s=""><div data-v-2836fdb5-s=""><!--v-if--><!-- année début --><div data-v-2836fdb5-s=""><label class="block font-medium text-sm text-gray-700" for="start_year" data-v-2836fdb5-s=""><span>Année début</span></label><input class="focus:ring-opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 mt-1 block w-5/6" id="start_year" name="start_year" type="text" autofocus="" autocomplete="start_year" data-v-2836fdb5-s="" data-mask="####" data-mask-raw-value="" data-mask-inited="true"><!--v-if--></div><!-- année fin --><div class="mt-4" data-v-2836fdb5-s=""><label class="block font-medium text-sm text-gray-700" for="end_year" data-v-2836fdb5-s=""><span>Année fin</span></label><input class="focus:ring-opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 mt-1 block w-5/6" id="end_year" name="end_year" type="text" autofocus="" autocomplete="end_year" data-v-2836fdb5-s="" data-mask="####" data-mask-raw-value="" data-mask-inited="true"><!--v-if--></div><!-- region --><div class="mt-4 w-5/6" data-v-2836fdb5-s=""><label class="block font-medium text-sm text-gray-700 mb-1" for="region" data-v-2836fdb5-s=""></label><div tabindex="-1" class="multiselect border-red-600" role="combobox" aria-owns="listbox-residence_id" data-v-2836fdb5-s=""><div class="multiselect__select"></div><div class="multiselect__tags"><div class="multiselect__tags-wrap" style="display: none;"></div><!--v-if--><div class="multiselect__spinner" style="display: none;"></div><input name="residence_id" id="residence_id" type="text" autocomplete="off" spellcheck="false" placeholder="Choisissez un diplôme" tabindex="0" class="multiselect__input" aria-controls="listbox-residence_id" style="width: 0px; position: absolute; padding: 0px;"><!--v-if--><span class="multiselect__placeholder">Choisissez un diplôme</span></div><div class="multiselect__content-wrapper" tabindex="-1" style="max-height: 300px; display: none;"><ul class="multiselect__content" role="listbox" id="listbox-residence_id" style="display: inline-block;"><!--v-if--><li class="multiselect__element" id="residence_id-0" role="option"><span class="multiselect__option--highlight multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANALAMANGA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-1" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>VAKINANKARATRA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-2" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ITASY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-3" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>BONGOLAVA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-4" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>HAUTE MATSIATRA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-5" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>AMORON I MANIA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-6" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>VATOVAVY FITOVINANY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-7" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>IHOROMBE</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-8" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ATSIMO ATSINANANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-9" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ATSINANANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-10" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANALANJIROFO</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-11" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ALAOTRA MANGORO</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-12" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>BOENY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-13" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>SOFIA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-14" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>BETSIBOKA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-15" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>MELAKY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-16" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ATSIMO ANDREFANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-17" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANDROY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-18" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>ANOSY</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-19" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>MENABE</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-20" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>DIANA</span></span><!--v-if--></li><li class="multiselect__element" id="residence_id-21" role="option"><span class="multiselect__option" data-select="Appuyez sur entrer" data-selected="Selected" data-deselect="Entrer pour enlever"><span>SAVA</span></span><!--v-if--></li><li style="display: none;"><span class="multiselect__option">No elements found. Consider changing the search query.</span></li><li style="display: none;"><span class="multiselect__option">List is empty.</span></li></ul></div></div><!--v-if--></div></div><!-- ./col-1 --></div><div class="flex justify-end mt-6" data-v-2836fdb5-s=""><button type="submit" class="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150" data-v-2836fdb5-s=""><!--v-if--> Enregistrer </button></div></form></div></div><!-- <div class="flex-shrink-0 flex justify-center items-center pt-4">
      <button-white class="vfm-btn mx-1" @click="$emit('confirm', close)">Valider</button-white>
      <button-white class="vfm-btn mx-1" @click="$emit('cancel', close)">Annuler</button-white>
    </div> --><button class="absolute top-0 right-0 mt-2 mr-2" data-v-2836fdb5-s=""><span class="text-gray-500" data-v-2836fdb5-s=""><i class="fas fa-times" data-v-2836fdb5-s=""></i></span></button><!--v-if--></div></div></div></div></div></div></div>
 <b-modal id="modal-2" ref="modal-2" hide-footer title="Enquete">
    <p class="my-4">Modifier Enquete</p>
     <b-form @submit="modifier"  v-if="show">
      <b-form-group
        id="input-group-1"
        label="titre:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="formupdate.name"
          
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formupdate.description"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
 <b-form-group id="input-group-5" label="Détail:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formupdate.detail_link"
          placeholder="Entrez la vrai réponse"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Date de Lancement:" label-for="input-3">
        <b-form-datepicker id="example-datepicker" v-model="formupdate.launch_date" class="mb-2"></b-form-datepicker>
 
      </b-form-group>
       <b-form-group id="input-group-6" label="Date de Fin:" label-for="input-6">
        <b-form-datepicker id="example-datepicker" v-model="formupdate.deadline_date" class="mb-2"></b-form-datepicker>
  
      </b-form-group>

<b-button type="submit" style="margin-top:2%" variant="primary">Submit</b-button>
      <b-button style="margin-top:2%;margin-left:68%" @click="hideModalupdate" variant="danger">Cancel</b-button>

    </b-form>
  </b-modal>
  
  <b-modal id="modal-1" ref="modal-1" hide-footer title="Enquete">
    <p class="my-4">Ajouter Nouvelle Enquete</p>
     <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Titre:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
 <b-form-group id="input-group-5" label="Détail:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.detail_link"
          placeholder="Entrez la vrai réponse"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Date de Lancement:" label-for="input-3">
        <b-form-datepicker id="example-datepicker" v-model="form.launch_date" class="mb-2"></b-form-datepicker>
 
      </b-form-group>
       <b-form-group id="input-group-6" label="Date de Fin:" label-for="input-6">
        <b-form-datepicker id="example-datepicker" v-model="form.deadline_date" class="mb-2"></b-form-datepicker>
  
      </b-form-group>

      <b-button type="submit" style="margin-top:2%" variant="primary">Submit</b-button>
      <b-button style="margin-top:2%;margin-left:68%" @click="hideModal" variant="danger">Cancel</b-button>

    </b-form>
  </b-modal>
  <b-modal id="modal-3" ref="modal-3"  hide-footer title="Confirmer Suppression">
     <b-form @submit="supprimer" v-if="show">
    <b-button type="submit" style="margin-top:2%" variant="primary">Valider</b-button>
      <b-button style="margin-top:2%;margin-left:68%" @click="hideModaldelete" variant="danger">Cancel</b-button>
    </b-form>
  </b-modal>
 <div>
    <b-table striped hover :items="items" :fields="fields">
       <template v-slot:cell(name)="row">
          <router-link :to="`detailenquete/${row.item.id}`">{{row.item.name}}</router-link>

          </template>
        <template v-slot:cell(supprimer)="row">
            <b-button size="sm" v-b-modal.modal-3 @click="showdeletemodal(row, row.item.id)" variant="danger">
               Supprimer
            </b-button>
          </template>
             <template v-slot:cell(modifier)="row">
            <b-button b-button v-b-modal.modal-2 @click="getbyid(row, row.item.id)" size="sm"  class="mr-2">
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
          isLoading: false,
          fullPage: true,
        fields: ['id', 'name', 'description' , 'supprimer','modifier'],
        items: [],
        id:0,
        iddelete:0,
        form: {
          name: '',
          description: '',
          team : null,
          detail_link:'',
          launch_date: '',
          deadline_date: '',
          applicants_number: 0,
          is_active: 1
        },
        formupdate: {
          name: '',
          description: '',
          detail_link:'',
          launch_date: '',
          deadline_date: ''
         
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
  methods: {
    hideModal() {
        this.$refs['modal-1'].hide()
      },
      hideModalupdate() {
        this.$refs['modal-2'].hide()
      },
        hideModaldelete() {
        this.$refs['modal-3'].hide()
      },
      showdeletemodal(row,data){
      console.log("d " + this.iddelete)
this.iddelete = data;
    },
    supprimer() {
       // get all Enquete
          this.$toast.open({
        message: "Enquete Supprimer",
        type: "danger",
        duration: 3000,
        dismissible: true
      })
       this.$refs['modal-3'].hide();
               this.isLoading = true;
   axios.delete("http://127.0.0.1:8000/survey_detail/" + this.iddelete)
        .then(response2 => {
     console.log(response2);
           axios.get("http://127.0.0.1:8000/survey")
        .then(response => {
     
            this.items = response.data;
                            this.isLoading = false;

        })
       .catch(function (error) {
             console.log(error);
        });
             
        })
       .catch(function (error) {
             console.log(error);
        });
  },
     getbyid(row, data) {
     console.log("delted questionnaire " + data);
      axios.get("http://127.0.0.1:8000/survey_detail/" + data)
        .then(response => {
     
            this.id = data;
            this.formupdate.name = response.data.name;
            this.formupdate.description = response.data.description;
            this.formupdate.detail_link = response.data.detail_link;
            this.formupdate.launch_date = response.data.launch_date;
            this.formupdate.deadline_date = response.data.deadline_date;
         
             
        })
       .catch(function (error) {
             console.log(error);
        });
    } ,
       onSubmit(event) {
          this.$refs['modal-1'].hide();
               this.isLoading = true;
        event.preventDefault()
// ajouter Enquete
   axios.post("http://127.0.0.1:8000/survey/" ,  JSON.stringify(this.form) )
        .then(response => {
     
            console.log( response + "enquete ajouté");
axios.get("http://127.0.0.1:8000/survey")
        .then(response => {
     
            this.items = response.data;
            this.isLoading = false;
     this.$toast.open({
        message: "Enquete ajouté",
        type: "success",
        duration: 3000,
        dismissible: true
      })
        })
       .catch(function (error) {
             console.log(error);
        });

        })
       .catch(function (error) {
             console.log(error);
        });
  },
   modifier(event) {
       this.$refs['modal-2'].hide();
               this.isLoading = true;
        event.preventDefault()
      
// ajouter Enquete
   axios.post("http://127.0.0.1:8000/survey_detail/" + this.id,  JSON.stringify(this.formupdate) )
        .then(response => {
     
            console.log( response + "enquete updaté");

            axios.get("http://127.0.0.1:8000/survey")
        .then(response2 => {
     
            this.items = response2.data;
             this.$toast.open({
        message: "Enquete mis a jour",
        type: "success",
        duration: 3000,
        dismissible: true
      })
            this.isLoading=false;
             
        })
       .catch(function (error) {
             console.log(error);
        });
             
        })
       .catch(function (error) {
             console.log(error);
        });
  },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  },
  created () {
    // get all Enquete
   axios.get("http://127.0.0.1:8000/survey")
        .then(response => {
     
            this.items = response.data;
             
        })
       .catch(function (error) {
             console.log(error);
        });
  }
  }
</script>
