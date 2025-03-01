document.querySelectorAll('.question').forEach(question => {
    let timeLeft = 30;
    let timerDisplay = question.querySelector('.time');
    let interval;

    question.addEventListener('click', function startTimer() {
        if (!interval) {
            interval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    timerDisplay.textContent = timeLeft;
                } else {
                    clearInterval(interval);
                    question.classList.add('disabled');
                }
            }, 1000);
        }
    }, { once: true });
});

document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let correctAnswers = 0;
    const answers = document.querySelectorAll("input[type='radio']:checked, input[type='checkbox']:checked");

    answers.forEach(answer => {
        const parent = answer.parentElement;
        if (answer.value === "correct") {
            correctAnswers++;
            parent.classList.add("correct");
        } else {
            parent.classList.add("wrong");
        }
    });

    const percentage = (correctAnswers / 10) * 100;
    let grade;
    if (percentage === 100) grade = "5";
    else if (percentage >= 81) grade = "4";
    else if (percentage >= 61) grade = "3";
    else grade = "2";

    document.getElementById("result").textContent = `Результат: ${correctAnswers} из 10. Оценка: ${grade}`;
});

