<template>
  <div style="margin-top:5%" class="questionnairefront">
  
    <!-- If you want to show survey, uncomment the line below -->
    <h1>Quizz Generale</h1>
 <survey :survey="survey"></survey> 
    <!-- If you want to hide Survey Creator, comment the line below -->
   <!-- <survey-creator></survey-creator>-->
  <div id="surveyResult"></div>
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
                json : {},
                questions: [{ questions: [ {type: "html", html: "Vous aller faire un Quiz sur . <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] }],
                survey:  new Survey.Model(this.json)
            };
        },
  created () {
       this.json = {
  title: "Quiz Dialecte",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 10,
  maxTimeToFinish: 25,
  firstPageIsStarted: true,
  startSurveyText: "Démarrer",
  pages: [
    { questions: [ {type: "html", html: "Vous aller faire un Quiz sur . <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
    
  ],
  completedHtml: "<h4>Vous avez répondu vrai a  <b>{correctedAnswers}</b> questions sur <b>{questionCount}</b>.</h4>"
}





    // get all Enquete
   axios.get("http://127.0.0.1:8000/questionnaire_listByEnumerator/42")
        .then(response => {
           var array = JSON.parse(JSON.stringify(response.data))

   for (var i = 0 ; i< array.length;i++){
 var a = {
      questions:[{ type: "radiogroup",
          name: "question"+i,
          title: array[i].question,
          choices: array[i].listereponses.split(","),
          correctAnswer: array[i].lareponse
          }] 
           
    }
    this.questions.push(a);
    this.json.pages.push(a);
   }
   
  this.survey = new Survey.Model(this.json)
this.survey
    .onComplete
    .add(function (sender) {
  
  axios.get("http://127.0.0.1:8000/questionnaire_listByEnumerator/42")
        .then(response => {
        
         var array = JSON.parse(JSON.stringify(response.data))
           //var array2 = JSON.parse(JSON.stringify(sender.data))
           console.log( Object.entries(response.data).map(item => item[0]));
          for( var i = 0; i <= array.length; i++){
           if(array[i].lareponse ==  Object.entries(sender.data).map(item => item[1])[i]){
             console.log("true " + array[i].lareponse + "  " + Object.entries(sender.data).map(item => item[1])[i])

 axios.post("http://127.0.0.1:8000/questionnaire_enumerator_list/" ,  JSON.stringify({"questionnaire": array[i].id.toString(),
        "enumerator": "42",
        "vraioufaux": "1"
}) )
        .then(response => {
     
             console.log( response + "questionnaire enumerator inserer");
             
        })
       .catch(function (error) {
             console.log(error);
        });

           }
           else {
                              console.log("false " + array[i].lareponse + "  " + Object.entries(sender.data).map(item => item[1])[i])

  axios.post("http://127.0.0.1:8000/questionnaire_enumerator_list/" ,  JSON.stringify({"questionnaire": array[i].id.toString(),
        "enumerator": "42",
        "vraioufaux": "0"
}) )
        .then(response => {
     
            console.log( response + "questionnaire enumerator inserer");
             
        })
       .catch(function (error) {
             console.log(error);
        });

           }
          }
        })
       .catch(function (error) {
             console.log(error);
        });

        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });
             
        })
       .catch(function (error) {
             console.log(error);
        });



  }
    };
 
</script>
