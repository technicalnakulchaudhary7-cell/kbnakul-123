// ================= script.js =================

const questions = {
    c: [
        {q:"C language developed by?", o:["Dennis Ritchie","James Gosling","Guido","Bjarne"], a:0},
        {q:"Extension of C file?", o:[".py",".c",".html",".js"], a:1},
        {q:"Which is a loop in C?", o:["if","for","switch","return"], a:1}
    ],

    python: [
        {q:"Python developed by?", o:["Dennis","Guido van Rossum","James","Elon"], a:1},
        {q:"Extension of python file?", o:[".c",".py",".java",".html"], a:1},
        {q:"Which keyword is used for function?", o:["fun","define","def","function"], a:2}
    ],

    html: [
        {q:"HTML stands for?", o:["Hyper Text Markup Language","HighText","Home Tool","None"], a:0},
        {q:"Tag for paragraph?", o:["<p>","<h1>","<div>","<span>"], a:0},
        {q:"HTML is?", o:["Programming Language","Markup Language","Database","OS"], a:1}
    ],

    css: [
        {q:"CSS stands for?", o:["Color Style","Cascading Style Sheets","Computer Style","None"], a:1},
        {q:"Property for text color?", o:["font","color","size","align"], a:1},
        {q:"CSS used for?", o:["Structure","Design","Database","Logic"], a:1}
    ]
};

let currentQ = 0;
let score = 0;
let currentSubject = "";

// Start Quiz
function startQuiz(subject) {
    currentSubject = subject;
    currentQ = 0;
    score = 0;
    document.getElementById("result").innerHTML = "";
    showQuestion();
}

// Show Question
function showQuestion() {
    let qObj = questions[currentSubject][currentQ];
    let quizDiv = document.getElementById("quiz");

    let html = `<h3>Q${currentQ + 1}: ${qObj.q}</h3>`;

    qObj.o.forEach((opt, i) => {
        html += `<button class="option" onclick="checkAnswer(${i})">${opt}</button>`;
    });

    quizDiv.innerHTML = html;
}

// Check Answer
function checkAnswer(selected) {
    let correct = questions[currentSubject][currentQ].a;

    if (selected === correct) {
        score++;
    }

    currentQ++;

    if (currentQ < questions[currentSubject].length) {
        showQuestion();
    } else {
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("result").innerHTML = `
            <h2>Quiz Completed ✅</h2>
            <h3>Your Score: ${score} / ${questions[currentSubject].length}</h3>
        `;
    }
}