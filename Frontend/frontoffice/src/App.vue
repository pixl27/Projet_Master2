<template>
  <div id="app">
    <div v-if="!isfront && !islogin" id="nav">

<nav class="bg-white border-b border-gray-100"><!-- Primary Navigation Menu --><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><!-- Logo --><div class="flex-shrink-0 flex items-center"><a href="https://enqueteurs.instat.mg/dashboard"><img src="https://i.imgur.com/9KtM1cN.png" alt="" class="block h-12 w-auto"></a></div><!-- Navigation Links --><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/about"> Gestion Questionnaire </router-link> <router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/enqueteback">Gestion Enquete</router-link><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/profilenqueteback">Gestion Profil Enquete</router-link><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/ranking">Ranking</router-link><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/chatback">Chat</router-link></div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><!-- Settings Dropdown --><div class="ml-3 relative"><div class="relative"><div><span class="inline-flex rounded-md"><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">Admin <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></span></div><!-- Full Screen Dropdown Overlay --><div class="fixed inset-0 z-40" style="display: none;"></div><div class="absolute z-50 mt-2 rounded-md shadow-lg w-48 origin-top-right right-0" style="display: none;"><div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white"><button class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"> Se déconnecter </button></div></div></div></div></div><!-- Hamburger --><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><!-- Responsive Navigation Menu --><div class="hidden sm:hidden"><div class="pt-2 pb-3 space-y-1"></div><!-- Responsive Settings Options --><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"></div><div class="mt-3 space-y-1"><button class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"> Se déconnecter </button></div></div></div></nav>


    </div>
<nav v-if="isfront && !islogin" class="bg-white border-b border-gray-100"><!-- Primary Navigation Menu --><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><!-- Logo --><div class="flex-shrink-0 flex items-center"><a href="https://enqueteurs.instat.mg/dashboard"><img src="https://i.imgur.com/9KtM1cN.png" alt="" class="block h-12 w-auto"></a></div><!-- Navigation Links --><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/acceuilfront"> Les offres </router-link> <router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/questionnairefront"> Passez Test de Dialecte et Région </router-link><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/questionnairepersonalitefront">Passez Test de personnalité</router-link><router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" to="/chatfront"> Chat</router-link> <router-link class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out" to="/profildetailfront"> Mon Profil </router-link></div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><!-- Settings Dropdown --><div class="ml-3 relative"><div class="relative"><div><span class="inline-flex rounded-md"><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">Rakotondrazaka <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></span></div><!-- Full Screen Dropdown Overlay --><div class="fixed inset-0 z-40" style="display: none;"></div><div class="absolute z-50 mt-2 rounded-md shadow-lg w-48 origin-top-right right-0" style="display: none;"><div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white"><button class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"> Se déconnecter </button></div></div></div></div></div><!-- Hamburger --><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><!-- Responsive Navigation Menu --><div class="hidden sm:hidden"><div class="pt-2 pb-3 space-y-1"><a class="block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" href="https://enqueteurs.instat.mg/dashboard"> Les offres </a><a class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out" href="https://enqueteurs.instat.mg/mon-profil"> Mon Profil </a></div><!-- Responsive Settings Options --><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">Rakotondrazaka</div><div class="font-medium text-sm text-gray-500">maheryrakotondrazaka@gmail.com</div></div><div class="mt-3 space-y-1"><button class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"> Se déconnecter </button></div></div></div></nav>

    <router-view/>

  </div>
</template>
<script>
export default {
    data() {
        return {
      isfront:null,
      islogin:true,
        }
    },
    created (){
      if(window.location.pathname == "/questionnairefront" || window.location.pathname == "/acceuilfront" ){
        console.log("vrai")
        this.isfront = true;
      }
      else {
                this.isfront = false;

      }
      if(window.location.pathname == "/loginfront" || window.location.pathname == "/connexionfront" ){
        console.log("vrai")
        this.islogin = true;
      }
      else {
                this.islogin = false;

      }
}
  }
console.log("current url " +  window.location.pathname);
</script>
<style>
@import './assets/styles/all.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
