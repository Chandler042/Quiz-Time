const quizStart = document.getElementById("quizStart");
const quizActive = document.getElementById("quizActive");
const quizResults = document.getElementById("quizResults");

const elements = [quizStart, quizActive, quizResults];

//the const function definitions below are not hoisted

const showOnly = (elementToShow) => {
    elements.forEach(element => {
        if (element === elementToShow) {
            showElement(element);
        
        }
        else {
            hideElement(element);
        };
    })
};

//showElement and hideElement switch css class
const showElement = element => {
    element.classList.remove('hide');
    element.classList.add('show');
};

const hideElement = element => {
    element.classList.remove('show');
    element.classList.add('hide');
};

function quizStartButton() {
    showOnly(quizActive);
    //add timer here
};

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", quizStartButton);