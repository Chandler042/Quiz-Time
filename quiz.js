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
const viewHighscores = document.getElementById("view-highscores");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const closeButton = document.getElementById("close-Button");
const gameOver = document.getElementById("game-over");
const scoreboardList = document.getElementById("scoreboard-list");
const nameSubmit = document.getElementById("name-sumbit");
const firstSlide = document.getElementById("first-slide");
const answerButtons = document.getElementById("answer-buttons");
const questionPromptE1 = document.getElementById("question-prompt")

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
// nameSubmit.addEventListener('keypress', function () {
//     if () {
//         gameOver.classList.remove("board-active");
//         scoreboardList.classList.add("board-active");
//         submitScore();
    // }
// });
clearButton.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

//variables for function area
var currentQuestion = 0;
var overallCorrect = 0;
var questionsAttempted = 0;
const quizTime = 60; 
var quizTimeInSec = gameTimeInSec;
var quizTimeInMin = gameTimeInSec / 60;
var totalQuestions = quizQuestions.length;

//creating my functions for starting the game and getting the timer to count down
function startGame() {
    currentQuestion = 0;
    overallCorrect = 0;
    questionsAttempted = 0;
    quizTimeInSec = quizTime;
    resetAnswers();
    startButton.classList.add("hide");
    firstSlide.classList.add("hide");
    answerButtons.classList.remove("hide");
    showNextQuestion();
    startTimer();
}

function startTimer() {
    var timer = document.createElement("div");
    timer.setAttribute("id", "timer");
    document.body.appendChild(timer);

    timer.innerHTML = "Start!";
    myInterval = setInterval( () => {
        quizTimeInSec--;
        var minuteHx = Math.floor(quizTimeInSec / 60);
        var secondHx = quizTimeInSec % 60;
        if (secondHx < 10) {
            secondHx = "0" + secondHx;
        }

        timer.innerHTML = `${minuteHx}:${secondHx}`;

        if (quizTimeInSec <= 0) {
            quizOver ();
        }
    }, 1000);
}

//trying to get the questions to pop up for next question
function nextQuestion() {
    resetAnswers();
    showNextQuestion();
}

function resetAnswers() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.classList.add("hide");
}

function showNextQuestion(question) {
    questionPromptE1.innerText = quizQuestions[currentQuestion].question;
    quizQuestions[currentQuestion].answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.setAttribute("class", "btn btn-info");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

//getting the answers tallied up when correct, and decrease time when wrong by 10 secs
function selectAnswer (event) {
    questionsAttempted++;
    var selectedButton = event.target;
    Array.from(answerButtons.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (selectedButton.dataset.correct) {
        overallCorrect++;
    } else if (
        selectedButton.dataset.correct === false &&
        quizTimeInSec < 10
    ) {
        quizTimeInSec = 0; 
    } else {
        quizTimeInSec -= 10;
    }
}
