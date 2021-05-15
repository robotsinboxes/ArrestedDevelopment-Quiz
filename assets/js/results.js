// RESULTS PAGE
// querySelect to grab HTML elements from highScores.html
var title = document.querySelector(".title");
var resultsText = document.querySelector(".resultsText");
var rows = document.querySelector(".rows");
var initialsBox = document.querySelector(".initialsBox");
var buttons = document.querySelector(".buttons");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var submit = document.getElementById('submitForm');
var gameOver = localStorage.getItem("trueOrFalse");
var scoreboard = document.getElementById("scoreboard");
var score = localStorage.getItem("resultsLocalStorage");
var scores = JSON.parse(localStorage.getItem('scores')) || [];

if (gameOver) {
    title.textContent = "Game over! Your score was " + score;
    resultsText.textContent = "Enter initials here";
    button1.textContent = "Submit.";
    initialsBox.style.display = "block";
}

button1.addEventListener('click', function(event) {
    event.preventDefault();
    var initials = initialsBox.value;
    // console.log(initials);
    var result = {
        initials: initials,
        score: score
    };
    scores.push(result);
    localStorage.setItem('scores', JSON.stringify(scores));
    showScoreboard();
} )

function showScoreboard () {
    var box = document.createElement('div')
    title.textContent = "Scoreboard";
    for (let i = 0; i < scores.length; i++) {
        var li = scoreboard.createElement('li')
        li.textContent = `${scores[i].initials}, ${scores[i].score}`
        
    }
    // append list items to list
    // append list to box
    // append box to the page
}