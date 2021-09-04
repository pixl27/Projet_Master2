<template>
  <div class="questionnairefront">
  
    <!-- If you want to show survey, uncomment the line below -->
 <survey :survey="survey"></survey> 
    <!-- If you want to hide Survey Creator, comment the line below -->
   <!-- <survey-creator></survey-creator>-->
  <div id="surveyResult"></div>
  </div>
  
</template>

<script>
import * as Survey from "survey-vue";
import "survey-vue/survey.css";


    Survey.StylesManager.applyTheme("default");

        const items = [
      { message: 'Foo' },
      { message: 'Bar' }
    ] ;

            

            const json = {
  title: "Quiz Dialecte Merina",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 10,
  maxTimeToFinish: 25,
  firstPageIsStarted: true,
  startSurveyText: "Démarrer",
  pages: [
    { questions: [ {type: "html", html: "Vous aller faire un Quiz sur . <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
    {
      questions: [
        {
          type: "radiogroup",
          name: "civilwar",
          title: items[0].message,
          choices: [ "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950" ],
          correctAnswer: "1850-1900"
        }
      ]
    },
    {
      questions: [
        {
          type: "radiogroup",
          name: "libertyordeath",
          title: "Placeholder",
          choicesOrder: "random",
          choices: [ "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams" ],
          correctAnswer: "Patrick Henry"
        }
      ]
    },
    {
      maxTimeToFinish: 15,
      questions: [
        {
          type: "radiogroup",
          name: "magnacarta",
          title: "Placeholder",
          choicesOrder: "random",
          choices: [ "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower" ],
          correctAnswer: "The foundation of the British parliamentary system"
        }
      ]
    }
  ],
  completedHtml: "<h4>Vous avez répondu vrai a  <b>{correctedAnswers}</b> questions sur <b>{questionCount}</b>.</h4>"
}

    export default {
        name: "surveyjs-component",
      
        data() {
            
       

const survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });
            

            

            return {
                survey: survey
            };
        }
    };
 
</script>
