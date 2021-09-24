<template>
  <div class="connexionfront">
   <div id="app" data-page="{&quot;component&quot;:&quot;Welcome&quot;,&quot;props&quot;:{&quot;errors&quot;:{},&quot;auth&quot;:null,&quot;profile&quot;:{&quot;default_pdp&quot;:&quot;images\/pdp\/user.svg&quot;},&quot;canLogin&quot;:true,&quot;canRegister&quot;:true,&quot;laravelVersion&quot;:&quot;8.60.0&quot;,&quot;phpVersion&quot;:&quot;7.3.30-1+ubuntu18.04.1+deb.sury.org+1&quot;},&quot;url&quot;:&quot;\/&quot;,&quot;version&quot;:&quot;b0dc384d18d9d36bacca91733d2dfe67&quot;}" data-v-app=""><div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"><div><a href="/"><img src="https://i.imgur.com/9KtM1cN.png" alt="" class="w-36 h-auto fill-current text-gray-500"></a></div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"><!--v-if--><!--v-if--><div><label class="block font-medium text-sm text-gray-700" for="email"><span>Email</span></label><input v-model="email" class="focus:ring-opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 mt-1 block w-full" id="email" type="email" required="" autofocus="" autocomplete="username"></div><div class="mt-4"><label class="block font-medium text-sm text-gray-700" for="password"><span>Password</span></label><input v-model="password" class="focus:ring-opacity-50 rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 mt-1 block w-full" id="password" type="password" required="" autocomplete="current-password"></div><div class="block mt-4"><label class="flex items-center"><input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"><span class="ml-2 text-sm text-gray-600">Remember me</span></label></div><div class="flex items-center justify-end mt-4"><a class="text-sm text-blue-600 hover:text-blue-900" href="https://enqueteurs.instat.mg/forgot-password"> Mot de passe oublié? </a><a class="mx-4 text-sm text-blue-700 hover:text-blue-900" href="https://enqueteurs.instat.mg/register"> S'inscrire </a><button @click="connect" class="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4"><!--v-if--> Connexion </button></div></div></div></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
                email:'',
                password:''
        }
    } ,
    methods: {
    connect(){
       if(this.email == "maheryrakotondrazaka@gmail.com" && this.password =="Maherylepro1"){
         window.location.href = 'http://localhost:8080/acceuilfront'
       }
       else {
            this.$toast.open({
        message: "Email incorrect ou Mot de passe incorrect",
        type: "warning",
        duration: 3000,
        dismissible: true
      })
       }
    },
  }
}
</script>
