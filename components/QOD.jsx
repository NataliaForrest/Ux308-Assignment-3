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
                name: "safetytraining",
                title: "What is safety training in the workplace?",
                choices: [
                    "Employees just try and be safe while working", "A training program for employees to learn about precautionary processes and procedures", "A program where employees learn about politics", "None of these"
                ],
                correctAnswer: "A training program for employees to learn about precautionary processes and procedures"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "hazardouschemicalsafetytraining",
                title: "Hazardous Chemical Safety Training teaches employees about:",
                choicesOrder: "random",
                choices: [
                    "The general overview of chemical hazards", "Safety Data Sheets", "Exposure minimization", "All of these answers are correct"
                ],
                correctAnswer: "All of these answers are correct"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "WHMIS",
                title: "What does WHMIS stand for?",
                choicesOrder: "random",
                choices: [
                    "Workplace Hazardous Materials Information System", "Workshop High-Risk Materials Info Structure", "Workplace Harmful Matter Instruction Situation", "None of these"
                ],
                correctAnswer: "Workplace Hazardous Materials Information System"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "personalsafety",
                title: "The 4 P's of personal safety are: policy, procedure, plan, and practice.",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "goldenrule",
                title: "What is the golden rule of safety?",
                choicesOrder: "random",
                choices: [
                    "Work as safely with others as you would have them work with you", "I will follow the safety rules as I would have them followed", "Follow all safety instructions in order to keep a safe workplace", "All of these are acceptable"
                ],
                correctAnswer: "All of these are acceptable"
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
                type: "comment",
                name: "personalexperience",
                title: "In your personal experience, when was a time that a workplace felt unsafe to you? Or when was a time you felt extremely safe while working?",
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
                name: "safetytraining",
                title: "Is safety training required in Ontario?",
                choicesOrder: "random",
                choices: [
                    "Yes it is required", "No it is not","Its a choice made by the company","It doesn't even matter lol"
                ],
                correctAnswer: "Yes it is required"
            }]
        }], 
        completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",

    };
    

const survey = new Model(surveyJson);

return <Survey model={survey} />;
}