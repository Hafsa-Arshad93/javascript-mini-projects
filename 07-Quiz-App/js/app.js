import  questions from "./questions.js";
import { displayQuestion } from "./ui.js";
import { increaseScore, getScore } from "./score.js";

let currentQuestion = 0;
let answered = false;   

const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {

    answered = false;  

    displayQuestion(
        questions[currentQuestion],
        checkAnswer
    );

}

function checkAnswer(selectedOption) {

    if (answered) {
        return;   
    }


    if (selectedOption === questions[currentQuestion].answer) {

        increaseScore();

    }
    answered = true; // answer de diya user ne 


}

loadQuestion();

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        document.getElementById("question").textContent = "Quiz Finished 🎉";

        document.getElementById("options").innerHTML = "";

        nextBtn.style.display = "none";

        scoreElement.textContent =
            `Your Score: ${getScore()} / ${questions.length}`;

    }

});