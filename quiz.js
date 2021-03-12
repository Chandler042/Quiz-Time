//start with making the questions

const questions = [
    {
        question: "What encloses an if/else statement?",
        answers: [
            {text: "quotes", correct: false},
            {text: "regular brackets", correct: false},
            {text: "curly bracket", correct: true},
            {text: "greater/less than symbol", correct: false},
        ],
    },
    {
        question: "What symbols helps distinguish between jquery and javascript?",
        answers: [
            {text: "$", correct: true},
            {text: "!", correct: false},
            {text: "/", correct: false},
            {text: "#", correct: false},
        ],
    },
    {
        question: "How do you add a comment to script?",
        answers: [
            {text: "<!--comment-->", correct: false},
            {text: "// comment", correct: true},
            {text: "function (comment)", correct: false},
            {text: "<!--comment-->", correct: false},
        ],
    },
    {
        question: "Which of the following declares a variable?",
        answers: [
            {text: "log", correct: false},
            {text: "function", correct: false},
            {text: "var", correct: true},
            {text: "class", correct: false},
        ],
    },
    {
        question: "Where would you go to use the debugger command?",
        answers: [
            {text: "console", correct: true},
            {text: "element", correct: false},
            {text: "network", correct: false},
            {text: "all of the above", correct: false},
        ],
    },
];

//adding elements to a list over time 
const viewHighscores = document.getElementById("view-highscores")
const startButton = document.getElementById("start-button")
const nextButton = document.getElementById("next-button")
const closeButton = document.getElementById("close-Button")
const gameOver = document.getElementById("game-over")
const scoreboardList = document.getElementById("scoreboard-list")
const nameSubmit = document.getElementById("name-sumbit")

viewHighscores.addEventListener("click", viewHighscore)
startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
});
closeButton.addEventListener("click", () => {
    gameOver.classList.remove("board-active");
});
scoreSubmit.addEventListener("click", () => {
    gameOver.classList.remove("board-active");
    scoreboardList.classList.add("board-active");
    submitScore();
});
// trying to submit names pulled from a vid, but still not exactly know what it does yet
nameSubmit.addEventListener('keypress', function () {
    if () {
        gameOver.classList.remove("board-active");
        scoreboardList.classList.add("board-active");
        submitScore();
    }
});
clearButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});



