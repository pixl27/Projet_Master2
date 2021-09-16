<template>
  <div class="questionnairefront">
  
    <!-- If you want to show survey, uncomment the line below -->
    <h1>Quizz de Test de personnalité</h1>
 <survey v-if="!istestpassed" :survey="survey"></survey> 

   <h2 v-if="istestpassed">Vous avez déja passé le test</h2>
    <!-- If you want to hide Survey Creator, comment the line below -->
   <!-- <survey-creator></survey-creator>-->
  <div id="surveyResult">
   <h1 >{{this.personnalite}}</h1>

  </div>
  </div>
  
</template>

<script>
import * as Survey from "survey-vue";
import axios from 'axios';
import "survey-vue/survey.css";


    Survey.StylesManager.applyTheme("default");

  




        
    export default {
        name: "surveyjs-component",
      
        data() {
            return {
                     items : [],
                     idprofil:42,
                     gender:"",
                     personnalite:"",
                     istestpassed:false,
                     myprofil:null,
                json : {},
                survey:  new Survey.Model(this.json)

            };
        },
  created () {
var idprofil = 46;
this.idprofil = idprofil;
var gender = "";
 axios.get("http://127.0.0.1:8000/getPersonnalityByEnumeratorId/"+ idprofil)
        .then(response => {
         console.log(response);
         this.istestpassed = true;
             
        })
       .catch(function (error) {
         this.istestpassed = false
             console.log(error);
        });
 axios.get("http://127.0.0.1:8000/enumerator_detail/"+ this.idprofil)
        .then(response => {
     
            this.myprofil = response.data;
          gender = this.myprofil.gender;
             
        })
       .catch(function (error) {
             console.log(error);
        });

       this.json = {
  title: "Quiz Personnalité",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 10000,
  maxTimeToFinish: 25000,
  firstPageIsStarted: true,
  startSurveyText: "Démarrer",
  pages: [
    { questions: [ {type: "html", html: "Vous aller faire un Quiz sur . <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
    {
            questions: [
                {
                    type: "radiogroup",
                    name: "openness",
                    title: "Que pensez vous des personnes qui n'ont pas les memes cultures que vous ? sur une échelle de 0 à 8 (Je n'approuve pas à je les soutiens)",
                    choices: [
                        "0", "1", "2", "3", "4","5","6","7","8"
                    ],
                    correctAnswer: "0"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "neuroticism",
                    title: "Est ce que vous etes du genre suceptible ? sur une échelle de 0 à 8 (pas du tout à trop )",
                    choices: [
                        "0", "1", "2", "3", "4","5","6","7","8"
                    ],
                    correctAnswer: "0"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "conscientiousness",
                    title: "Si vous etes sur de ne pas etres pris pendant un délit, vous sentirez vous coupable ? sur une échelle de 0 à 8 (aucun remord du tout à j'en ai conscient )",
                    choices: [
                        "0", "1", "2", "3", "4","5","6","7","8"
                    ],
                    correctAnswer: "0"
                }
            ]
        },
          {
            questions: [
                {
                    type: "radiogroup",
                    name: "agreeableness",
                    title: "Est ce que vous aimez aider les autres sans contreparties? sur une échelle de 0 à 8 (non j'ai besoin de quelque chose à oui je le fais sans aucun soucis )",
                    choices: [
                        "0", "1", "2", "3", "4","5","6","7","8"
                    ],
                    correctAnswer: "0"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "extraversion",
                    title: "Aimez vous sortir en companie des autres ? sur une échelle de 0 à 8 (je deteste à j'adore )",
                    choices: [
                        "0", "1", "2", "3", "4","5","6","7","8"
                    ],
                    correctAnswer: "0"
                }
            ]
        },
  ],
  completedHtml: "Merci"
};
this.survey = new Survey.Model(this.json);
this.survey
    .onComplete
    .add(function (sender) {
      var jsonstring = JSON.stringify(sender.data, null, 3);
      console.log("sendat " + sender.data.openness)
            console.log("sendat dsds" +jsonstring.openness)
            var jsontoinsert = null;
            console.log("mon genre " + gender)
      if(gender=="Male"){
     jsontoinsert = {"genre":"1", "age":"18","openness":sender.data.openness,"neuroticism":sender.data.neuroticism,"conscientiousness":sender.data.conscientiousness,"agreeableness":sender.data.agreeableness,"extraversion":sender.data.extraversion,"enumerator":idprofil }

      }
      else {
 jsontoinsert = {"genre":"0", "age":"18","openness":sender.data.openness,"neuroticism":sender.data.neuroticism,"conscientiousness":sender.data.conscientiousness,"agreeableness":sender.data.agreeableness,"extraversion":sender.data.extraversion,"enumerator":idprofil }

      }
      console.log("ds" + JSON.stringify(jsontoinsert));

 axios.post("http://127.0.0.1:8000/insertPersonalityEnumerator" ,  jsontoinsert )
        .then(response => {
     
            console.log( response + "personnalité enumerator inserer");
             axios.get("http://127.0.0.1:8000/getPersonnalityByEnumeratorId/"+ idprofil)
        .then(response => {
    
         if(response.data.personality=="dependable"){
           this.personnalite = " Dépendant aux Gens"
           document
            .querySelector('#surveyResult')
            .textContent = "Vous etes : " + this.personnalite;
         }
           if(response.data.personality=="serious"){
            this.personnalite = "Sérieux"
   document
            .querySelector('#surveyResult')
            .textContent = "Vous etes : " + this.personnalite;
         }
           if(response.data.personality=="responsible"){
        this.personnalite = "Résponsable"
           document
            .querySelector('#surveyResult')
            .textContent = "Vous etes : " + this.personnalite;
         }
           if(response.data.personality=="lively"){
           this.personnalite = "Joyeux"
              document
            .querySelector('#surveyResult')
            .textContent = "Vous etes : " + this.personnalite;
         }
           if(response.data.personality=="extraverted"){
           this.personnalite = "Extravertis"
         }
             
        })
       .catch(function (error) {
         this.personnalité = "test non passé"
             console.log(error);
        });
        })
       .catch(function (error) {
             console.log(error);
        });


    });
    } ,
    
    }

 
</script>
