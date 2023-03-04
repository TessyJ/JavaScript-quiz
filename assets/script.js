// Create the Questions List 

const questions = [

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
const startBtn = document.getElementById("start-btn");
const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreContainer = document.querySelector(".score-container");
const scoreEl = document.getElementById("score");
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");
const timeEl = document.getElementById("time");
const submitBtn = document.getElementById("submit-btn");