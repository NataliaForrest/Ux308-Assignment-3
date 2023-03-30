// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function() {
    const surveyJson = {
        title: "Employee Safety Training",
        pages: [{
            elements: [{
                type: "radiogroup",
                name: "civilwar",
                title: "When was the American Civil War?",
                choices: [
                    "1796-1803", "1810-1814", "1861-1865", "1939-1945"
                ],
                correctAnswer: "1861-1865"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "libertyordeath",
                title: "Whose quote is this: \"Give me liberty, or give me death\"?",
                choicesOrder: "random",
                choices: [
                    "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                ],
                correctAnswer: "Patrick Henry"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "primeminister",
                title: "Who is Canada's current Prime Minister?",
                choicesOrder: "random",
                choices: [
                    "Stephen Harper", "Kim Campbell", "Justin Trudeau", "Jean Chrétien"
                ],
                correctAnswer: "Justin Trudeau"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "canadaprovinces",
                title: "How many provinces are there in Canada?",
                choicesOrder: "random",
                choices: [
                    "12", "15", "10", "5"
                ],
                correctAnswer: "10"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "covid19",
                title: "What year was COVID-19 first brought to light in Canada and USA?",
                choicesOrder: "random",
                choices: [
                    "2019", "2010", "2023", "2021"
                ],
                correctAnswer: "2019"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "generalsafety",
                title: "What is general safety?",
                choicesOrder: "random",
                choices: [
                    "a multi-disciplinary approach to developing and ensuring safe work practices", "it means what it says; safety that is general", "an approach where your only a bit safe; no need for extra precaution", "none of these; safety is overrated"
                ],
                correctAnswer: "a multi-disciplinary approach to developing and ensuring safe work practices"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "workplacehazards",
                title: "Which one of these arw NOT workplace hazards?",
                choicesOrder: "random",
                choices: [
                    "Safety hazard", "Biological hazard", "Chemical hazard", "Money hazard"
                ],
                correctAnswer: "Money hazard"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "injury",
                title: "The reason a customer or employee usually gets hurt is because of carelessness.",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "False"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "csa",
                title: "What does CSA stand for?",
                choicesOrder: "random",
                choices: [
                    "Canadian Safety Association", "Canadian Standards Association","Canada's Security Assistance","Canadian Shield Alliance"
                ],
                correctAnswer: "Canadian Safety Association"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "magnacarta",
                title: "What is Magna Carta?",
                choicesOrder: "random",
                choices: [
                    "The foundation of the British parliamentary system",
                    "The Great Seal of the monarchs of England",
                    "The French Declaration of the Rights of Man",
                    "The charter signed by the Pilgrims on the Mayflower"
                ],
                correctAnswer: "The foundation of the British parliamentary system"
            }]
        }], 
        completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",

    };
    

const survey = new Model(surveyJson);

return <Survey model={survey} />;
}