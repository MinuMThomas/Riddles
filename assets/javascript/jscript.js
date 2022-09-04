const questions = [{
    question: "What is always coming but never arrives?",
    correct: "Tomorrow",
    answers: [
        "car",
        "river",
        "Tomorrow",
        "bus"
    ]
},
{
    question: "What word is spelled incorrectly in every single dictionary??",
    correct: "Incorrectly",
    answers: [
        "parliament",
        "Incorrectly",
        "promise",
        "thursday"
    ]
},
{
    question: "What never asks a question but gets answered all the time??",
    correct: "phone",
    answers: [
        "phone",
        "radio",
        "television",
        "tree"
    ]
},
{
    question: "What is always coming but never arrives?",
    correct: "Tomorrow",
    answers: [
        "car",
        "river",
        "Tomorrow",
        "bus"
    ]
},
{
    question: "What can one catch that is not thrown??",
    correct: "cold",
    answers: [
        "fish",
        "leaf",
        "cold",
        "water"
    ]
},
{
    question: " What can provide us with power and strength to walk through a wall??",
    correct: "A door",
    answers: [
        "A door",
        "A wall",
        "muscles",
        "magic",
    ]
},
{
    question: "When you drop a white hat in the Black sea, what will it become??",
    correct: "It becomes wet",
    answers: [
        "It becomes light",
        "It becomes wet",
        "It becomes white",
        "It becomes black",
    ]
},
{
    question: "Despite its name, what is actually Bombay Duck?",
    correct: "type of fish",
    answers: [
        "type of turtle",
        "type of chicken",
        "type of duck",
        "type of fish"
    ]
}, 
{
    question: "Which ywar is this?",
    correct: "2022",
    answers: [
        "2021",
        "2018",
        "2078",
        "2022"
    ]
},
{
    question: "Who is the best?",
    correct: "Me",
    answers: [
        "Ronaldo",
        "You",
        "Messy",
        "Me"
    ]
},
];

const quizBtn = document.getElementById('btn-starts');
const nextBtn = document.getElementById('btn-submits');
const quizQuestList = document.getElementById('quiz');
const scoreContent = document.getElementById('score');



let quizQuestLive
let score = 0;
let noOfQuestions = questions.length;

quizBtn.addEventListener('click', quizBegin);
nextBtn.addEventListener('click', function () {
    quizQuestLive++;
    nextQuizQuest();
   
});

function quizBegin() {
    quizBtn.classList.add('absent'); //hide start button after first question
    quizQuestLive = 0;
    quizQuestList.classList.remove('absent');
    nextQuizQuest();
    alert("!!!!!BEGIN THE QUIZ!!!!");
}
// next question 
function nextQuizQuest() {
    defReset(); //reset to default
    viewQuizQuest(questions[quizQuestLive]);
}
//question
const questsQuiz = document.getElementById('question');
const listOfAnswer = document.getElementById('btn-ans');

function viewQuizQuest(question) {
    questsQuiz.innerText = question.question;
    //use forEach call back fn to each array element 
    question.answers.forEach(answer => {
        const listItems = document.createElement('li');
        listItems.innerText = answer;
        listItems.classList.add('ans');
        if (answer == question.correct) {
            listItems.dataset.correct = answer;
        }
        listItems.addEventListener('click', quizAns);
        listOfAnswer.appendChild(listItems);
    });
   
}
//function to reset to default state after each question
function defReset() {
    removeStat(document.body);
    nextBtn.classList.add('absent');
    while (listOfAnswer.firstChild) {
        listOfAnswer.removeChild(listOfAnswer.firstChild);
    }
}

function quizAns(ansC) {
    // console.log(ansC);
    const ansBtn = ansC.target;
    // console.log(ansBtn);
    const correct = ansBtn.dataset.correct;
    // console.log(correct);

    checkAnsStatus(document.body, correct);
    // console.log(listOfAnswer);
    //array to use for each loop - include all questions and restart after last question
    Array.from(listOfAnswer.children).forEach(listItems => {
        markAnswers(listItems, listItems.dataset.correct);
    });
    updateScore(score, noOfQuestions);
    if (questions.length > quizQuestLive + 1) {
        nextBtn.classList.remove('absent');

    } else {
        quizBtn.innerText = 'TryAgain!';
        quizBtn.classList.remove('absent');
        quizBtn.addEventListener('click', resetScore());
    }

}
// added background color in css for right and wrong answers
function checkAnsStatus(element, correct) {
    removeStat(element);
   
    if (correct) {
        element.classList.add('correct');
        score++;
        alert('well done');
        
    } else {
        element.classList.add('wrong');
        alert('sorry');
    }
}
//color answer background
function markAnswers(element, correct) {
    if (correct) {
        element.classList.add('correct');        
    } else {
        element.classList.add('wrong');
    }
}

function removeStat(element) {

    element.classList.remove('correct');

    element.classList.remove('wrong');
}
// add score 
const scoreDiv = document.getElementById('valid');
const total = document.getElementById('totalQuestions');
function updateScore(score, noOfQuestions) {
    scoreContent.classList.remove('absent');
    
    scoreDiv.innerHTML = score;
    total.innerHTML = noOfQuestions;

}
//reset score back to zero at the end
function resetScore() {
    score = 0;
    scoreContent.classList.remove('absent'); 
    scoreDiv.innerHTML = 0;
    total.innerHTML = noOfQuestions;

}