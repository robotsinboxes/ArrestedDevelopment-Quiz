// QUESTIONS PAGE
// querySelect to grab HTML elements from index.html
var highScores = document.querySelector(".highScores");
var time = document.querySelector(".time");
var countdown = document.querySelector("#countdown");
var startBtn = document.getElementsByTagName("button");
// querySelect to grab HTML elements from questions.html
var qAndA = document.querySelector(".qAndA");
var currentQuestion = document.querySelector(".currentQuestion");
var answers = document.querySelector(".answers");
// var ansBtn = document.getElementsByClassName("ansBtn");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var button = document.querySelector("button");
var result = document.querySelector(".result");

// array of question/answer objects 
var questionArray = [
    {
        question: "1. What does George Sr use as his yarmulke when he first converts to Judaism",
        answers: [
            "a. Toilet paper",
            "b. Part of his left shoe",
            "c. A 'People' magazine",
            "d. A pamphlet about Christianity"
        ],
        correctAnswer: "answerB"
    },
    {
        question: "2. Who is G.O.B.'s accidental wife played by?",
        answers: [
            "a. Charlize Theron",
            "b. Julia Louis Dreyfus",
            "c. Tina Fey",
            "d. Amy Poeler"
        ],        
        correctAnswer: "answerD"
    },
    {
        question: "3. Who is G.O.B.?",
        answers: [
            "a. This guy",
            "b. That guy",
            "c. Who cares?",
            "d. Me."
        ],        
        correctAnswer: "answerA"
    },
    {
        question: "Tobais, Lindsey and Meaby had a folk bank in the 90s. What were they promoting?",
        answers: [
            "a. Zanotab",
            "b. Teamocil",
            "c. Pepto-bismal",
            "d. Themselves"
        ],        
        correctAnswer: "answerB"
    },
    {
        question: "The model home is located in which subdivision and built and owned by the Bluth Company?",
        answers: [
            "a. Lucille Winds",
            "b. Death Valley",
            "c. Sudden Valley",
            "d. Palm Winds"
        ],        
        correctAnswer: "answerC"
    }
]

// function to start game by calling timer and question functions when btn is clicked
function init() {
    console.log("f init working")
    startTimer();
    startQuestion();
}

// function to start timer; countdown from 60 sec
function startTimer() {
    var secondsLeft = 30;
    var timer = setInterval(count, 1000);
     function count() {
         secondsLeft--;
         countdown.textContent = secondsLeft;
         if (secondsLeft === 0) {
             clearInterval(timer);
             gameOver();
         }1000;
     }
 }

var index = 0;
var score = 0;
// display questions/answers in html elements
function startQuestion() {
    console.log(questionArray[index]);
    result.textContent = " ";
    currentQuestion.textContent = questionArray[index].question;
    // print each answer to the question to the buttons
    answerA.textContent = questionArray[index].answers[0];
    answerB.textContent = questionArray[index].answers[1];
    answerC.textContent = questionArray[index].answers[2];
    answerD.textContent = questionArray[index].answers[3];

}

function checkAnswer (chosenBtn) {  
    var chosenAns = chosenBtn.id;
    console.log(chosenAns);
    var correctAns = questionArray[index].correctAnswer; 
    console.log(correctAns);        
    if (chosenAns === correctAns) {
        // result.textContent = "Correct";
        index++;
        score += 5;
        if (index < 5) {
        startQuestion();
        } else {
            results();
        }
    } else {
        // result.textContent = "Sorry, incorrect";
        index++;
        score -= 10;
        if (index < 5) {
            startQuestion();
        } else {
            results();
        }
    }
}
    
function gameOver() {
    var booleanValue = true;
    localStorage.setItem("trueOrFalse", booleanValue);
    location.replace("/results.html");
}

function results() {
    localStorage.setItem("resultsLocalStorage", score);
    location.replace("/results.html");
}


   

