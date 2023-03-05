// Create the Questions List 

var questions = [

    {
        "question":"What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choices": [
            "<script href='xxx.js'>",
            "<script name='xxx.js'>",
            "<link type='script' href='xxx.js'>",
            "<script src='xxx.js'>"
        ],
        "answer": "<script src='xxx.js'>"
    },
    {
        "question":"How do you write 'Hello World' in an alert box?",
        "choices": [
            "msgBox('Hello World');",
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');"
        ],
        "answer": "alert('Hello World');"
    },
    {
        "question":"How do you create a function in JavaScript?",
        "choices": [
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "crete function myFunction()"
        ],
        "answer": "function myFunction()"
    },
    {
        "question":"How do you call a function named 'myFunction'?",
        "choices": [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "use myFunction()"

        ],
        "answer": "myFunction()"
    },
    {
        "question":"How to write an IF statement in JavaScript?",
        "choices": [
            "if i = 5",
            "if i == 5 then",
            "if (i == 5)",
            "if i = 5 then"
        ],
        "answer": "if (i == 5)"
    }
]

// DOM elements
var startBtn = document.getElementById("start-button");
var quizContainer = document.querySelector(".quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var scoreContainer = document.querySelector(".score-container");
var scoreEl = document.getElementById("score");
var initialsForm = document.getElementById("initials-form");
var initialsInput = document.getElementById("initials");
var timeEl = document.getElementById("time");
var submitBtn = document.getElementById("submit-btn");

// Other variables
const numQuestions = questions.length;
const maxTime = 60;
let currentQuestion = 0;
let score = 0;
let timeLeft = maxTime;
let timer;


// Event listeners
startBtn.addEventListener("click", startGame);

// Display question and answer choices
const  displayQuestion = () => {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
    q.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = `${index + 1}. ${choice}`;
        btn.addEventListener("click", () => {
            checkAnswer(choice);
        });
        li.appendChild(btn);
        choicesEl.appendChild(li);
    });
}


//Start the Quiz

function startGame() { 
    shuffleQuestion(questions);
    startBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    displayQuestion();
    timer = setInterval(updateTimer, 1000);
}

//End game function
function endGame() {
    clearInterval(timer);
    quizContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreEl.textContent = score;
}

//update the timer
function updateTimer() {
    timeLeft--;
    if (timeLeft < 0) {
        timeLeft = 0;
        endGame();
    }
    timeEl.textContent = timeLeft;
}

//shufflequestions 
function shuffleQuestion(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//check answer if correct
function checkAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score++;
    } else {
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    }
    currentQuestion++;
    if (currentQuestion >= numQuestions || timeLeft === 0) {
        endGame();
    } else {
        displayQuestion();
    }
}

// Now let's save score with our initials
function saveScore(event) {
    event.preventDefault();
    const initials = initialsInput.value.trim();
    if (initials !== "") {
        const scores = JSON.parse(localStorage.getItem("scores")) || [];
        scores.push({
            initials: initials,
            score: score
        });
        scores.sort((a, b) => b.score - a.score);
        localStorage.setItem("scores", JSON.stringify(scores));
        displayScores();
    }
}

// display scores after scores has been submitted 
function displayScores() {
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    const scoresList = document.getElementById("leaderboard-list");
    scoresList.innerHTML = "";
    scores.forEach((score, index) => {
        if (index < 10) {
            const li = document.createElement("li");
            li.textContent = `${score.initials} - ${score.score}`;
            scoresList.appendChild(li);
        }
    });
}

