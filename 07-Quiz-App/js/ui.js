export function displayQuestion(questionData, checkAnswer) {

    const questionElement = document.getElementById("question");

    const optionsElement = document.getElementById("options");

    optionsElement.innerHTML = "";

    questionElement.textContent = questionData.question;


    questionData.options.forEach(option => {

        const button = document.createElement("button");

        button.textContent = option;


        button.addEventListener("click", () => {

            document.querySelectorAll("#options button").forEach(btn => {

                btn.classList.remove("selected");

            });

            button.classList.add("selected");

            checkAnswer(option);

        });


        optionsElement.appendChild(button);

    });

}