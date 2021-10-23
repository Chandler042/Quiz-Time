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
const quizContainer = document.getElementById('question-slides');
const resultsContainer = document.getElementById('game-over');
const submitButton = document.getElementById('submit');


function buildQuiz() {
    //variable to store HTML output
    const output = [];
    //for each question
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        //and for each available answer
        for(letter in currentQuestion.answers) {
            answers.push(
                <label>
                    <input type="radio" name='question${questionNumber}' value='${letter}'/>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
            );
        }
        //add this question and its answer to to the output
        output.push(
            `<div class='question'>${currentQuestion.question}</div>
            <div class='answers'>${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');

    questions.forEach
}

function showResults() {}

//display quiz right away
buildQuiz();

//on sumbit, show results
submitButton.addEventListener('click', showResults)