export function displayQuestion(questionData, checkAnswer) {

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    questionElement.textContent = questionData.question;



    questionData.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {

            checkAnswer(option);

        });

        optionsElement.appendChild(button);

    });

}