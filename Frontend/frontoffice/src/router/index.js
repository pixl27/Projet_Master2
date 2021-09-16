import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueApexCharts from 'vue-apexcharts'
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast, {
  // One of the options
  position: 'top-right'
});
Vue.use(Loading);
Vue.use(VueRouter);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/questionnairefront',
    name: 'QuestionnaireFront',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionnaireFront.vue')
  }
  ,
  {
    path: '/enqueteback',
    name: 'EnqueteBack',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EnqueteBack.vue')
  },
  {
    path: '/profilenqueteback',
    name: 'ProfilEnqueteBack',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilEnqueteBack.vue')
  },
  {
    path: '/detailenquete/detailenqueteurback/detailEnqueteur/:idenquete/:idenqueteur',
    name: 'detailEnqueteur',
    params: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailEnqueteur.vue')
  } ,
  {
    path: '/enqueteurback',
    name: 'enqueteurback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EnqueteurBack.vue')
  } ,
  {
    path: '/ranking',
    name: 'ranking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ranking.vue')
  } ,
  {
    path: '/detailenquete/:id',
    name: 'detailenquete',
    params: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailEnquete.vue')
  } ,
  {
    path: '/detailenquete/detailenqueteurback/:id',
    name: 'detailenqueteurback',
    params: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailEnqueteurBack.vue')
  } ,
  {
    path: '/questionnairepersonalitefront',
    name: 'questionnairepersonalitefront',
    params: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionnairePersonnaliteFront.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
